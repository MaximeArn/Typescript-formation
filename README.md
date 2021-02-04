# Typescript-formation

#### tsc (TypeScript Compiler)

    tsc -v --> check typescript compiler version

    tsc -w --> run tsc and watch saves to recompile

#### Strict types VS Dynamic types

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
