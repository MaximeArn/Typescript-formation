var getTTC = function (price, tax) {
    if (tax === void 0) { tax = 0.2; }
    return price * (1 + tax);
};
console.log(getTTC(150));
console.log(getTTC(150, 0.05));
