// 9.5/10

// Feedback: Extra score from english should be (english - 25) if english > 25 but good job for comparing
//           and why is your code like nita_se, who's the copier

let math = 110;
let khmer = 65;
let chemistry = 60;
let physics = 70;
let history = 45;
let biology = 40;
let english = 22;
let extraFromEnglish = 2;

let sum = math + khmer + chemistry + history + physics + biology + english + extraFromEnglish;

if (sum >= 427 && sum <= 475){
    console.log("A")
}else if (sum >= 380){
    console.log("B")
}else if (sum >= 332){
    console.log("C")
}else if (sum >= 286){
    console.log("D")
}else if (sum >= 237){
    console.log("E")
}else if (sum < 237){
    console.log("HAHA U FAIL")
}else{
    console.log("Error")
}