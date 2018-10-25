class Car {
    /**
     * @constructor
     * @param {Object} param
     * @param {Number=} param.speed - Initial Speed of The Car
     * @param {Number=} param.acceleration - Acceleration of The Car
     * @param {Number=} param.initial - Initial Position of The Car
     * @returns {Car} A Car Instance
     */
    constructor({ speed, acceleration, initial } = {}) {
        this.speed = speed || 10;
        this.acceleration = acceleration;
        this.initial = initial || 0;
    }

    /**
     * @function getSpeed
     * @param {Number} time - Current Time Unit
     * @returns {Number} Current Speed of The Car 
     */
    getSpeed(time) {
        return (this.speed + this.acceleration * time);
    }

    /**
     * @function getPosition
     * @param {Number} time - Current Time Unit
     * @returns {Number} Current Position of The Car 
     */
    getPosition(time) {
        return ((this.speed + 0.5 * this.acceleration * time) * time);
    }
}

export default Car;