const { add, subtract, multiply, divide } = require('./Calculator');

// Write Your Test Cases Here
test('Good + Morning should be 0', () => {
    expect(add("Good", "Morning")).toBe(0);
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