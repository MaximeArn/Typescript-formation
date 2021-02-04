# Typescript-formation

### tsc (TypeScript Compiler)

    tsc ./myFileToCompile.ts -v --> check typescript compiler version

    tsc ./myFileToCompile -w --> run tsc and watch saves to recompile

### Strict types VS Dynamic types

**type by inference :**

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

**type by assignation :**

```typescript
let age: number;
age = 36;
/* We force typescript to consider age as a number and only a number*/
```

### Array Types

**first way:**

```typescript
const numberArray: number[] = [1, 2, 3, 4, 5];
/* the first way use the type of the elements followed by [] to 
denote an array of that element type*/
```

**second way:**

```typescript
const stringArray: Array<string> = ["a", "b", "c", "d", "e", "f"];
/* The second way uses a generic array type, Array<elemType>*/
```

**Inference on array:**

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
