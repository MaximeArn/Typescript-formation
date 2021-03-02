interface UserType {
  age: number;
  name: string;
  email: string;
  password: string;
  comparePassword(pwd: string): boolean;
}

const sealClass = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log(constructor.prototype);
  constructor.prototype.newProp = "newValue";
  //Uncaught TypeError: Cannot add property newProp, object is not extensible
};

@sealClass
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
