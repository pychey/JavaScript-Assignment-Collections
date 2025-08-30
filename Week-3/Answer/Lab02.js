/**
 * ES6 ASSIGNMENT LAB 2: E-commerce Cart Operations
 *
 * This assignment focuses on using array methods (`find`, `filter`, `map`, `forEach`)
 * to simulate an e-commerce shopping cart. The goal is to perform operations
 * like finding a product, calculating a total, and displaying the cart items.
 *
 * Concepts Covered:
 * - find()
 * - filter()
 * - map()
 * - forEach()
 */

console.log("\n--- LAB 2: E-commerce Cart Operations ---\n");

// Mock data representing products available in the store
const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 'p2', name: 'Coffee Mug', price: 15, category: 'Home Goods' },
    { id: 'p3', name: 'Keyboard', price: 85, category: 'Electronics' },
    { id: 'p4', name: 'Notebook', price: 5, category: 'Stationery' },
    { id: 'p5', name: 'Mouse', price: 40, category: 'Electronics' },
];

// Mock data representing items in a user's shopping cart
const cart = [
    { productId: 'p1', quantity: 1 },
    { productId: 'p5', quantity: 2 },
    { productId: 'p2', quantity: 3 },
    { productId: 'p6', quantity: 1 } // A non-existent product
];

/**
 * TASK 1: Find a Product
 *
 * Use the `find()` method to get the product object named 'Laptop'
 * from the `products` array. Print it to console.
 *
 * Expected Output:
 * Found product: { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics' }
 */
const laptopProduct = products.find(product => product.name === 'Laptop');
console.log('Found product:', laptopProduct);

/**
 * TASK 2: Filter Electronics
 *
 * Use the `filter()` method to create a new array containing only the products
 * that are in the 'Electronics' category. Print them to console.
 *
 * Expected Output:
 * Electronics products:
 * - Laptop
 * - Keyboard
 * - Mouse
 */
const electronicsProducts = products.filter(product => product.category === 'Electronics');
console.log('\nElectronics products:');
electronicsProducts.forEach(product => console.log('- ' + product.name));

/**
 * TASK 3: Calculate Total Cart Price
 *
 * Using `find()` and `forEach()`, calculate the total
 * price of all items in the `cart`. Ignore products that are not found in the
 * `products` list.
 *
 * Tips:
 * - Loop through the `cart` using `forEach()`.
 * - Inside the loop, use `find()` on the `products` array to get the product details.
 * - If the product is found, calculate the item total (price * quantity) and add it to the grand total.
 * - Use a variable to keep track of the total price.
 *
 * Expected Output:
 * Total Cart Price: $1325
 */
let totalCartPrice = 0;
cart.forEach(cartItem => {
    const foundProduct = products.find(product => product.id === cartItem.productId);
    if (foundProduct) {
        totalCartPrice += foundProduct.price * cartItem.quantity;
    }
});
console.log('\nTotal Cart Price: $' + totalCartPrice);

/**
 * TASK 4: Update a Product Price using Map()
 *
 * Use the `map()` method to create a new `updatedProducts` array. In this new
 * array, update the price of the 'Laptop' (productId: 'p1') to $900.
 * All other products should remain unchanged. Print the `updatedProducts` array
 * to the console.
 *
 * Tips:
 * - Inside the `map()` to check for the correct `productId`.
 * - If the product ID matches 'p1', use the spread operator (`...`) to return a new object with the updated price.
 * - Otherwise, return the original product object.
 *
 * Expected Output:
 * Updated Products: [
 * { id: 'p1', name: 'Laptop', price: 900, category: 'Electronics' }, // Price is updated
 * { id: 'p2', name: 'Coffee Mug', price: 15, category: 'Home Goods' },
 * { id: 'p3', name: 'Keyboard', price: 85, category: 'Electronics' },
 * { id: 'p4', name: 'Notebook', price: 5, category: 'Stationery' },
 * { id: 'p5', name: 'Mouse', price: 40, category: 'Electronics' },
 * ]
 */
const updatedProducts = products.map(product => {
    if (product.id === 'p1') {
        return { ...product, price: 900 };
    }
    return product;
});

console.log('\nUpdated Products:', updatedProducts);