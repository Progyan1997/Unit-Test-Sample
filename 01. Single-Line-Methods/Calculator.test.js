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

test('4 + 9 should be 13', () => {
    expect(add(4,9)).toBe(13);
});

test('0 + 0 should be 0', () => {
    expect(add(0,0)).toBe(0);
});

test('Good - Morning should be NaN', () => {
    expect(isNaN(subtract("Good", "Morning"))).toBe(true);
});

test('10 - 5 should be 5', () => {
    expect(subtract(10,5)).toBe(5);
});

test('-10 - 5 should be -15',() => {
    expect(subtract(-10,5)).toBe(-15);
});

test('8 - 17 should be -9', () => {
    expect(subtract(8,17)).toBe(-9);
});

test('0 - 0 should be 0', () => {
    expect(subtract(0,0)).toBe(0);
});

test('1 - 0 should be 1', () => {
    expect(subtract(1,0)).toBe(1);
});

test('Good * Morning should be NaN', () => {
    expect(isNaN(multiply("Good", "Morning"))).toBe(true);
});

test('8 * 5 should be 40', () => {
    expect(multiply(8,5)).toBe(40);
});

test('(-7) * 5 should be -35',() => {
    expect(multiply(-7,5)).toBe(-35);
});

test('(-7) * (-5) should be 35', () => {
    expect(multiply(-7,-5)).toBe(35);
});

test('0 * 0 should be 0', () => {
    expect(multiply(0,0)).toBe(0);
});

test('1 * 0 should be 0', () => {
    expect(multiply(1,0)).toBe(0);
});

test('Good / Morning should be NaN', () => {
    expect(isNaN(divide("Good", "Morning"))).toBe(true);
});

test('10 / 5 should be 2', () => {
    expect(divide(10,5)).toBe(2);
});

test('(-95) / 5 should be -19',() => {
    expect(divide(-95,5)).toBe(-19);
});

test('(-12) * (-6) should be 2', () => {
    expect(divide(-12,-6)).toBe(2);
});

test('1 / 1 should be 1', () => {
    expect(divide(1,1)).toBe(1);
});

test('0 / 1 should be 0', () => {
    expect(divide(0,1)).toBe(0);
});

test('0 / 0 should be NaN', () => {
    expect(isNaN(divide(0,0))).toBe(true);
});

test('1 / 0 should be NaN', () => {
    expect(isNaN(divide(1,0))).toBe(true);
});