// 10/10 Good job, kinda creative from you

let math = 110;
let khmer = 75;
let chemistry = 90;
let physics = 70;
let history = 45;
let biology = 35;
let english = 2;
let extraFromEnglish = 0;
if(english > 25){
    extraFromEnglish = english % 25;
}else{
    extraFromEnglish = 0;
}

let total = 0;
total = math + khmer + chemistry + physics + history + biology+ extraFromEnglish;
console.log("Final Score: "+ total);
let grade;
if(total>= 427){
    grade = "A";
    console.log("Grade: "+ grade);
}else if(total>= 380 && total<= 426){
    grade = "B";
    console.log("Grade: "+ grade);
}else if(total>= 332 && total <= 379){
    grade = "C";
    console.log("Grade: "+ grade);
}else if(total>= 286 && total <= 331){
    grade = "D";
    console.log("Grade: "+ grade);
}else if(total>= 237 && total <= 285){
    grade = "E";
    console.log("Grade: "+ grade);
}else{
    grade = "F";
    console.log("Grade: "+ grade);
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