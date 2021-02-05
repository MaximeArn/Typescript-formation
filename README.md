# Typescript-formation

### tsc (TypeScript Compiler)

    tsc ./myFileToCompile.ts -v --> check typescript compiler version

    tsc ./myFileToCompile -w --> run tsc and watch saves to recompile

### Strict types VS Dynamic types

##### type by inference :

```typescript
const firstname = "John";
/* typescript type "firstname" as a string because it is declared and 
defined at the same time */
```

```typescript
let lastname;
lastname = "Doe";
/* typescript type "firstname" as "Any" because it is declared without
any value */
```

##### type by assignation :

```typescript
let age: number;
age = 36;
/* We force typescript to consider age as a number and only a number*/
```

### Array Types

##### first way :

```typescript
const numberArray: number[] = [1, 2, 3, 4, 5];
/* the first way use the type of the elements followed by [] to 
denote an array of that element type*/
```

##### second way :

```typescript
const stringArray: Array<string> = ["a", "b", "c", "d", "e", "f"];
/* The second way uses a generic array type, Array<elemType>*/
```

##### Inference on array :

```typescript
const stringArray = ["a", "b", "c", "d", "e", "f"];
/* The inference works on arrays too
typescript will type this array as a string array*/
```

```typescript
const mixedArray = ["a", "b", "c", "d", "e", "f", 2, true];
/*  typescript will type this array as an array of either string 
or number or boolean
typescript type :
const stringArray: (string | number | boolean)[]
*/
```

### Tuples

##### Principle :

_"Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same"_

```typescript
let position: [number, number];
position = [40.7127281, -74.0060152];
/* the first way use the type of the elements followed by [] to 
denote an array of that element type*/
```

##### Restrictions :

```typescript
let position: [number, number];
position = [40.7127281, -74.0060152];
// ok

position = [40.7127281, -74.0060152, 35.5372936];
/* error
Type '[number, number, number]' is not assignable to type '[number, number]
'.Source has 3 element(s) but target allows only 2.*/

position = [40.7127281, -74.0060152, "error"];
/* error
Type '[number, number, string]' is not assignable to type '[number, number]'.
Source has 3 element(s) but target allows only 2.*/
```

_When accessing an element with a known index, the correct type is retrieved:_

```typescript
const mixedTuple: [string, number, boolean] = ["hello", 3, true];
console.log(typeof mixedTuple[2]); // return boolen
```

##### Add an item

```typescript
const mixedTuple: [string, number, boolean] = ["hello", 3, true];
mixedTuple[3] = 65; // return error
```

:warning: :warning: _The Array.push() methode does not respect the type_ :warning: :warning:

```typescript
let position: [number, number] = [40.7127281, -74.0060152];
position.push("a new point"); // do not return any error
```

### Enum

##### Principle :

_"an enum is a way of giving more friendly names to sets of numeric values."_

```typescript
enum Roles {
  visitor,
  user,
  moderator,
  admin,
}
console.log(Roles.admin); // return 3 (index of admin property)
```

values are automatically assigned beginning at 0 but we can override that. We can specify the first value to change the beginning value or change every values.

```typescript
enum Roles {
  visitor = 10,
  user,
  moderator,
  admin,
}
console.log(Roles.admin); // return 13
```

```typescript
enum Roles {
  visitor = 10,
  user,
  moderator,
  admin = 2,
}
console.log(Roles.admin); // return 2
```

moreover enum allow us to get the name of the value using its numeric value

```typescript
enum Roles {
  visitor,
  user,
  moderator,
  admin = 2,
}
console.log(Roles[2]); // return "Admin"
```

### Unknown type

##### principle

_The Unknown type is like the Any type but without the loopholes. Where with an "any" type we can assign the value to typed variables, we cannot with the "unknown" type_

```typescript
const inputValue: unknown = 32;
const age: number = inputValue;
//Type 'unknown' is not assignable to type 'number'.
```

_To assign the real type of the unknown variable we must do a type verification using the "typeof"_

```typescript
const inputValue: unknown = 32;
let age: number;

typeof inputValue === "number"
  ? (age = inputValue)
  : console.error("age have not a valid format");
```

### Typing functions

##### Inference

```typescript
const sum = (nbr1, nbr2) => nbr1 + nbr2;
//const sum: (nbr1: any, nbr2: any) => any
```

_there is two ways for typing functions:_

##### The "Function" type

_the function type is the less restrictive way to type a function.
It accept a the function without regarding the params types or the return type_

```typescript
let sum: Function;

sum = (nbr1: number, nbr2: number): number => nbr1 + nbr2;
sum = console.log;
sum = () => {
  console.log(1 + 1 === 2);
};
```

##### Well type a function

_We can describe in detail a function.
We must type the parameters and the return of the function
Typescript will not only verify taht it is a function, It will verify params and return types_

```typescript
let sum: (nbr1: number, nbr2: number) => number;

sum = (nbr1: number, nbr2: number): number => nbr1 + nbr2;
//right type no problem
sum = () => {
  console.log(1 + 1 === 2);
};
/* error : Type '() => void' is not assignable to type '(nbr1: number, nbr2: number) => number'.
Type 'void' is not assignable to type 'number'. */
```

:warning: "void" is used to type the return of a function that return nothing (undefined)

##### Optionnal parameters

```typescript
const sum = (nbr1: number, nbr2: number, nbr3?: number): number =>
  nbr3 ? nbr1 + nbr2 + nbr3 : nbr1 + nbr2;
// sum can be called with either 2 or 3 arguments

sum(1, 4);
// return 5
sum(3, 10, 24);
// return  37
```

##### Default-initialized parameters

_We can add a default value to a parameter. This value will be used if the parameter is not provided or undefined when the function is called_

```typescript
const getTTC = (price: number, tax: number = 0.2): number => price * (1 + tax);
//tax will be 0.2 if it is not overloaded
console.log(getTTC(150));
console.log(getTTC(150, 0.05));
// here we overload tax with new value "0.05"
```

### Type Aliases

_a type alias is an alias(new name) that refer to an existing type_

```typescript
type BoolNbrStr = string | number | boolean;
/* here we create an alias that correspond to the
union type of string, number and boolean */

let data: BoolNbrStr;
data = "hello";
data = 36;
data = true;
```

```typescript
type UserObj = {};
/* here we create an alias that correspond to the
union type of string, number and boolean */

let data: BoolNbrStr;
data = "hello";
data = 36;
data = true;
```

_alias can be used to describe complex data structure_

```typescript
type UserObj = {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  city: string;
  isOnAge: boolean;
};

const user1: UserObj = {
  firstname: "john",
  lastname: "doe",
  age: 25,
  email: "john.doe@gmail.com",
  city: "New-York",
  isOnAge: true,
};
```
