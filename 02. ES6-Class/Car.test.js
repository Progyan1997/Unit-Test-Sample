const Car = require('./Car');

// TODO: If a Car Object is Instantiated properly with Optional Parameters
// Reference: https://jestjs.io/docs/en/es6-class-mocks
const A = new Car();

test('A.getSpeed() should return NaN',() => {
    expect(isNaN(A.getSpeed())).toBe(true);
});

test('A.getPosition() sould return NaN',() => {
    expect(isNaN(A.getPosition())).toBe(true);
});

const B = new Car(10,10,10);

test('B.getSpeed() should return NaN',() => {
    expect(isNaN(B.getSpeed())).toBe(true);
});

test('B.getPosition() sould return NaN',() => {
    expect(isNaN(B.getPosition())).toBe(true);
});

const C = new Car();

test('C.getSpeed(10) should return NaN',() => {
    expect(isNaN(C.getSpeed(10))).toBe(true);
});

test('C.getPosition(10) sould return NaN',() => {
    expect(isNaN(C.getPosition(10))).toBe(true);
});

const D = new Car(10,10,10);

test('D.getSpeed(10) should return NaN',() => {
    expect(isNaN(D.getSpeed(10))).toBe(true);
});

test('D.getPosition(10) sould return NaN',() => {
    expect(isNaN(D.getPosition(10))).toBe(true);
});