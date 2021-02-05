const sum = (nbr1: number, nbr2: number, nbr3?: number): number =>
  nbr3 ? nbr1 + nbr2 + nbr3 : nbr1 + nbr2;

sum(1, 4);
sum(3, 10, 24);
