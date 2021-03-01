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
    return User;
}());
export { User };
