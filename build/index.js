"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
var Car = (function () {
    function Car(brand, color, id) {
        this.brand = brand;
        this.color = color;
        this.id = id;
    }
    Car.prototype.setId = function (val) {
        this.id = val;
    };
    Car.prototype.getId = function () {
        return this.id;
    };
    __decorate([
        readonly(true)
    ], Car.prototype, "setId", null);
    __decorate([
        readonly(true)
    ], Car.prototype, "getId", null);
    return Car;
}());
var audi = new Car("Audi", "black", 35);
console.log(audi.getId());
audi.getId = function () {
    return 56;
};
