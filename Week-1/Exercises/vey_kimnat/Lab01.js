let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 27;
let extraFromEnglish = 0;

if (english>25){
    english= english-25
}
let sum= math + khmer + chemistry + physics + history + biology + english + extraFromEnglish ;

console.log("Final Score:", sum);
if(sum >= 427 && sum<= 475){
    console.log(" Grade: A ");
}else if(sum>= 380 && sum<=426){
    console.log(" Grade: B ");
}else if(sum>= 332 && sum<=379){
    console.log(" Grade: C ");
}else if(sum>= 286 && sum<=331){
    console.log(" Grade: D ");
}else if(sum>= 237 && sum<=285){
    console.log(" Grade: E ");
}else if(sum<237){
    console.log(" Grade: F ");
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
