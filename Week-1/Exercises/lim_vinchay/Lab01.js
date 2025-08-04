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
let result = 0;
if (english >= 25){
    extraFromEnglish -= 25;
}
result = math + khmer + chemistry + physics + history + biology + english + extraFromEnglish;
console.log("Final Score: " + result);
if (result >= 427) {
    console.log("Grade: A");
}else if (result >= 380){
    console.log("Grade: B")
}else if (result >=332){
    console.log("Grade: C");
}else if(result >= 286){
    console.log("Grade: D")
}else if(result >= 237){
    console.log("Grade: E")

}else if(result < 237){
    console.log("grade: F")
}