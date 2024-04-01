"use strict";
/* Write a function to remove the last element from an array and return the removed element.*/
function lastElementRemoveFunc(arr) {
    return arr.pop();
}
let fruit = ["Apple", "Banana", "Mango"];
console.log(lastElementRemoveFunc(fruit));
console.log(fruit);
