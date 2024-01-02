import { Card } from "./poker-game";
class Player {
    public hand: Card[];

    constructor(){
        this.hand = [];
    }
    sortHand() {
        const valueOrder = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];
        const suitOrder = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    
        this.hand.sort((a, b) => {
            let valueComparison = valueOrder.indexOf(a.value) - valueOrder.indexOf(b.value);
            if (valueComparison !== 0) {
                return valueComparison;
            }
            // Urutkan berdasarkan suit jika nilai sama
            return suitOrder.indexOf(a.suit) - suitOrder.indexOf(b.suit);
        });
    }
    
}

class Enemy {
    public hand:Card[];

    constructor(){
        this.isEnemyTurn = false
        this.hand = [];
    }

    isEnemyTurn: boolean

    // proto
    turn(){
        for(const card of this.hand){
            if(card.value === '3' && card.suit === 'Spades'){
                this.isEnemyTurn === true
            }
        }
    }

}

export {Player, Enemy};