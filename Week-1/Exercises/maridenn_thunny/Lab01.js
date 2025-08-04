let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;

extraFromEnglish = english - 25;

let sum;
sum = math + khmer + chemistry + physics + history + biology + extraFromEnglish;

if(sum >= 427 && sum <= 475){
    console.log("A");
} else if (sum >= 380){
    console.log("B");
} else if (sum >= 332){
    console.log("C");
} else if (sum >= 286){
    console.log("D");
} else if (sum >= 237){
    console.log("E");
} else if(sum <= 237){
    console.log("F");
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