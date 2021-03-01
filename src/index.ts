interface UserType {
  age: number;
  name: string;
  email: string;
  password: string;
  comparePassword(pwd: string): boolean;
}

const constructorDecorator = (message: string) => {
  return (constructor: Function) => {
    console.log(message);
    console.log(constructor.prototype);
    console.log("adding new property");
    constructor.prototype.newProp = "newValue";
    console.log("new property added");
    console.log(constructor.prototype);
  };
};

@constructorDecorator("this is a decorator factory ")
class User implements UserType {
  constructor(
    public age: number,
    public name: string,
    public email: string,
    public password: string
  ) {}

  comparePassword(pwd: string) {
    return pwd == this.password;
  }
}
