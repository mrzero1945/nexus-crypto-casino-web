import { Player, Enemy } from "./poker-interface";
class Card {
    suit: string;
    value: string;

    constructor(suit: string, value: string) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    private suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
    private values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    public cards: Card[];

    constructor() {
        this.cards = [];
        this.initializeDeck();
    }

    private initializeDeck() {
        for (const suit of this.suits) {
            for (const value of this.values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    public shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // swap elements
        }
    }
}

class ThirteenPokerGame {
    private deck: Deck;
    public player: Player;
    public enemies: Enemy[];
    // todo
    private isPlayerStart = false;
    private currentCombo = 'uninit';
    private currentCardDrawn:any;
    //todo
    private isFirstStart = true;


    constructor(){
        this.deck = new Deck();
        this.deck.shuffle();
        this.player = new Player();
        this.enemies = [];
        for (let i = 0; i < 3; i++) {
            this.enemies.push(new Enemy());
        }
        this.dealInitialCards();
    }

    private dealInitialCards(){
        for (let i = 0; i < 13; i++) {
            const playerCard = this.deck.cards.shift();
            if (playerCard) {
                this.player.hand.push(playerCard);
                this.player.sortHand();
            }
    
            this.enemies.forEach(enemy => {
                const enemyCard = this.deck.cards.shift();
                if (enemyCard) {
                    enemy.hand.push(enemyCard);
                }
            });

            for(const enemy of this.enemies){

            }
        }
    }

    public startGame(){
        for (let card of this.player.hand){
            if(card.suit === 'Spades' && card.value === '3'){
                this.isPlayerStart = true;
                break;
            }
        }
    }

    

    
}

export {Card, ThirteenPokerGame }

