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
console.log("names:", names);
console.log("blah blah blah");
