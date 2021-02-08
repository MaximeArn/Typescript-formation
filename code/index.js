var Car = /** @class */ (function () {
    function Car(brand, gear) {
        this.brand = brand;
        this.gear = gear;
    }
    Car.prototype.getGear = function () {
        return this.gear;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    return Car;
}());
var opel = new Car("opel", 5);
console.log(opel.getBrand() + " is of type " + typeof opel.getBrand());
