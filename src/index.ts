import { User } from "./doNotCompile.js";

const john = new User(18, "John", "john@gmail.com", "secretPassword");
john.comparePassword("password"); // return false
