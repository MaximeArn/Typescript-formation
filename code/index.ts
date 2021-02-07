interface ComplexFunc {
  (param1: number, param2: number, param3: number, param4: number): string;
}
const complexFunc: ComplexFunc = (param1, param2, param3, param4) =>
  String(param1 + param2 + param3 + param4);

console.log(typeof complexFunc(1, 2, 3, 4)); // log string
