/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.*/
let alien="green"
if (alien=="green"){console.log("you earned 5 points")
}
//• If the alien is yellow, print a message that the player earned 10 points.
let alien_="yellow"
if (alien_=="yellow"){
    console.log("you earned 10 points")
}
//• If the alien is red, print a message that the player earned 15 points.
let alien_1="red"
if (alien_1=="red"){
    console.log("you earned 15 points")
}
/*• Write three versions of this program, making sure each message is printed for the
appropriate color alien.*/

//method#1

const alienclr="green"
const alienspoints ={
    green :5,
    yellow :10,
    red:15
}
const alie=alienspoints[alienclr]
if(alie!==undefined){
    console.log(`${alienclr} earned 5 points `)
}
//method#2
let func="yellow"
if (func=="yellow"){
    console.log("player earned 10 points")
}else if(func="red"){
    console.log("player earned 15 points")
}
else if(func="green"){
    console.log("player earned 5 points")
}
//method#3

const aliencolr:string="red"
switch(aliencolr){
    case "green":
      console.log("player earned 5 points")
      break;
    case "yellow":
        console.log("player earned 10 points")
      break;
    case "red":
        console.log("player earned 15 points")
  }
  