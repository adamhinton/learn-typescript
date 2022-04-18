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
const printEmployeeInfo = (emp) => {
    console.log("emp.name:", emp.name);
};
