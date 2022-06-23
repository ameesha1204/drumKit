var numberOfDrumsButton = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumsButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
animation(buttonInnerHTML);

});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
  });


//for button click
// var numberOfDrums=document.querySelectorAll(".drum").length;
// for(var i=0;i<numberOfDrums;i++)
// {
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//      makeSound(this.innerHTML);
//      buttonAnimation(this.innerHTML);
// });
// }
//
//
// //for key press
// document.addEventListener("keydown", function(event){
//     makeSound(event.key);
//   animation(event.key);
//   });


function makeSound(key){
  switch(key){
  case 'w':
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;


    case 'a':
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case 's':
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case 'd':
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case 'j':
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case 'k':
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case 'l':
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  default:
  console.log(this.innerHTML);
}
}

function animation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");


setTimeout(function(){
  activeButton.classList.remove("pressed");}, 101);

}

// function playSound(){

// }
