function add(n1, n2, showResult) {
    console.log(typeof number1);
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
//important note: All types in TS (number, string etc) are ALWAYS lower case!
var number1 = 5; //same data type as e.g. 5.0
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
// console.log(result);
