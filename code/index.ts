type Languages = "fr" | "en";

interface CarInterface {
  brand: string;
  gear?: number;
  age: number;
  sayAge(language: Languages): string;
}

class Car implements CarInterface {
  constructor(
    readonly brand: string,
    readonly gear: number,
    public age: number
  ) {}

  sayAge(language: Languages) {
    return language === "fr"
      ? `j'ai ${this.age} ans `
      : `I am ${this.age} years old`;
  }
}

const opel = new Car("opel", 5, 3);
console.log(opel.sayAge("en")); // I am 3 years old
