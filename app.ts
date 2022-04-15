const person = {
  name: "Max",
  age: 30,
  hobbies: ["sports"],
  role: [number, string],
};

let favAct: string[];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

//tuple: fixed length, fixed type
