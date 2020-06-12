let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let openDoor1;
let openDoor2; 
let openDoor3; 
let numberCloseDoor = 3;
let closeDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const isBot(door){
   if(door.src === botDoorPath){
     return true;
   }
   else{
     return false;
   }
 };

const isClicked = (door)=>{
  if(door.src === closeDoorPath){
    return false;
  }
  else{
    return true;
  }
};
const playDoor = (door)=>{
  numberCloseDoor--;
  if(numberCloseDoor === 0){
    gameOver('win');
  }
  // else if(isBot(door)){
  //   gameOver('lost');
  // }
}
function randomChoreDoorGenerator(){
 let choreDoor = Math.floor(Math.random()*numberCloseDoor);
if(choreDoor === 0){
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
}
else if(choreDoor === 1){
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
}
else{(chorseDoor ===2)
  opentDoor3 = botDoorPath;
  openDoor1 =beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}
door1.onclick = function(){
  if(!isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  playDoor(door1);
  }
}
door2.onclick = () =>{
  if(!isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(door2)
}
door3.onclick = () =>{
 if(!isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(door3); 
  }
}
const gameOver = (status) =>{
  if(status ==='win'){
  startButton.innerHTML = 'You win.Play again!';
  }
//   else{(status === 'lost')
//     startButton.innerHTML = 'You lost! paly again';
//   }
// }
randomChoreDoorGenerator();

