//learning return types
//TS knows that this should return a number

// const add = (n1: number, n2: number) =>{
//     return n1 + n2;
// }

//can explicitly assign a return type by writing :string (or whatever type) after the parameter list, like so:
// const add = (n1: number, n2: number): string => {
//   return String(n1 + n2);
// };
//now TS knows this should return a string. Would give an error if it were just return n1 + n2;
