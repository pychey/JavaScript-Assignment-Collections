// 10/10 Good

/**
 * Convert Normal Function to Arrow Function
 * 
 * Task:
 * 1. Convert the following functions to arrow functions.
 * 
 * Expected Output:
 * Hello CADT!
 * Mon Aug 11 2025
 * 9
 * GCD of 36 and 48 is 12
 * You tossed: Tails
 * Sequence of 5 is 15
 */

// function sayHello() {
//     console.log("Hello CADT!")
// }
let sayHello = () => {console.log("Hello CADT!")}

// function getTodayDate() {
//     return new Date().toDateString();
// }
let getTodayDate = () => { return new Date().toDateString();}

// function square(number) {
//     return number * number
// }
let square = (number) => { return number * number }

// function tossCoin() {
//     let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
//     console.log('You tossed: ' + result);
// }
let tossCoin = () => {
    let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    console.log('You tossed: ' + result);
}

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
let gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// function sumUpTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
let sumUpTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Calling function
sayHello()
console.log(getTodayDate())
console.log(square(3))
console.log("GCD of 36 and 48 is " + gcd(36, 48))
tossCoin()
console.log('Sequence of 5 is ' + sumUpTo(5));