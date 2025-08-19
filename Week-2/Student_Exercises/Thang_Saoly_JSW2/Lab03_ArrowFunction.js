// 10/10 Good job but sayHello, getTodayDate and square could be online without using return

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

const sayHello = () => {
    console.log("Hello CADT!")
}

const getTodayDate = () => {
    return new Date().toDateString();
}

const square = (number) => {
    return number * number
}
 
const tossCoin = () =>{
    let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    console.log('You tossed: ' + result);
}

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const sumUpTo = n => {
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