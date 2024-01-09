// let temp = 21

// if(temp<20){
//      console.log("Its a really cold")
// } 
// else {
//     console.log("Its a really hot")
// }

let score = 101 
let life = 3
let bullets = 2000

console.log("Welcome to the game") ;

if(score>99){
    console.log("We get a life")
    score-= 100
    life += 1 
      bullets = 1000
     console.log (`My bullets is ${bullets}`)
} else {
    console.log("you Dont get a life");
} 
console.log(`Your score is ${score} and my life is ${life} and my bullets is ${bullets}`);