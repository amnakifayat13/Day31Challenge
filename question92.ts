/* Write a function to remove the last element from an array and return the removed element.*/


function lastElementRemoveFunc <T> (arr: T[]): T |undefined {
    return arr.pop();
}
let fruit: string[] = ["Apple", "Banana", "Mango"];
console.log(lastElementRemoveFunc(fruit));
console.log(fruit);

