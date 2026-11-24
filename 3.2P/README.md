# SIT725 - 3.2P Student Recipes

Student: Haider Kamran (s226547746)

An Express + Materialize web app (based on the Prac 3 workshop) showing quick
recipes for students. The recipe cards are loaded from a GET REST endpoint.

## How to run

    cd 3.2P
    npm install
    npm run start

Open http://localhost:3000

## REST endpoint

| Method | Endpoint     | Returns |
|--------|--------------|---------|
| GET    | /api/recipes | { statusCode, data: [ {title, image, link, description} ], message } |

## Materialize components used
Navbar, Materialbox (zoom image), Buttons + waves, Cards with card-reveal,
Modal with form, Toast.

## Structure

    3.2P/
    |-- server.js            Express server + GET /api/recipes
    |-- package.json
    |-- public/
        |-- index.html
        |-- css/styles.css
        |-- js/scripts.js    getRecipes(), addCards(), submitForm()
        |-- images/
