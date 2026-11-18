# SIT725 - 2.2P Express Web Server

Student: Haider Kamran (s226547746)

A Node.js web server built with Express. It serves a web page from the
public folder and provides REST API endpoints: a random quote API and a
calculator API.

## How to run

    cd 2.2P
    npm install
    npm run start

Then open http://localhost:3000 in your browser.

## Part 1 - Random Quote API

| Method | Endpoint   | Description |
|--------|------------|-------------|
| GET    | /api/quote | Returns a random quote |
| POST   | /api/quote | Adds a new quote. Body: {"quote": "Your quote"} |

## Part 2 - Calculator API

| Method | Endpoint   | Example            | Result |
|--------|------------|--------------------|--------|
| GET    | /add       | /add?a=5&b=3       | 8 |
| GET    | /subtract  | /subtract?a=10&b=4 | 6 |
| GET    | /multiply  | /multiply?a=6&b=7  | 42 |
| GET    | /divide    | /divide?a=20&b=5   | 4 (dividing by 0 returns an error) |
| GET    | /square    | /square?num=5      | The square of 5 is: 25 |
| POST   | /calculate | Body: {"a": 10, "b": 4, "operation": "multiply"} | 40 |

## Testing POST endpoints with curl

    curl -X POST http://localhost:3000/api/quote -H "Content-Type: application/json" -d '{"quote": "Keep pushing forward!"}'

    curl -X POST http://localhost:3000/calculate -H "Content-Type: application/json" -d '{"a": 10, "b": 4, "operation": "multiply"}'

## Project structure

    2.2P/
    |-- server.js       Express server and API endpoints
    |-- package.json    Project settings, dependencies and start script
    |-- public/
        |-- index.html  Web page (quote, square and calculator)
