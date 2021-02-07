class User {
  username: string;
  age: number;
  XP: number;
  defense: number;
  attack: number;

  constructor(obj: User) {
    for (const field in obj) {
      this[field] = obj[field];
    }
  }
}

const user1 = new User({
  username: "Franck",
  age: 35,
  XP: 234,
  defense: 154,
  attack: 54,
});

console.log(user1);
