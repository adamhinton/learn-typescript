//GENERICS:

//arrays are a generic. They require a type argument of sorts.
//they're connected with another type

// const names: Array<string> = [];

// //now TS knows names[0] is a string
// names[0].split(" ");

// //The Promise type is another generic
// //This promise eventually returns a string
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("this is done!");
//     }), 2000)
// });

//Now to build our own generic types
//This fxn returns intersection of T and U
//This tells TS that T and U are different items so can be merged.
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "Max" }, { age: 30 });
// console.log(mergedObj.age);

//CONSTRAINTS:
//Here we will do much the same as above, defining a generic merge() function that merges two objects
//we take it a step further by adding constraints, telling TS that both parameters are objects
//below we use the keyword extends to do this
//Can use whatever constraint we want, even custom types or any.
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "Max" }, { age: 30 });
// console.log(mergedObj.age);

// interface Lengthy {
//   length: number;
// }

// //more on generics:
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value.";

//   if (element.length > 0) {
//     descriptionText = "Got" + element.length + "elements.";
//   }

//   return [element, descriptionText];
// }

// console.log(countAndDescribe("Hi there!"));
// console.log("blah blah blah");

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value.";

//   if (element.length > 0) {
//     descriptionText = "Got" + element.length + "elements.";
//   } else if (element.length === 1) {
//     descriptionText = "Got" + element.length + " elements.";
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe("Hi there.fdsafdsa"));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }

// generic utility types only exist in TS world
interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}

function createCourseGoal() {}
