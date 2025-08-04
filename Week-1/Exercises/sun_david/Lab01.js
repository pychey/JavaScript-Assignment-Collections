let math = 50;
let khmer = 65;
let chemistry = 50;
let physics = 30;
let history = 45;
let biology = 40;
let english = 22;
let extraFromEnglish = 0;

/**
 * Make a BacII Calculator
 * 
 * Tips :
 * Use +, -, = operators
 * Use >= with if-else statement
 * 
 * Expected Output:
 * Final Score: 390
 * Grade: B
 */
let calc = math + khmer + chemistry + physics + history + biology + english + extraFromEnglish;
let grade;
if (calc >= 427 && calc < 435) {
    grade = 'A'
} else if (calc >= 380 && calc < 426) {
    grade = 'B'
} else if (calc >= 332 && calc < 379) {
    grade = 'C'
} else if (calc >= 286 && calc < 331) {
    grade = 'D'
} else if (calc >= 237 && calc < 285) {
    grade = 'E'
} else {
    grade = 'F'
}
console.log('Final Score: ' + calc + "\n" + "Grade: " + grade);