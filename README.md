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

### Literal types

_"There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have."_

```typescript
/* When using const the value will never change that is why typescript will
set the type to the value "Hello" and not to the type string */

const word = "Hello";
// type --> const word: "Hello"

/* When using a let or a var we are telling that the value of the variable can change. Typescript will set the type as the type of the initial value by inference */

let word2 = "Hi";
// type --> let word2: string
```

_"The process of going from an infinite number of potential cases (there are an infinite number of possible string values) to a smaller, finite number of potential case (in helloWorld’s case: 1) is called narrowing."_

_the literal types are often combined to union types_

```typescript
type literalStringOrNbr = "number" | "string";
type strOrNbr = string | number;

const sum = (
  nbr1: number,
  nbr2: number,
  returnType: literalStringOrNbr = "number"
  //literal type and default argument value
): strOrNbr => (returnType === "number" ? nbr1 + nbr2 : String(nbr1 + nbr2));

console.log(typeof sum(10, 20)); //number
console.log(typeof sum(10, 20, "string")); // string
```

### Type Assertions

_when the developer know more precisely the type of a data than typescript. Typescript let us a way to say to the compiler "trust me, I know what I’m doing"_

##### As Syntax

```typescript
const someValue: unknown = "this is a string";

const strLength: number = (someValue as string).length;
```

##### Angle-bracket syntax

```typescript
const someValue: unknown = "this is a string";

const strLength: number = (<string>someValue).length;
```

### Intersection Types

```typescript
interface Human {
  height: number;
  weight: number;
  age: number;
  sex: "female" | "male";
}

interface Animal {
  race: string;
  color: string;
}

type Werewolf = Animal & Human;

const werewolf: Werewolf = {
  height: 178,
  weight: 85,
  age: 150,
  sex: "male",
}; /*
  Type '{ height: number; weight: number; age: number; sex: "male"; }'
   is missing the following properties from type 'Animal': race, color
  */

const werewolf: Werewolf = {
  height: 178,
  weight: 85,
  age: 150,
  sex: "male",
  race: "wolf",
  color: "brown",
}; // OK
```

### Classes

##### creation

_we must type all the properties of the class and all the parameters of the constructor while remaining consistent to avoid type errors in constructor body_

```typescript
class User {
  username: string;
  age: number;
  XP: number;
  defense: number;
  attack: number;

  constructor(obj: User) {
    for (const field in obj) {
      this[field] = obj[field];
    }
  }
}

// An instance of the User class has the type User
const User1 = new User({
  username: "Franck",
  age: 35,
  XP: 234,
  defense: 154,
  attack: 54,
});
```

##### Inheritance

```typescript
type Elements = "fire" | "ice" | "water" | "stone";

class Wizard extends Player {
  mana: number;
  element: Elements;

  constructor({ mana, element, ...rest }: Wizard) {
    super({ ...rest });
    this.mana = mana;
    this.element = element;
  }
}

const wizard1 = new Wizard({
  username: "Franck",
  age: 35,
  XP: 234,
  defense: 154,
  attack: 54,
  mana: 256,
  element: "fire",
});
```

##### Public, Private, Getters, Setters

```typescript
class Player {
  constructor(
    public username: string,
    private age: number,
    public XP: number,
    public defense: number,
    private attack: number
  ) {}

  getAge() {
    return this.age;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(newAttack) {
    this.attack = newAttack;
  }
}

const user1 = new Player("Franck", 35, 234, 154, 54);

console.log(user1.getAge()); // 35
```

##### readonly

_readonly access modifier allow us to read the property but we can not modify its value_

```typescript
class Player {
  constructor(
    public username: string,
    private age: number,
    public XP: number,
    public defense: number,
    private attack: number,
    readonly DbId: string
  ) {}

  setDbId(newId) {
    this.DbId = newId;
  } /* TS error "Cannot assign to 'DbId' because it 
    is a read-only property."*/
}

const player1 = new Player("Franck", 35, 234, 154, 54, "602053dd84b6b39fdf08f8cd");

console.log(player1.DbId); // log "602053dd84b6b39fdf08f8cd"
```

### Interfaces

##### readonly in interfaces

```typescript
interface DogInterface {
  color: string;
  readonly age: number;
}

const dog: DogInterface = {
  color: "brown",
  age: 18,
};
dog.age = 35; /*TS error "Cannot assign to 'age' 
because it is a read-only property"*/
```

