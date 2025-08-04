let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;
if(english>25){
extraFromEnglish=english - 25;
}
let total;
score= math + khmer + chemistry + physics + history + biology  + extraFromEnglish;
console.log('Final Score: '+ score);
let grade;
if(score<237){
    grade= 'F';
}else if(score>=237&&score<=285){
    grade= 'E';
}else if(score>=286&&score<=331){
    grade= 'D';
}else if (score>=332&&score<=379){
    grade= 'C';
}else if( score>=380&&score<=426){
    grade= 'B';
}else {
    grade= 'A';
}
console.log('Grade: ' + grade);
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