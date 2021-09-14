var i = 0;
var rollOne = 0;
var rollTwo = 0;
var one = 0;
var two = 0;
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var result = document.querySelector(".result");

document.querySelector(".playerOne").onclick = function(){
  rollOne = setInterval(playerOneImageSelector,125);
}

document.querySelector(".playerTwo").onclick = function(){
  rollTwo = setInterval(playerTwoImageSelector,125);
}

function imageGenerator() {
    var numberGenerator = Math.floor(Math.random()*6);
    let imageNames = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    return [imageNames[numberGenerator], numberGenerator];
}

function playerOneImageSelector(){

  one = imageGenerator();

  img1.setAttribute("src", one[0]);

  if(i===15){
    clearInterval(rollOne);
    i = 0;
  } else{
    i++;
  }
}

function playerTwoImageSelector(){

  two = imageGenerator();

  img2.setAttribute("src", two[0]);

  if(i==15){
    clearInterval(rollTwo);
    i = 0;

    if(one[1]>two[1]) {
      result.innerHTML = "Player 1 Wins!";
    } else if (one[1]<two[1]) {
      result.innerHTML = "Player 2 Wins!";
    } else {
      result.innerHTML = "Draw"
    }
  } else{
    i++;
  }
}
