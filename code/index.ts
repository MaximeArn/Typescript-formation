class Person {
  static readonly definition: string = "a human being regarded as an individual.";
  constructor() {}
}

new Person().definition;
//Property 'definition' is a static member of type 'Person'

console.log(Person.definition);
// a human being regarded as an individual.
