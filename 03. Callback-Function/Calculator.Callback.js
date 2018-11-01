// Addition Callback
const addCallback = (a, b, c) => c(parseInt(a) + parseInt(b));

// Subtraction Callback
const subCallback = (a, b, c) => c(parseInt(a) - parseInt(b));

// Multiplication Callback
const multiCallback = (a, b, c) => c(parseInt(a) * parseInt(b));

// Division Callback
const divCallback = (a, b, c) => c(parseInt(a) / parseInt(b));

module.exports = { addCallback, subCallback, multiCallback, divCallback };
