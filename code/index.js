var Car = /** @class */ (function () {
    function Car(brand, gear, age) {
        this.brand = brand;
        this.gear = gear;
        this.age = age;
    }
    Car.prototype.sayAge = function (language) {
        return language === "fr"
            ? "j'ai " + this.age + " ans "
            : "I am " + this.age + " years old";
    };
    return Car;
}());
var opel = new Car("opel", 5, 3);
console.log(opel.sayAge("en")); // I am 3 years old
