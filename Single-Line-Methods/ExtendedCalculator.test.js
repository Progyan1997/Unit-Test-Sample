// Import methods from ExtendedCalculator
const { factorial, fibonacci, power, reciprocal } = require('./ExtendedCalculator');

// Enter Your Tests Here
test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
});

test('fibonacci(9) should be 34', () => {
    expect(fibonacci(9)).toBe(34);
});

test('10^100 means 100 zeros after 1', () => {
    expect(power(10,100)).toBe(1e100);
});

test('inverse of 7 is 0.142857', () => {
    expect(reciprocal(7)).toBe(0.142857);
});