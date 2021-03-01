interface UserType {
  age: number;
  name: string;
  email: string;
  password: string;
  comparePassword(pwd: string): boolean;
}

const constructorDecorator = (constructor: Function) => {
  console.log(constructor);
};

@constructorDecorator
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
