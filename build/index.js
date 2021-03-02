"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var sealClass = function (constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(constructor.prototype);
    constructor.prototype.newProp = "newValue";
};
var User = (function () {
    function User(age, name, email, password) {
        this.age = age;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.comparePassword = function (pwd) {
        return pwd == this.password;
    };
    User = __decorate([
        sealClass
    ], User);
    return User;
}());
