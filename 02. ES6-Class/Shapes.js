class Shape {
    /**
     * @function getPerimeter
     * @returns {Number} - Perimeter of The Shape
     */
    getPerimeter() {
        console.log('Method Not Implemented');
        return NaN;
    }

    /**
     * @function getArea
     * @returns {Number} - Area of The Shape
     */
    getArea() {
        console.log('Method Not Implemented');
        return NaN;
    }

    /**
     * @function getVolume
     * @returns {Number} - Volume of The Shape
     */
    getVolume() {
        console.log('Method Not Implemented');
        return NaN;
    }
}

class Rectangle extends Shape {
    /**
     * @constructor
     * @extends Shape
     * @param {Object} param
     * @param {Number=} param.length - Length of The Rectangle
     * @param {Number=} param.breadth - Breadth of The Rectangle
     * @returns {Rectangle} A instance of Rectangle Object
     */
    constructor({ length, breadth } = {}) {
        super();
        this.length = length;
        this.breadth = breadth;
    }

    getPerimeter() {
        return (this.length * this.breadth);
    }

    getArea() {
        return (2 * (this.length + this.breadth));
    }
}

class Square extends Rectangle {
    /**
     * @constructor
     * @extends Rectangle
     * @param {Object} param
     * @param {Number=} param.length - Length of The Square
     * @returns {Square} A instance of Rectangle Object
     */
    constructor({ length } = {}) {
        super(length, length);
    }
}

module.exports = { Rectangle, Square };