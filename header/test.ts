const enumNilai = {
    '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, 
    '8': 6, '9': 7, '10': 8, 'J': 9, 'Q': 10, 
    'K': 11, 'A': 12, '2': 13
};

const values = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

let codeFragments = suits.flatMap(suit => 
  values.map(value => `'${value}${suit}':card${suit}${value}.src `)
);

let completeCode = codeFragments.join(', ');

console.log(`const imgArr = { ${completeCode} };`);
