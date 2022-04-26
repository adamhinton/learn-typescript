//arrays are a generic. They require a type argument of sorts.
//they're connected with another type

const names: Array<string> = [];

//now TS knows names[0] is a string
names[0].split(" ");

//The Promise type is another generic
