// calculator.js

// Function to add two numbers
function add(number1, number2) {
  return number1 + number2;
}

// Function to subtract the second number from the first
function subtract(number1, number2) {
  return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
  return number1 * number2;
}

// Function to divide the first number by the second
function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: Division by zero";
  }
  return number1 / number2;
}

// Event listener for the add button
document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// Event listener for the subtract button
document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// Event listener for the multiply button
document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

// Event listener for the divide button
document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
