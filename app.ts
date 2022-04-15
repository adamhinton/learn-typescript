// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["sports"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["sports"],
  role: 0,
};

let favAct: string[];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

//tuple: fixed length, fixed type
//enum: automatically generated global constant identifiers
