"use strict";
//here we declare an ElevatedEmployee
const el = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
//my first type guard:
//I check here what type the arguments are and return something based on that
const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return String(a) + String(b);
    }
    return a + b;
};
const result = add(1, 5);
// type UnknownEmployee = Employee | Admin;
// //'privileges' in emp below is a nift way to access properties for type guards
// const printEmployeeInfo = (emp: UnknownEmployee) => {
//   console.log("emp.name:", emp.name);
//   if ("privileges" in emp) {
//     console.log("emp.privileges:", emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("emp.startDate:", emp.startDate);
//   }
// };
// printEmployeeInfo(el);
// //starting Discriminated Unions
// //we add a type key (or any other key) to each interface here,
// //then use a switch statement in moveAnimal function based on the interface's type
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// const moveAnimal = (animal: Animal) => {
//   // console.log("Moving with speed:" + animal.flyingSpeed);
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//     default:
//       null;
//   }
//   console.log(`Moving at speed: ${speed}`);
// };
// moveAnimal({ type: "bird", flyingSpeed: 50 });
// //TYPE CASTING:
// //type casting helps you tell TS that a value of a certain type when TS may not know
// //say you have a <p> with id message-paragraph and find that by id. TS doesn't know what kind of htmlElement that is. It could be null and that's an  That's where typecasting comes in.
// //here I'm making this an htmlinputelement and TS won't complain anymore
// const para = <HTMLInputElement>document.getElementById("paragraph-message");
// para.value = "Hi there!";
// //INDEX TYPES:
// //more flexible on properties they might hold
// //make these with square brackets like below
// interface ErrorContainer {
//   //{email: 'Not a valid email', username: 'Must start with a character'}
//   //here we don't know the exact property name, we just know every item must have a string property name and a string value
//   [prop: string]: string;
//   //here we declare another key value pair like normal
//   id: string;
// }
// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character!",
// };
