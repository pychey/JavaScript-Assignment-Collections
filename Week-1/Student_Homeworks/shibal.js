// 10/10 Good job

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let deck = [{value:' ' , suit:' ' }];

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
function buildDeck(){
    for (let i =0; i<values.length; i++){
        for (let j=0; j<suits.length; j++){
            deck[deck.length] = {value: values[i], suit: suits[j]}
            console.log("" + values[i] + "_" + suits[j])
        }
    }
}
buildDeck()