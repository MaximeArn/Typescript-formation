interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
}

const sensibleUser: Readonly<User> = {
  name: "john",
  age: 25,
  sex: "male",
  role: "user",
};

sensibleUser.role = "admin"; //ERROR
//Cannot assign to 'role' because it is a read-only
