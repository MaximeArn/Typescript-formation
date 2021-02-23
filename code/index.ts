abstract class Person {
  constructor() {}

  abstract saySomething(something: string): void;
}

class Women extends Person {
  saySomething(something: string) {
    console.log(something);
  }
}

new Women().saySomething();
// Expected 1 arguments, but got 0

new Women().saySomething("hello I am a woman");
// log "hello I am a woman"
