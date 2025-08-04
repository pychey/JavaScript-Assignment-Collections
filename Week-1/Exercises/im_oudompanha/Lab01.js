let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;
let finalScore;
if (english >= 25) {
  extraFromEnglish = english - 25;
}
finalScore =
  math + khmer + chemistry + physics + history + biology + extraFromEnglish;
console.log("Final score: ", finalScore);

if (finalScore >= 427 && finalScore <= 475) {
  console.log("Grade: A");
} else if (finalScore >= 380 && finalScore <= 426) {
  console.log("Grade: B");
} else if (finalScore >= 332 && finalScore <= 379) {
  console.log("Grade: C");
} else if (finalScore >= 286 && finalScore <= 331) {
  console.log("Grade: D");
} else if (finalScore >= 237 && finalScore <= 285) {
  console.log("Grade: E");
} else {
  console.log("Grade: F");
}

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
