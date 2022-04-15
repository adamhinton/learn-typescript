//learning return types
//TS knows that this should return a number
var add = function (n1, n2) {
    return n1 + n2;
};
//can explicitly assign a return type by writing :string (or whatever type) after the parameter list, like so:
// const add = (n1: number, n2: number): string => {
//   return String(n1 + n2);
// };
//now TS knows this should return a string. Would give an error if it were just return n1 + n2;
//But it's best to let TS just infer the type unless you need to do otherwise.
//void types:
var printRes = function (num) {
    console.log("Result: " + num);
};
printRes(add(5, 12));
