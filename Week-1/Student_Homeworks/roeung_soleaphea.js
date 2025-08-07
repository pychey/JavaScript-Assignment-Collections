const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let deck = [{value: 'joker', suit: 'clubs'}];

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

// Add deck's elements
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        deck[deck.length] = {value: values[j], suit: suits[i]};
    }
}

// Print output
for (let p = 0; p < deck.length; p++) {
    console.log(deck[p].value + "_" + deck[p].suit);
}