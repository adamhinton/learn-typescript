const add = (
  input1: number | string,
  input2: number | string,
  resultConversion: string
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = String(input1) + String(input2);
  }
  return result;
};

console.log(add("Max", "Anna", "as-text"));
console.log(add(434, 543, "as-number"));
console.log(add("456456", "832742", "as-number"));
