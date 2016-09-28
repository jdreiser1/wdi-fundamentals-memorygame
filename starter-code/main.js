var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

if (cardOne === cardTwo){
  alert('You found a match!');
}else{ alert('Sorry, try again.')}

var gameboard = document.getElementById('game-board');
console.log(gameboard);
var createCards = function(){
for (var i = 0; i <= 3; i++){
  var card = document.createElement("div");
  card.className = "card";
  gameboard.appendChild(card);
};
}
createCards();
