// Factorial of an Integer
const factorial = a => a * factorial(a - 1);

// Fibonacci Series
const fibonacci = a => a + fibonacci(a - 1);

// Exponential of an Integer
const power = (a, b) => a * power(a, b - 1);

// Reciprocal of an Integer
const reciprocal = a => 1 / a;

module.exports = { factorial, fibonacci, power, reciprocal };
