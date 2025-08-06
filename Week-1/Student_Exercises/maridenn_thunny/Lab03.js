// 10/10 Good

// Feedback: and i hope it's not AI

const items = [
    { choice: 1, name: "Apple", price: 10 },
    { choice: 2, name: "Banana", price: 20 },
    { choice: 3, name: "Orange", price: 30 }
];

const choices = [1,2,7,3]; //Mannually Changable, to [2,1,3,4,2] for Example
let total = 0;

let a = 0;

while (a < choices.length){
    switch (choices[a]){
        case 1:
            console.log(`You bought : ${items[0].name}`);
            total += 10;
            break;
        case 2:
            console.log(`You bought : ${items[1].name}`);
            total += 20;
            break;
        case 3:
            console.log(`You bought : ${items[2].name}`);
            total += 30;
            break;
        default:
            console.log("Invalid choice. Skipped.");
            break;
    }
    a++;
}

console.log(`Total: $${total}`)


/**
 * Calculate selected Choices from Fruits Store
 * 
 * Tips:
 * loop through the choices
 * assign current choices index to choice
 * check if choice is 1-3
 * accessing current item choice by item[choice - 1]
 * calculate the total prices of selected items
 * 
 * Expected Output:
 * You bought : Apple
 * You bought : Banana
 * Invalid choice. Skipped.
 * You bought : Orange
 * Total: $60
 */