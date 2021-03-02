const logInstanceProp = (target: any, propertyKey: string) => {
  console.log(target); // prototype of the classe
  console.log(propertyKey);
};

const logStaticProp = (target: any, propertyKey: string) => {
  console.log(target); // constructor of the class
  console.log(propertyKey);
};

class User {
  @logInstanceProp
  age: number;
  name: string;
  email: string;
  @logStaticProp
  static password = "strongPassword";

  constructor(a: number, n: string, e: string) {
    this.age = a;
    this.email = e;
    this.name = n;
  }
}
