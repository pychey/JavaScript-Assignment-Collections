const items = [
  { choice: 1, name: "Apple", price: 10 },
  { choice: 2, name: "Banana", price: 20 },
  { choice: 3, name: "Orange", price: 30 },
];

const choices = [1, 2, 7, 3]; //Mannually Changable, to [2,1,3,4,2] for Example
let total = 0;

for (let j = 0; j < choices.length; j++) {
  for (let i = 0; i < items.length; i++) {
    if (choices[j] == items[i].choice) {
      console.log("You bought: " + items[i].name);
      total += items[i].price;
    }
  }
  if (choices[j] > items.length) {
    console.log("Invalid choice. Skipped.");
  }
}

console.log("Total: $" + total)
