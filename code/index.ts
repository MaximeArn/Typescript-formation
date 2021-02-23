interface Human {
  height: number;
  weight: number;
  age: number;
  sex: "female" | "male";
}

interface Animal {
  race: string;
  color: string;
}

type Werewolf = Animal & Human;

const werewolf: Werewolf = {
  height: 178,
  weight: 85,
  age: 150,
  sex: "male",
  race: "wolf",
  color: "brown",
};
