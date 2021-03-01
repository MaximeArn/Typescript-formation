import { User } from "./doNotCompile";

const john = new User(18, "John", "john@gmail.com", "secretPassword");
john.comparePassword("password"); // retrun false
