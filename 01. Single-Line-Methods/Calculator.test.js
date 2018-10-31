const { add, subtract, multiply, divide } = require('./Calculator');

// Write Your Test Cases Here
test('Good + Morning should be NaN', () => {
    expect(isNaN(add("Good", "Morning"))).toBe(true);
});

test('5 + 10 should be 15', () => {
    expect(add(5, 10)).toBe(15);
});

test('-10 + 5 should be -5', () => {
    expect(add(-10, 5)).toBe(-5);
});

test('Good - Morning should be 0', () => {
    expect(subtract("Good", "Morning")).toBe(0);
});

test('Good * Morning should be 0', () => {
    expect(multiply("Good", "Morning")).toBe(0);
});

test('Good / Morning should be 0', () => {
    expect(divide("Good", "Morning")).toBe(0);
});