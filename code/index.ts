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
