function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(`${phrase} ${result}`);
  } else {
    return result;
  }
}

//important note: All types in TS (number, string etc) are ALWAYS lower case!

const number1 = 5; //same data type as e.g. 5.0
const number2 = 2.8;
const printResult = true;

const resultPhrase = "yay!";
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
