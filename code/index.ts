const getTTC = (price: number, tax: number = 0.2): number => price * (1 + tax);
console.log(getTTC(150));
console.log(getTTC(150, 0.05));
