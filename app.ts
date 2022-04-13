const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "cooking"],
};

let favActivities: string[];
favActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log("hobby:", hobby);
}
