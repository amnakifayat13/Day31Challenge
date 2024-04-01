/* Find the index of "Banana" in an array of fruits and replace it with "Mango"*/

function replaceBananaWithMango(fruits1: string[]): void {
    const i = fruits1.indexOf("Banana"); 
    if (i !== -1) fruits1[i] = "Mango"; 
}


const fruits1: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits1);
console.log(fruits1); 



// another example:
function replaceVehicle(vehicle: string[]): void {
    const i =vehicle.indexOf("Scooty");
    if(i !== -1) vehicle[i] = "Car";

}
const vehicle :string[] = ["Scooty", "Bike", "Van"];
replaceVehicle(vehicle);
console.log(vehicle);
