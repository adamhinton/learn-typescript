const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "cooking"],
  role: [2, "author"],
};

let favActivities: string[];
favActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log("hobby:", hobby);
}
