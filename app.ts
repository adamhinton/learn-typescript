function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

//important note: All types in TS (number, string etc) are ALWAYS lower case!

const number1 = 5; //same data type as e.g. 5.0
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2, printResult);
// console.log(result);
