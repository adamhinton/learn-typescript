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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
