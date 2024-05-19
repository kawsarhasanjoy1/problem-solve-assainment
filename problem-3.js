// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5


const squireFunction = (number) => {
  return number * number;
};
const doubleFunction = (number) => {
  return number * 2;
};
const addFunction = (number) => {
  return number + 5;
};

const totalValue = (number) => {
  const squire = squireFunction(number);
  const double = doubleFunction(number);
  const add = addFunction(double);
  return add;
};

const total = totalValue(5)
console.log(total)