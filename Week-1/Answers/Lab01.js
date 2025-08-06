let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;

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
 */

if (english >= 25) extraFromEnglish = english - 25;

let finalScore = math + khmer + chemistry + physics + history + biology + extraFromEnglish;
let grade = "";

if (finalScore >= 427) grade = "A";
else if (finalScore >= 380) grade = "B";
else if (finalScore >= 332) grade = "C";
else if (finalScore >= 286) grade = "D";
else if (finalScore >= 237) grade = "E";
else grade = "F"

console.log("Final Score:", finalScore);
console.log("Grade:", grade);