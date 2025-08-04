let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;
let finalScores = 0;

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

if (english > 25) {
    extraFromEnglish = english - 25;
}else {
    extraFromEnglish = 0;
}

let scores = [ math, khmer, chemistry, physics, history, biology, extraFromEnglish ]
for (let i = 0; i < scores.length; i++) {
    finalScores += scores[i]; // Find the final scores
}

console.log("Final Score :" , finalScores);

// Find grade
if (finalScores >= 427) {
    console.log("Grade : A");
}else if (finalScores >= 380) {
    console.log("Grade : B");
}else if (finalScores >= 332) {
    console.log("Grade : C");
}else if (finalScores >= 286) {
    console.log("Grade : D");
}else if (finalScores >= 237) {
    console.log("Grade : E");
}else{
    console.log("Grade : F");
}


