var Roles;
(function (Roles) {
    Roles[Roles["visitor"] = 0] = "visitor";
    Roles[Roles["user"] = 1] = "user";
    Roles[Roles["moderator"] = 2] = "moderator";
    Roles[Roles["admin"] = 2] = "admin";
})(Roles || (Roles = {}));
console.log(Roles[2]); // return "Admin"
