// 10/10 Pretty good job

const items = [
  { choice: 1, name: "Apple", price: 10 },
  { choice: 2, name: "Banana", price: 20 },
  { choice: 3, name: "Orange", price: 30 },
];

const choices = [1, 2, 7, 3]; //Mannually Changable, to [2,1,3,4,2] for Example
let total = 0;



for(let i=0; i<choices.length;i++){
    if(choices[i]<=3){
        if(choices[i]==1){
            console.log("You boutht: " + items[0].name); 
            total+=items[0].price; 
        }else if(choices[i]==2){
            console.log("You boutht: " + items[1].name);
            total+=items[1].price;
        }else if(choices[i]==3){
            console.log("You boutht: " + items[2].name);
            total+=items[2].price;
        }
    }else {
            console.log("Invalid choice ");
        }    
}
console.log("Total:$"+ total);

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
