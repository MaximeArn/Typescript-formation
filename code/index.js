var sum = function (nbr1, nbr2, returnType) {
    if (returnType === void 0) { returnType = "number"; }
    return returnType === "number" ? nbr1 + nbr2 : String(nbr1 + nbr2);
};
console.log(typeof sum(10, 20));
console.log(typeof sum(10, 20, "string"));
