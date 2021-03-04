function readonly(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  };
}

class Car {
  constructor(
    public brand: string,
    public color: "red" | "blue" | "black",
    private id: number
  ) {}

  @readonly(true)
  setId(val: number) {
    this.id = val;
  }
  @readonly(true)
  getId() {
    return this.id;
  }
}

const audi = new Car("Audi", "black", 35);
console.log(audi.getId()); // 35
audi.getId = function () {
  return 56;
};
/*
ERROR 
Uncaught TypeError: Cannot assign to read only property 
'getId' of object '#<Car>'
*/
