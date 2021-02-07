var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Player = /** @class */ (function () {
    function Player(obj) {
        for (var field in obj) {
            this[field] = obj[field];
        }
    }
    return Player;
}());
var user1 = new Player({
    username: "Franck",
    age: 35,
    XP: 234,
    defense: 154,
    attack: 54
});
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(_a) {
        var mana = _a.mana, element = _a.element, rest = __rest(_a, ["mana", "element"]);
        var _this = _super.call(this, __assign({}, rest)) || this;
        _this.mana = mana;
        _this.element = element;
        return _this;
    }
    return Wizard;
}(Player));
var wizard1 = new Wizard({
    username: "Franck",
    age: 35,
    XP: 234,
    defense: 154,
    attack: 54,
    mana: 256,
    element: "fire"
});
console.log(wizard1);
