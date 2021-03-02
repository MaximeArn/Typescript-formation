const first = () => {
  console.log("first evaluation");
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("first return func called");
  };
};

const second = () => {
  console.log("second evaluation");
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("second return func return");
  };
};

class User {
  constructor(
    public age: number,
    public name: string,
    public email: string,
    public password: string
  ) {}

  @first()
  @second()
  comparePassword(pwd: string) {
    return pwd == this.password;
  }
}
