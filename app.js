//GENERICS:
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got" + element.length + "elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there."));
