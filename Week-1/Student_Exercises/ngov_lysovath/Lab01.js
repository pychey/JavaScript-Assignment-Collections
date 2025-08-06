// 10/10 Creative

let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;
let student = {
    finalScore : 0,
    grade : 0
}

student.finalScore += math;
student.finalScore += khmer;
student.finalScore += chemistry;
student.finalScore += physics;
student.finalScore += history;
student.finalScore += biology;
if(english >= 25){
    extraFromEnglish += english - 25;
}
student.finalScore += extraFromEnglish;
if(student.finalScore >= 427 && student.finalScore <= 475){
    student.grade = "A";
} else if(student.finalScore >= 380){
    student.grade = "B";
} else if(student.finalScore >= 332){
    student.grade = "C";
} else if(student.finalScore >= 286){
    student.grade = "D";
} else if(student.finalScore >= 237){
    student.grade = "E";
} else {
    student.grade = "F";
}
console.log(student);



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