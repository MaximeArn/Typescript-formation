class Player {
  username: string;
  age: number;
  XP: number;
  defense: number;
  attack: number;

  constructor(obj: Player) {
    for (const field in obj) {
      this[field] = obj[field];
    }
  }
}

const user1 = new Player({
  username: "Franck",
  age: 35,
  XP: 234,
  defense: 154,
  attack: 54,
});

type Elements = "fire" | "ice" | "water" | "stone";

class Wizard extends Player {
  mana: number;
  element: Elements;

  constructor({ mana, element, ...rest }: Wizard) {
    super({ ...rest });
    this.mana = mana;
    this.element = element;
  }
}

const wizard1 = new Wizard({
  username: "Franck",
  age: 35,
  XP: 234,
  defense: 154,
  attack: 54,
  mana: 256,
  element: "fire",
});

console.log(wizard1);
