var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "cooking"]
};
var favActivities;
favActivities = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("hobby:", hobby);
}
