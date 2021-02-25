interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
  description: string;
  adress: string;
}

type UserAtCreation = Omit<User, "name" | "age" | "role">;

const user1: UserAtCreation = {
  sex: "female",
  description: "my description",
  adress: "my adress",
};
