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
//'privileges' in emp below is a nift way to access properties for type guards
const printEmployeeInfo = (emp) => {
  // console.log("emp.name:", emp.name);
  if ("privileges" in emp) {
    // console.log("emp.privileges:", emp.privileges);
  }
  if ("startDate" in emp) {
    // console.log("emp.startDate:", emp.startDate);
  }
};
printEmployeeInfo(el);
const moveAnimal = (animal) => {
  // console.log("Moving with speed:" + animal.flyingSpeed);
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      null;
  }
  console.log(`Moving at speed: ${speed}`);
};

moveAnimal({ type: "bird", flyingSpeed: 50 });

//type casting helps you tell TS that a value of a certain type when TS may not know
