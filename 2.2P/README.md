# SIT725 - 2.2P Express Web Server

Student: Haider Kamran (s226547746)

A simple Node.js web server built with Express. It serves a web page
from the public folder and provides a calculator REST API.

## How to run

    cd 2.2P
    npm install
    node server.js

Then open http://localhost:3000 in your browser.

## GET endpoints

| Endpoint  | Example            | Result |
|-----------|--------------------|--------|
| /hello    | /hello             | Test message |
| /add      | /add?a=5&b=3       | 8 |
| /subtract | /subtract?a=10&b=4 | 6 |
| /multiply | /multiply?a=6&b=7  | 42 |
| /divide   | /divide?a=20&b=5   | 4 (dividing by 0 returns an error) |

## POST endpoint

/calculate accepts JSON with a, b and operation
(add, subtract, multiply or divide). Example:

    curl -X POST http://localhost:3000/calculate -H "Content-Type: application/json" -d '{"a": 10, "b": 4, "operation": "multiply"}'

## Project structure

    2.2P/
    |-- server.js       Express server and API endpoints
    |-- package.json    Project settings and dependencies
    |-- public/
        |-- index.html  Calculator web page
