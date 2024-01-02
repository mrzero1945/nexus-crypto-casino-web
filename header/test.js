var enumNilai = {
    '3': 1, '4': 2, '5': 3, '6': 4, '7': 5,
    '8': 6, '9': 7, '10': 8, 'J': 9, 'Q': 10,
    'K': 11, 'A': 12, '2': 13
};
var values = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];
var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
var codeFragments = suits.flatMap(function (suit) {
    return values.map(function (value) { return "'".concat(value).concat(suit, "':card").concat(suit).concat(value, ".src "); });
});
var completeCode = codeFragments.join(', ');
console.log("const imgArr = { ".concat(completeCode, " };"));
