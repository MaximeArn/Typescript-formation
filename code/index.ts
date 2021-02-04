enum Roles {
  visitor,
  user,
  moderator,
  admin = 2,
}
console.log(Roles[2]); // return "admin"
