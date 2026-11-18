// SIT725 - 2.2P Express Web Server with REST API
// Author: Haider Kamran (s226547746)

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ================= Part 1: Random Quote API =================
let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET a random quote: http://localhost:3000/api/quote
app.get("/api/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// POST a new quote. Body: { "quote": "Your new quote" }
app.post("/api/quote", (req, res) => {
  const { quote } = req.body;
  if (!quote || typeof quote !== "string") {
    return res.status(400).json({ error: "Please provide a quote as a string." });
  }
  quotes.push(quote);
  res.status(201).json({ message: "Quote added!", total: quotes.length });
});

// ================= Part 2: Calculator REST API =================
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Helper: read a and b from the query string and validate them
function getNumbers(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Please provide two numbers, e.g. ?a=5&b=3" });
    return null;
  }
  return { a, b };
}

// GET /add?a=5&b=3
app.get("/add", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "add", a: n.a, b: n.b, result: add(n.a, n.b) });
});

// GET /subtract?a=10&b=4
app.get("/subtract", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "subtract", a: n.a, b: n.b, result: subtract(n.a, n.b) });
});

// GET /multiply?a=6&b=7
app.get("/multiply", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "multiply", a: n.a, b: n.b, result: multiply(n.a, n.b) });
});

// GET /divide?a=20&b=5
app.get("/divide", (req, res) => {
  const n = getNumbers(req, res);
  if (!n) return;
  if (n.b === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  res.json({ operation: "divide", a: n.a, b: n.b, result: divide(n.a, n.b) });
});

// GET /square?num=5  (workshop Example 2)
app.get("/square", (req, res) => {
  const num = parseFloat(req.query.num);
  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  res.send(`The square of ${num} is: ${num * num}`);
});

// POST /calculate  Body: { "a": 10, "b": 4, "operation": "multiply" }
app.post("/calculate", (req, res) => {
  const { a, b, operation } = req.body;
  const ops = { add, subtract, multiply, divide };
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "a and b must be numbers" });
  }
  if (!ops[operation]) {
    return res.status(400).json({ error: "operation must be add, subtract, multiply or divide" });
  }
  if (operation === "divide" && b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ operation, a, b, result: ops[operation](a, b) });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
