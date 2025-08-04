let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish;

if (english > 25)
{
    extraFromEnglish = english - 25 
}
let TotalScore = math + khmer + chemistry + physics + history + biology + english + extraFromEnglish;

console.log ("Final Score:", TotalScore);
if (TotalScore >= 427) {
    console.log("Grade: A");
}else if (TotalScore >= 380) {
    console.log("Grade: B");
}else if (TotalScore >= 332) {
    console.log("Grade: C");
}else if (TotalScore >= 286) {
    console.log("Grade: D");
}else if (TotalScore >= 237) {
    console.log("Grade: E");
}else if (TotalScore < 237) {
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