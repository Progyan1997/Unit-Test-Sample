// Import methods from ExtendedCalculator
const { factorial, fibonacci, power, reciprocal } = require('./ExtendedCalculator');

// Enter Your Tests Here
test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial of 4 is 24', () => {
    expect(factorial(4)).toBe(24);
})

test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of -1 should be 0', () => {
    expect(factorial(-1)).toBe(0);
});

test('fibonacci(9) should be 34', () => {
    expect(fibonacci(9)).toBe(34);
});

test('fibonacci(5) should be 7', () => {
    expect(fibonacci(5)).toBe(7);
});

test('fibonacci(0) should be 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('fibonacci(1) should be 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('fibonacci(2) should be 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('fibonacci(-1) should be NaN', () => {
    expect(isNaN(fibonacci(-1))).toBe(true);
});

test('10^100 means 100 zeros after 1', () => {
    expect(power(10,100)).toBe(1e100);
});

test('2^5 means 32', () => {
    expect(power(2,5)).toBe(32);
});

test('1^0 means 1', () => {
    expect(power(1,0)).toBe(1);
});

test('0^1 means 0', () => {
    expect(power(0,1)).toBe(0);
});

test('0^0 means 1', () => {
    expect(power(0,0)).toBe(1);
});

test('inverse of 7 is 0.142857', () => {
    expect(reciprocal(7)).toBe(0.142857);
});

test('inverse of 1 is 1', () => {
    expect(reciprocal(1)).toBe(1);
});

test('inverse of 2 is 0.5', () => {
    expect(reciprocal(2)).toBe(0.5);
});

test('inverse of 4 is 0.25', () => {
    expect(reciprocal(4)).toBe(0.25);
});

test('inverse of 0 is NaN', () => {
    expect(isNaN(reciprocal(0))).toBe(true);
});