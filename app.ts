let userInput: unknown;
//can store any value in this without getting errors
userInput = 5;
userInput = "Max";

//uUNKNOWN IS DIFFERENT FROM ANY
//The below would return an error because type 'unknown' is not assignable to type 'string'
//if userInput were 'any' type this would work.
// let userName: string;
// userName = userInput;

//unknown is the better choice over 'any' if you don't know what you'll store in the variable, but you know what you'll want to do eventually with it.
//you might have to do type checking to assign something to an unknown variable.
//frex:
if (typeof userInput === "string") {
  userName = userInput;
}
//this works because now TS realizes that userInput is a string
