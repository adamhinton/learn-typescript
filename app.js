"use strict";
//GENERICS:
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//Say we have this array and want to make it readonly. You can't push to it.
const names = ["Max", "Anna"];
//now I can't push to names, the below would return an error
// names.push("Manu");
// names.pop();
// Diff bw generic and union types:
//A union type is a mix of the suggested types. Like:
// private data: (string[] | number[] | boolean[]) = [];
//This means it can be any mix of the three types above
// Generic types lock in a type, union types make your type flexible
