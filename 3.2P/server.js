// SIT725 - 3.2P Student Recipes
// Author: Haider Kamran (s226547746)
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// Serve the web page (HTML, CSS, JS, images) from the public folder
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Recipe data (same shape as the workshop cards: title, image, link, description)
const recipeList = [
  {
    title: "Fluffy Pancakes",
    image: "images/recipe-1.jpg",
    link: "15 min - Breakfast",
    description: "Flour, milk, egg and a pinch of sugar. Cook on a hot pan until golden and serve with honey or fruit."
  },
  {
    title: "Butter Chicken",
    image: "images/recipe-2.jpg",
    link: "40 min - Dinner",
    description: "Chicken simmered in a creamy tomato and spice sauce. Serve with rice or naan - great for meal prep."
  },
  {
    title: "Garlic Pasta",
    image: "images/recipe-3.jpg",
    link: "20 min - Lunch",
    description: "Spaghetti tossed with olive oil, garlic, chilli flakes and parmesan. Cheap, quick and filling."
  },
  {
    title: "Avocado Toast",
    image: "images/recipe-4.jpg",
    link: "5 min - Snack",
    description: "Smashed avocado on toasted sourdough with lemon, salt, pepper and an optional poached egg."
  }
];

// GET REST endpoint - the client calls this to build the cards
app.get("/api/recipes", (req, res) => {
  res.json({ statusCode: 200, data: recipeList, message: "Success" });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
