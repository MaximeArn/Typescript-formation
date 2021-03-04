function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
}

class Car {
  constructor(
    public brand: string,
    public color: "red" | "blue" | "black",
    private id: number
  ) {}

  @readonly
  setId(val: number) {
    this.id = val;
  }
  @readonly
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
