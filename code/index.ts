interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
  description?: string;
  adress?: string;
}

const user1: Required<User> = {
  name: "john",
  age: 25,
  sex: "male",
  role: "user",
}; //ERROR
/*
Type '{ name: string; age: number; sex: "male"; role: "user"; }' 
is missing the following properties from type 'Required<User>': 
description, adress 
*/
