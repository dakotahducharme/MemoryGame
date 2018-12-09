console.log("running!!");


var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "image/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  }
  else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)
  cardsInPlay.push(cards[cardId].rank)
  checkForMatch()
}

flipCard(3)
flipCard(2)

function createBoard() {
  for (var i=0; i < arrayName.length; i++) {

  }

}
