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
