const products = [
  { name: "T-Shirt", price: 15, inStock: true },
  { name: "Shoes", price: 45, inStock: false },
  { name: "Hat", price: 10, inStock: true }
];

/**
 * Display Only Available Products
 * 
 * Tips: 
 * array.length return length of an array
 * 
 * Expected Output:
 * T-Shirt is available for $15
 * Hat is available for $10
 */
for(let i = 0; i < products.length ; i++){
    if( products[i].inStock === true){
        console.log(products[i].name + ' ' + 'is available for' +' ' + '$'+ products[i].price);

    }
}