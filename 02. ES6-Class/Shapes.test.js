const { Rectangle, Square } = require('./Shapes');

// TODO: If a Rectangle and a Square Object is Instantiated properly with Optional Parameters
// Reference: https://jestjs.io/docs/en/es6-class-mocks
const A = new Rectangle();

test('A.getPerimeter() should return 0',() => {
    expect(A.getPerimeter()).toBe(0);
});

test('A.getArea() should return 0',() => {
    expect(A.getArea()).toBe(0);
});

const B = new Rectangle({ length: 3, breadth: 6 });

test('B.getPerimeter(3,6) should return 18',() => {
    expect(B.getPerimeter()).toBe(18);
});

test('B.getArea(3,6) should return 18',() => {
    expect(B.getArea()).toBe(18);
});
