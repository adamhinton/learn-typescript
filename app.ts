let userInput: unknown;
//can store any value in this without getting errors
userInput = 5;
userInput = "Max";

//unknown is different from any.
//The below would return an error because type 'unknown' is not assignable to type 'string'
let userName: string;
userName = userInput;
