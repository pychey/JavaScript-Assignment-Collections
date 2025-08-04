const items = [
    { choice: 1, name: "Apple", price: 10 },
    { choice: 2, name: "Banana", price: 20 },
    { choice: 3, name: "Orange", price: 30 }
];

const choices = [1,2,7,3]; //Mannually Changable, to [2,1,3,4,2] for Example
let total = 0;

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

for(let i = 0 ; i < choices.length ; i++){
    for(let j =0 ; j < items.length ; j++){
    if(choices[i] == items[j].choice){
    total += items[j].price;
    console.log('you bought :'+ items[j].name)
    
    }

}     
    if ( choices[i] > items.length){
        console.log('Invalid choice. Skipped.');
    }
    
} 
console.log(total);

