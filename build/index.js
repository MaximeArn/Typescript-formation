import { User } from "./doNotCompile.js";
var john = new User(18, "John", "john@gmail.com", "secretPassword");
john.comparePassword("password");
