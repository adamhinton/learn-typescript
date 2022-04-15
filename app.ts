//learning return types
//TS knows that this should return a number

const add = (n1: number, n2: number) => {
  return n1 + n2;
};

//can explicitly assign a return type by writing :string (or whatever type) after the parameter list, like so:
// const add = (n1: number, n2: number): string => {
//   return String(n1 + n2);
// };
//now TS knows this should return a string. Would give an error if it were just return n1 + n2;
//But it's best to let TS just infer the type unless you need to do otherwise.

//void types:
//This return type is a void, it doesn't have a return statement.
//should make return type void if a fxn returns undefined, like so:
const printRes = (num: number): void => {
  console.log("Result: " + num);
};

//this prints to the console. But if we console.logged this same statement it would return undefined because printRes doesn't return anything.
printRes(add(5, 12));
