interface DogInterface {
  color: string;
  readonly age: number;
}

const dog: DogInterface = {
  color: "brown",
  age: 18,
};
dog.age = 35;
