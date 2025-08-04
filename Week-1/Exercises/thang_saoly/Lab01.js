let math = 125;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 46;
let extraFromEnglish = english - 25;

/**
 * Make a BacII Calculator
 * 
 * Tips :
 * Use +, -, = operators
 * Use >= with if-else statement
 * 
 * Expected Output:
 * Final Score: 392
 * Grade: B
 * 237 pass
 * 
 */

let finalScore = math + khmer + chemistry + physics + history + biology + extraFromEnglish;
console.log("Final Score: ", finalScore);
if (finalScore >= 427 && finalScore <= 475){
    console.log("Grade: A");
} else if (finalScore >= 380 && finalScore <= 426){
    console.log("Grade: B");
} else if (finalScore >= 332 && finalScore <= 379){
    console.log("Grade: C");
} else if (finalScore >= 286 && finalScore <= 331){
    console.log("Grade: D");
} else if (finalScore >= 237 && finalScore <= 285){
    console.log("Grade: E");
} else if (finalScore <237){
    console.log("Grade: F");
} else {
    console.log("Invalid Grade!");
}