var User = /** @class */ (function () {
    function User(obj) {
        for (var field in obj) {
            this[field] = obj[field];
        }
    }
    return User;
}());
var user1 = new User({
    username: "Franck",
    age: 35,
    XP: 234,
    defense: 154,
    attack: 54
});
console.log(user1);
