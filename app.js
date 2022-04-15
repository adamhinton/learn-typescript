var add = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = String(input1) + String(input2);
    }
    return result;
};
console.log(add("Max", "Anna"));
console.log(add(434, 543));