##### Describe Function

```typescript
interface ComplexFunc {
  (param1: number, param2: number, param3: number, param4: number): string;
}

const complexFunc: ComplexFunc = (param1, param2, param3, param4) =>
  String(param1 + param2 + param3 + param4);

console.log(typeof complexFunc(1, 2, 3, 4)); // log string
```

### Interfaces and Classes

##### Implement the interface

```typescript
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
console.log(opel.getBrand()); // log "opel"
```

##### classes methodes

```typescript
type Languages = "fr" | "en";

interface CarInterface {
  brand: string;
  gear?: number;
  age: number;
  sayAge(language: Languages): string;
}

class Car implements CarInterface {
  constructor(readonly brand: string, readonly gear: number, public age: number) {}

  sayAge(language: Languages) {
    return language === "fr" ? `j'ai ${this.age} ans ` : `I am ${this.age} years old`;
  }
}

const opel = new Car("opel", 5, 3);
console.log(opel.sayAge("en")); // I am 3 years old
```

##### Extending Interfaces

_like classes interfaces can extend from other interfaces_

```typescript
interface Rectangle {
  length: number;
  width: number;
}

interface Parallelepiped extends Rectangle {
  height: number;
}

const parallelepiped: Parallelepiped = {
  length: 5,
  width: 6,
  height: 3,
};

const parallelepiped2: Parallelepiped = {
  length: 5,
  height: 3,
};
/* Property 'width' is missing in type '{ length: number; height: number; }' 
but required in type 'Parallelepiped'*/

const parallelepiped3: Parallelepiped = {
  length: 5,
  width: 6,
  height: 3,
  color: "blue",
};
/* Object literal may only specify known properties, and 'color' does
 not exist in type 'Parallelepiped'. */
```

##### Multiple Extending

```typescript
interface Parallelepiped {
  length: number;
  width: number;
  height: number;
}

interface Texture {
  material: string;
  aspect: string;
}

interface Brick extends Parallelepiped, Texture {
  color: string;
  weight: number;
}

const brick1: Brick = {
  length: 5,
  width: 6,
  height: 3,
  weight: 1.6,
  aspect: "brillant",
};
/* TS error --> Type '{ length: number; width: number; 
height: number; weight: number; aspect: string; }' 
is missing the following properties 
from type 'Brick': color, material */
```

### static properties and methods

#### properties

```typescript
class Person {
  static readonly definition: string = "a human being regarded as an individual.";
  constructor() {}
}

new Person().definition; //ERROR
//Property 'definition' is a static member of type 'Person'

console.log(Person.definition);
// a human being regarded as an individual.
```

#### methods

```typescript
class Person {
  constructor() {}

  static sayHello() {
    console.log("Hello world !!");
  }
}

new Person().sayHello(); //ERROR
//Property 'sayHello' is a static member of type 'Person'

Person.sayHello();
// a human being regarded as an individual.
```

### abstract classes

an abstract class is a class that cannot be instantiated. She can be used to create other classes using inheritance that can be instantiated.

```typescript
abstract class Person {
  constructor() {}

  static sayHello() {
    console.log("Hello world !!");
  }
}
new Person(); //ERROR
//Cannot create an instance of an abstract class
```

we can create abstract methods in abstract classes. We must only provide the signature of the method. methods with the "abstract" keyword must obligatorily be implemented in classes extending the abstract class.

```typescript
abstract class Person {
  constructor() {}

  abstract saySomething(something: string): void;
}

class Women extends Person {
  saySomething(something: string) {
    console.log(something);
  }
}

new Women().saySomething();
// Expected 1 arguments, but got 0

new Women().saySomething("hello I am a woman");
// log "hello I am a woman"
```

### Generics

generics are usefull when we don't know the type of a data. Instead of using any type and loose the information of the data's type, generics will automatically detect the type.

```typescript
const saySomething: any = (sth: any): any => sth;
let notTyped = saySomething("hello");
// let notTyped: any
```

```typescript
const saySomething = <T>(sth: T): T => sth;
let typedData = saySomething(true);
// let typedData: boolean
```

### genrics in interfaces

```typescript
interface User<T> {
  age: number;
  name: string;
  hobbies: T; //dynamic type
}

