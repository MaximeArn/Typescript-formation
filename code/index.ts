class Person {
  constructor() {}

  static sayHello() {
    console.log("Hello world !!");
  }
}

new Person().sayHello(); //ERROR
//Property 'sayHello' is a static member of type 'Person'

Person.sayHello();
// a human being regarded as an individual.
