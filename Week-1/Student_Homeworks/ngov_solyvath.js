const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let deck = [{value: 'joker', suit: 'clubs'}];
for(let i = 0 ; i < suits.length ; i++){
    for(let j = 0 ; j < values.length ; j++){
        deck[i*13 + j + 1] = {value: values[j] , suits: suits[i]};
    }
}
for(let i = 0 ; i < 53 ; i++){
    console.log(deck[i]);
}

/**
 * Build A Card Deck
 * 
 * Tips : 
 * array.length returns length of array
 * to add deck element, use deck[deck.length]
 * 
 * Expected Output:
 * 2_clubs
 * 3_clubs
 * Until A_clubs
 * 2_diamonds
 * 3_diamonds
 * Until A_diamonds
 * Same with hearts and spades
 */
