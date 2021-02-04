const inputValue: unknown = 32;
let age: number;

typeof inputValue === "number"
  ? (age = inputValue)
  : console.error("age have not a valid format");
