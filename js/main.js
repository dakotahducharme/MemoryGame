console.log("running!!");


var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
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
  if (cardsInPlay.length === 2) {
    var card1 = cards[cardsInPlay[0]]
    var card2 = cards[cardsInPlay[1]]
    if (card1.rank === card2.rank) {
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
      resetCard(cardsInPlay[0]);
      resetCard(cardsInPlay[1]);
    }
    cardsInPlay = [];
  }
}

function resetCard(cardId) {
  /*
  find dom element that has cardId
  set source back to one of the card backs
  */
  // id='card-2'
  // cardId == '2'
  var cardElement = document.getElementById('card-' + cardId);
  cardElement.setAttribute('src', 'images/back.png');

}

function resetBoard() {
  cardsInPlay = [];
  var board = document.getElementById('game-board');
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
  createBoard();
}

function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsInPlay.push(cardId)
  this.setAttribute('src', cards[cardId].cardImage)
  checkForMatch()
}


function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('id', 'card-' + i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }

}

createBoard();
document.getElementById("reset").addEventListener('click', resetBoard)
