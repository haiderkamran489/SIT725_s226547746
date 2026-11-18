// SIT725 - 2.2P Express Web Server with Calculator REST API
// Author: Haider Kamran (s226547746)

const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static(__dirname + "/public"));
// Allow the server to read JSON sent in POST requests
app.use(express.json());

// ---------- Calculator functions ----------
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Helper: read a and b from the URL and check they are numbers
function getNumbers(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Please provide two numbers, e.g. ?a=5&b=3" });
    return null;
  }
  return { a, b };
}

// ---------- GET endpoints ----------
app.get("/hello", (req, res) => {
  res.send("Hello! This is a simple Express endpoint.");
});

// e.g. http://localhost:3000/add?a=5&b=3
app.get("/add", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "add", a: n.a, b: n.b, result: add(n.a, n.b) });
});

app.get("/subtract", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "subtract", a: n.a, b: n.b, result: subtract(n.a, n.b) });
});

app.get("/multiply", (req, res) => {
  const n = getNumbers(req, res);
  if (n) res.json({ operation: "multiply", a: n.a, b: n.b, result: multiply(n.a, n.b) });
});

app.get("/divide", (req, res) => {
  const n = getNumbers(req, res);
  if (!n) return;
  if (n.b === 0) return res.status(400).json({ error: "Cannot divide by zero" });
  res.json({ operation: "divide", a: n.a, b: n.b, result: divide(n.a, n.b) });
});

// ---------- POST endpoint ----------
// Body: { "a": 10, "b": 4, "operation": "add" }
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
