// 10/10 Good job

let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;
if(english>25){
extraFromEnglish = english - 25;}
let total = 0;
total =math +khmer +chemistry +physics +history +biology +extraFromEnglish;
let grade;
if(total>=427){
    grade='A';
}
else if(total>=380 && total<=426){
    grade='B';
}
else if( total>=332 && total<=379){
    grade='C';
}
else if (total>=286 && total<=331){
    grade='D';
}
else if( total >=237 && total <=285){
    grade ='E';
}
else{
    grade='F';
}
console.log('final Score : ' + total);
console.log(grade);
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
