"use strict";
//GENERICS:
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got" + element.length + "elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there.fdsafdsa"));
