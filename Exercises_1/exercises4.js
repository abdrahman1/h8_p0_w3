var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
    console.log(currentCard);
    var randomNumber = Math.floor(Math.random() * 4);
    currentCard = cards[randomNumber];
}
console.log('Last Card: '+currentCard+ ', Found a Spade!');






// var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

// var currentCard = 'Heart';

// while (currentCard !== 'Spade') {
//   console.log(currentCard);

//   var randomNumber = Math.floor(Math.random() * 4);

//   currentCard = cards[randomNumber];
// }

// console.log('Found a Spade!');