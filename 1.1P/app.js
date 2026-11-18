// SIT725 - 1.1P Introduction to Programming
// Author: Haider Kamran (s226547746)

// 1. Variables
const unit = "SIT725";
let week = 1;
console.log(`Welcome to ${unit} - Week ${week}`);

// 2. Functions
function add(a, b) {
  return a + b;
}
const multiply = (a, b) => a * b;
console.log("5 + 3 =", add(5, 3));
console.log("5 x 3 =", multiply(5, 3));

// 3. Conditions
function grade(mark) {
  if (mark >= 80) return "HD";
  else if (mark >= 70) return "D";
  else if (mark >= 60) return "C";
  else if (mark >= 50) return "P";
  else return "N";
}
console.log("Mark 85 ->", grade(85));

// 4. Loops and arrays
const technologies = ["JavaScript", "Node.js", "HTML", "CSS", "Git"];
for (let i = 0; i < technologies.length; i++) {
  console.log(`Tech ${i + 1}: ${technologies[i]}`);
}

// 5. Objects
const student = { name: "Haider Kamran", id: "s226547746", targetGrade: "HD" };
console.log(`Student: ${student.name} (${student.id}), target: ${student.targetGrade}`);
