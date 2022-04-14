// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 5,
  USER = 6,
  READONLY = 7,
}

//TS will basically never yell at you when you use the any type.
//I can store whatever I want here.
//But it can be bad, avoid this.
let myNewVar: any[];

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "cooking"],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log("hobby:", hobby);
}
