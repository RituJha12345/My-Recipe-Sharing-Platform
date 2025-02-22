# My-Recipe-Sharing-Platform
The core functionality revolves around creating, sharing, and managing recipes, which is a straightforward concept. The project can be broken down into manageable components, such as user authentication, recipe creation, and sharing features.  
/recipe-sharing-platform
|-- /public
|-- /src
|   |-- /components
|   |   |-- Header.js
|   |   |-- RecipeForm.js
|   |   |-- RecipeList.js
|   |   |-- RecipeCard.js
|   |   |-- Auth.js
|   |-- /pages
|   |   |-- Home.js
|   |   |-- Login.js
|   |   |-- Register.js
|   |-- /styles
|   |   |-- App.css
|   |-- App.js
|   |-- index.js
|-- package.json


CODE HERE     
<!DOCTYPE html>
<!-- saved from url=(0022)http://localhost:3000/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <link rel="icon" href="http://localhost:3000/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="http://localhost:3000/logo192.png">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="http://localhost:3000/manifest.json">
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  <script defer="" src="./React App_files/bundle.js.download"></script><style>.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 400px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
}

.navbar {
  margin: 0;
  width: 100%;
  height: 80px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
}

a {
  color: white;
  text-decoration: none;
  margin: 10px;
  font-size: 25px;
}
a:hover{
  scale: 1.1;
  border-bottom: 2px dotted red;
}

.create-recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px;
}
.create-recipe form {
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

li {
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}

h2 {
  margin-top: 0;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

img {
  width: 400px;
}

p {
  max-width: 400px;
  font-size: 12px;
  display: -webkit-box;
  line-clamp: 5;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 6em
}

button{
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: aqua;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO2dFQUM4RDtBQUNoRTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixxQkFBcUIsRUFBRSxxQkFBcUI7RUFDNUMsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5BcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sXHJcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmF1dGgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5hdXRoLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5hOmhvdmVye1xyXG4gIHNjYWxlOiAxLjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCByZWQ7XHJcbn1cclxuXHJcbi5jcmVhdGUtcmVjaXBlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5jcmVhdGUtcmVjaXBlIGZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBsaW5lLWNsYW1wOiA1O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMzsgLyogTGltaXQgdG8gMyBsaW5lcyAqL1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXgtaGVpZ2h0OiA2ZW1cclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */</style></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"><div class="App"><div class="navbar"><a href="http://localhost:3000/">Home</a><a href="http://localhost:3000/create-recipe">Create Recipe</a><a href="http://localhost:3000/saved-recipes">Saved Recipes</a><a href="http://localhost:3000/auth">Login/Register</a></div><div><h1>Recipes</h1><ul><li><div><h2>Idli Recipe</h2><button>Save</button></div><div class="instructions"><p>Times FoodRecipesIdli
Idli Recipe
by TNNUpdated : Apr 26, 2021, 12:18 IST
Avg. Rating
Rate
 Comments (17)
Facebook
Twitter
Pinit
Idli
Total Time1hPrep Time15 mCalories430
Bookmark
Add To Collection
Do you love South Indian cuisine? Well, here is the recipe of Idli, which is super-easy to make. Now, there are two ways of making Idli at home. Here is the traditional Idli recipe prepared with rice. Learn how to make rice idli at home and that too in just 4 easy steps.




This idli recipe is a must-try for those who love to enjoy soft idlis. This is a traditional idli recipe made with easily available ingredients such as rice, urad dal, salt etc. Make soft idli batter easily and try this recipe for a healthy breakfast or snacks. You can also pair the idlis with sambar and coconut chutney for a fulfilling meal. Some people also like to have tomato-garlic chutney with plain idli, which is orange in colour as it gives the dish more taste and flavour. These days you can easily find idlis made of semolina, which is a little difficult to digest. Here’s an easy recipe of idli which requires very basic ingredients and can be prepared very easily. The nutrition content of idli is very high and it is said to be low in calories. Those who are looking to lose weight can try this easy yet quick dish!




Read more


Ingredients of Idli

4 Servings
2 1/2 cup basmati rice
1/2 tablespoon fenugreek seeds
5 tablespoon sesame oil
1 1/2 cup urad dal
salt as required
water as required

How to make Idli
Step 1 Soak the rice &amp; dal and grind into a paste &amp; combine
To prepare this popular South Indian recipe, wash rice and urad dal separately until the water runs clean and add fenugreek seeds to the rice. Soak it in water for 4-6 hours. </p></div><img src="./React App_files/idli.jpg" alt="Idli Recipe"><p>Cooking Time: 50 minutes</p></li><li><div><h2>Dosa Recipe, How to make Dosa Batter</h2><button>Save</button></div><div class="instructions"><p>1. Add ½ cup urad dal (skinned black whole lentils), 2 tablespoon chana dal (bengal gram) and ½ teaspoon methi seeds to a large bowl/pot. Add 1½ cups raw rice to another bowl.</p></div><img src="./React App_files/dosa-recipe.webp" alt="Dosa Recipe, How to make Dosa Batter"><p>Cooking Time: 42 minutes</p></li><li><div><h2>Medu Vada Recipe</h2><button>Save</button></div><div class="instructions"><p>Add 1 cup urad dal to a large bowl and wash it well rubbing with your hand. Rinse it well at least 3 to 4 times &amp; drain the water. This removes the white powdery substance on the urad dal.</p></div><img src="./React App_files/medu-vada-1.webp" alt="Medu Vada Recipe"><p>Cooking Time: 120 minutes</p></li><li><div><h2>Biryani</h2><button>Save</button></div><div class="instructions"><p>Create briyani</p></div><img src="./React App_files/Shutterstock_2047827035-1024x683.jpg" alt="Biryani"><p>Cooking Time: 120 minutes</p></li></ul></div></div></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  

</body></html>

