 var dice1 = Math.floor(Math.random() * 6) + 1;
 var dice2 = Math.floor(Math.random() * 6) + 1;
 document.querySelector("img").setAttribute("src", "images/dice" + dice1 + ".png");
 document.querySelector(".img").setAttribute("src", "images/dice" + dice2 + ".png");
 if(dice1 > dice2){
   document.querySelector("h1").innerHTML = "🚩Player1 wins!!"
 }
else if(dice2 >dice1){
  document.querySelector("h1").innerHTML = "Player2 wins!!🚩"
}
else{
  document.querySelector("h1").innerHTML = "DRAW!!"
}
