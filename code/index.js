var sum = function (nbr1, nbr2, nbr3) {
    return nbr3 ? nbr1 + nbr2 + nbr3 : nbr1 + nbr2;
};
// sum can be called with either 2 or 3 arguments
sum(1, 4);
// return 5
sum(3, 10, 24);
// return  37
