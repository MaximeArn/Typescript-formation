interface User<T> {
  age: number;
  name: string;
  hobbies: T; //dynamic type
}

const User1: User<string> = {
  age: 25,
  name: "John",
  hobbies: "I love sport and cinema",
};

const User2: User<string[]> = {
  age: 25,
  name: "John",
  hobbies: ["sport", "cinema"],
};