const User1: User<string> = {
  //pass string value to T
  age: 25,
  name: "John",
  hobbies: "I love sport and cinema",
};

const User2: User<string[]> = {
  //pass string[] value to T
  age: 25,
  name: "John",
  hobbies: ["sport", "cinema"],
};
```

### generics and classes

```typescript
class Database<T> {
  private datas: T[] = [];

  saveData(data: T): void {
    this.datas.push(data);
  }

  getAll(): T[] {
    return [...this.datas];
  }
}

const stringDb = new Database<string>();
// set the typeof T at the instantiation

stringDb.saveData("hello");
stringDb.saveData("goodbye");

const datas = stringDb.getAll(); // const datas: string[]
console.log(datas); // ["hello", "goodbye"]
```

### Utility types

#### Partial

the partial will return the same type that we have passed but with all properties optionnals

```typescript
interface Task {
  title: string;
  description: string;
  color: string;
}

const createTask = (title: string, description: string, color: string): Task => {
  let newTask: Task = {}; //ERROR
  /* Type '{}' is missing the following properties from type 'Task':
  title, description, color */

  newTask.title = title;
  newTask.description = description;
  newTask.color = color;

  return newTask;
};
```

with the partial

```typescript
interface Task {
  title: string;
  description: string;
  color: string;
}

const createTask = (title: string, description: string, color: string): Task => {
  let newTask: Partial<Task> = {};

  newTask.title = title;
  newTask.description = description;
  newTask.color = color;

  return newTask as Task;
};
```

#### Readonly

The Readonly utility create a nex type were all properties are readonly

```typescript
interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
}

const sensibleUser: Readonly<User> = {
  name: "john",
  age: 25,
  sex: "male",
  role: "user",
};

sensibleUser.role = "admin"; //ERROR
//Cannot assign to 'role' because it is a read-only
```

#### Required

required utility create a new type with all properties passed to required

```typescript
interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
  description?: string;
  adress?: string;
}

const user1: Required<User> = {
  name: "john",
  age: 25,
  sex: "male",
  role: "user",
}; //ERROR
/*
Type '{ name: string; age: number; sex: "male"; role: "user"; }' 
is missing the following properties from type 'Required<User>': 
description, adress 
*/
```

#### Pick utility

```typescript
Pick<Type, "field1" | "field2">
```

Pick create a new type using based on an existing one. We specify the properties we want in the new type.

```typescript
interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
  description: string;
  adress: string;
}

type UserAtCreation = Pick<User, "name" | "age" | "role">;

const user1: UserAtCreation = {
  name: "John",
  age: 25,
  role: "user",
};
```

#### Omit utility

the Omit utility as the Pick utility create a new type based on an existing one but the keys specified are not those we want to keep but those we want to remove from the original type.

```typescript
interface User {
  name: string;
  age: number;
  sex: "male" | "female";
  role: "user" | "admin";
  description: string;
  adress: string;
}

type FacultativeFields = Omit<User, "name" | "age" | "role">;

const user1: FacultativeFields = {
  sex: "female",
  description: "my description",
  adress: "my adress",
};
```

#### Exclude

Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

```typescript
type role = "wizard" | "archer" | "knight" | "elf" | "orc";

type humanRole = Exclude<role, "elf" | "orc">;
// type humanRole = "wizard" | "archer" | "knight"
```

#### Extract

Constructs a type by extracting from Type all union members that are assignable to Union.

```typescript
type role = "wizard" | "archer" | "knight" | "elf" | "orc";

type nonHuman = Extract<role, "wizard" | "archer" | "knight">;
// type nonHuman = "wizard" | "archer" | "knight"
```

#### NonNullable

return a new type without the null and undefined types

```typescript
type ageType = string | number | null | undefined;

type StrictAgeType = NonNullable<ageType>;
// type StrictUser = string | number
```

#### Parameters

the Parameters utility create a new type that is a tuple that contains as many key/value pairs as the function expect parameters

```typescript
const saySomething = (something: string): void => {
  console.log(something);
};

// using the typeof the function
type saySomethingParams = Parameters<typeof saySomething>;
// type saySomethingParams = [something: string]

//passing a function signature
type saySomethingParams2 = Parameters<(something: string) => void>;
//type saySomethingParams2 = [something: string]
```
