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
if(english>25){
    english -= 25;
}else {
    english = 0;
}
const result = math + khmer + chemistry + physics + history + biology + english;
console.log(`Final scores: ${result}`)
if(result >= 427){
    console.log("A")
}else if(result >= 380){
    console.log("B")
}else if(result >= 332){
    console.log("C")
}else if(result >= 286){
    console.log("D")
}else if(result >= 237){
    console.log("E")
}else{
    console.log("F")
}