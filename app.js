function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log("".concat(phrase, " ").concat(result));
    }
    else {
        return result;
    }
}
//important note: All types in TS (number, string etc) are ALWAYS lower case!
var number1 = 5; //same data type as e.g. 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = "yay!";
var result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
