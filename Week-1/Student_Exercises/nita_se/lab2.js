// 10/10 Good job

// Feedback: but why is this lab2 and not lab3 also prompt only works in browser but the logic is good

const items = [
    { choice: 1, name: "Apple", price: 10 },
    { choice: 2, name: "Banana", price: 20 },
    { choice: 3, name: "Orange", price: 30 }
];

const choices = [1,2,7,3]; //Mannually Changable, to [2,1,3,4,2] for Example
let total = 0;
let choose;
do {
    choose = prompt ("Enter a choice 1-3 (4 exit):");
    if (choose >= 1 && choose <= 3) {
        console.log(`You bought ${items[choose -1].name}`);
        total += items[choose-1].price;
    } else if (choose == 4) {
        console.log("exit");
        break;
    }else{
        console.log("Invalid choice. Skipped.");
    }
} while (choose !=4);
console.log(`Total: $${total}`);

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