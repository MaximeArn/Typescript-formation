interface CarInterface {
  readonly brand: string;
  readonly gear?: number;
}

class Car implements CarInterface {
  constructor(readonly brand: string, readonly gear: number) {}

  getGear() {
    return this.gear;
  }

  getBrand() {
    return this.brand;
  }
}

const opel = new Car("opel", 5);
console.log(opel.getBrand());
