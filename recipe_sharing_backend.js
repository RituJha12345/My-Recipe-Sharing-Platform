
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');
const multer = require('multer');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { createProxyMiddleware } = require('http-proxy-middleware');
const session = require('express-session');
const http = require('http');
const { Server } = require('socket.io');
const winston = require('winston');
const nodemailer = require('nodemailer');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const redis = require('redis');
const jwt = require('jsonwebtoken');
const { Queue } = require('bullmq');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Redis client setup
const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});
redisClient.connect().catch(console.error);

// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console()
    ]
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Session management
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Reverse Proxy Example
app.use('/external-api', createProxyMiddleware({
    target: 'https://thirdpartyapi.com',
    changeOrigin: true,
}));

// GraphQL Authentication Middleware
const authenticateGraphQL = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

// GraphQL API
app.use('/graphql', authenticateGraphQL, graphqlHTTP({
    schema,
    graphiql: true
}));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => logger.error(err));

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Background Job Queue (BullMQ)
const emailQueue = new Queue('emailQueue', { connection: redisClient });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// WebSocket event
io.on('connection', (socket) => {
    console.log('New WebSocket connection');
    socket.on('message', (data) => {
        io.emit('message', data);
    });
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Queue-based Email Sending
app.post('/send-email', async (req, res) => {
    try {
        await emailQueue.add('sendEmail', req.body);
        res.status(200).json({ message: 'Email queued successfully' });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Error queueing email' });
    }
});

// Email Processing Worker
emailQueue.process(async (job) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: job.data.to,
            subject: job.data.subject,
            text: job.data.text
        });
        logger.info('Email sent successfully');
    } catch (error) {
        logger.error('Error sending email:', error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
