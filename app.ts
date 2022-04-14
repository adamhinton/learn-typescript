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
  "ADMIN",
  "USER",
  "READONLY",
}

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
