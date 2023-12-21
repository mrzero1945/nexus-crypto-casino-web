import React, { Component } from 'react';
import cardBackEnemyImg from '../resources/assets/PNG/Cards/cardBack_blue1.png';
import cardClubs2 from '../resources/assets/PNG/Cards/cardClubs2.png';
import cardClubs3 from '../resources/assets/PNG/Cards/cardClubs3.png';
import cardClubs4 from '../resources/assets/PNG/Cards/cardClubs4.png';
import cardClubs5 from '../resources/assets/PNG/Cards/cardClubs5.png';
import cardClubs6 from '../resources/assets/PNG/Cards/cardClubs6.png';
import cardClubs7 from '../resources/assets/PNG/Cards/cardClubs7.png';
import cardClubs8 from '../resources/assets/PNG/Cards/cardClubs8.png';
import cardClubs9 from '../resources/assets/PNG/Cards/cardClubs9.png';
import cardClubs10 from '../resources/assets/PNG/Cards/cardClubs10.png';
import cardClubsJ from '../resources/assets/PNG/Cards/cardClubsJ.png';
import cardClubsQ from '../resources/assets/PNG/Cards/cardClubsQ.png';
import cardClubsK from '../resources/assets/PNG/Cards/cardClubsK.png';
import cardClubsA from '../resources/assets/PNG/Cards/cardClubsA.png';
import cardDiamonds2 from '../resources/assets/PNG/Cards/cardDiamonds2.png';
import cardDiamonds3 from '../resources/assets/PNG/Cards/cardDiamonds3.png';
import cardDiamonds4 from '../resources/assets/PNG/Cards/cardDiamonds4.png';
import cardDiamonds5 from '../resources/assets/PNG/Cards/cardDiamonds5.png';
import cardDiamonds6 from '../resources/assets/PNG/Cards/cardDiamonds6.png';
import cardDiamonds7 from '../resources/assets/PNG/Cards/cardDiamonds7.png';
import cardDiamonds8 from '../resources/assets/PNG/Cards/cardDiamonds8.png';
import cardDiamonds9 from '../resources/assets/PNG/Cards/cardDiamonds9.png';
import cardDiamonds10 from '../resources/assets/PNG/Cards/cardDiamonds10.png';
import cardDiamondsJ from '../resources/assets/PNG/Cards/cardDiamondsJ.png';
import cardDiamondsQ from '../resources/assets/PNG/Cards/cardDiamondsQ.png';
import cardDiamondsK from '../resources/assets/PNG/Cards/cardDiamondsK.png';
import cardDiamondsA from '../resources/assets/PNG/Cards/cardDiamondsA.png';
import cardHearts2 from '../resources/assets/PNG/Cards/cardHearts2.png';
import cardHearts3 from '../resources/assets/PNG/Cards/cardHearts3.png';
import cardHearts4 from '../resources/assets/PNG/Cards/cardHearts4.png';
import cardHearts5 from '../resources/assets/PNG/Cards/cardHearts5.png';
import cardHearts6 from '../resources/assets/PNG/Cards/cardHearts6.png';
import cardHearts7 from '../resources/assets/PNG/Cards/cardHearts7.png';
import cardHearts8 from '../resources/assets/PNG/Cards/cardHearts8.png';
import cardHearts9 from '../resources/assets/PNG/Cards/cardHearts9.png';
import cardHearts10 from '../resources/assets/PNG/Cards/cardHearts10.png';
import cardHeartsJ from '../resources/assets/PNG/Cards/cardHeartsJ.png';
import cardHeartsQ from '../resources/assets/PNG/Cards/cardHeartsQ.png';
import cardHeartsK from '../resources/assets/PNG/Cards/cardHeartsK.png';
import cardHeartsA from '../resources/assets/PNG/Cards/cardHeartsA.png';
import cardSpades2 from '../resources/assets/PNG/Cards/cardSpades2.png';
import cardSpades3 from '../resources/assets/PNG/Cards/cardSpades3.png';
import cardSpades4 from '../resources/assets/PNG/Cards/cardSpades4.png';
import cardSpades5 from '../resources/assets/PNG/Cards/cardSpades5.png';
import cardSpades6 from '../resources/assets/PNG/Cards/cardSpades6.png';
import cardSpades7 from '../resources/assets/PNG/Cards/cardSpades7.png';
import cardSpades8 from '../resources/assets/PNG/Cards/cardSpades8.png';
import cardSpades9 from '../resources/assets/PNG/Cards/cardSpades9.png';
import cardSpades10 from '../resources/assets/PNG/Cards/cardSpades10.png';
import cardSpadesJ from '../resources/assets/PNG/Cards/cardSpadesJ.png';
import cardSpadesQ from '../resources/assets/PNG/Cards/cardSpadesQ.png';
import cardSpadesK from '../resources/assets/PNG/Cards/cardSpadesK.png';
import cardSpadesA from '../resources/assets/PNG/Cards/cardSpadesA.png';
import backgroundImg from '../resources/assets/PNG/background.png';

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

class Player {
    public hand: Card[];

    constructor(){
        this.hand = [];
    }
}

class Enemy {
    public hand:Card[];

    constructor(){
        this.hand = [];
    }
}

class ThirteenPokerGame {
    private deck: Deck;
    public player: Player;
    public enemies: Enemy[];
    private isPlayerStart = false;
    private currentCombo = 'uninit';
    private currentCardDrawn:any;
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

    public playerTurn(cards: Card[]) {
        if (this.isFirstStart) {
            // single
            if (cards.length === 1) {
                if (cards[0].suit === 'Spades' && cards[0].value === '3') {
                    this.currentCardDrawn = cards;
                    return;
                }
            }
            // pair
            else if (cards.length === 2) {
                if ((cards[0].suit === 'Spades' || cards[1].suit === 'Spades') && 
                    (cards[0].value === '3' && cards[1].value === '3')) {
                    this.currentCardDrawn = cards;
                    return;
                }
            }
            // triple
            else if (cards.length === 3) {
                if (cards[0].value === cards[1].value && cards[1].value === cards[2].value) {
                    if (cards.some(card => card.suit === 'Spades' && card.value === '3')) {
                        this.currentCardDrawn = cards;
                        return;
                    }
                }
            }
        }
    
        // Logika tambahan jika tidak memenuhi kondisi di atas
    }
    

    
}

interface ThirteenPokerComponentState {
    game: ThirteenPokerGame;
    playerHand: Card[];
    enemy1Hand: Card[];
    enemy2Hand: Card[];
    enemy3Hand: Card[];
    winner: string;
    isGameEnd: boolean;
}

class ThirteenPokerComponent extends Component<Record<string, never>, ThirteenPokerComponentState>{
    constructor(props: Record<string, never>){
        super(props);
        this.state = {
            game: new ThirteenPokerGame(),
            playerHand: [],
            enemy1Hand: [],
            enemy2Hand: [],
            enemy3Hand: [],
            winner: '',
            isGameEnd: false
        };
    }

    componentDidMount(): void {
        this.dealInitialCards();
    }

    renderCard(card: Card, isEnemy:boolean) {
        if(isEnemy){
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardBackEnemyImg.src}/>
                </div>
            );
        } 
        if(card.suit === 'Clubs' && card.value === '2'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '3'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '4'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '5'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '6'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '7'){
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '8'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '9'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '10'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'J'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'Q'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'K'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'A'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsA.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '2'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '3'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '4'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '5'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '6'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '7'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '8'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '9'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '10'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'J'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'Q'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'K'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'A'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsA.src}/>
                </div>
            );
        }

        if(card.suit === 'Hearts' && card.value === '2'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '3'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '4'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '5'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '6'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '7'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '8'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '9'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '10'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'J'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'Q'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'K'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'A'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsA.src}/>
                </div>
            );
        }
        if(card.suit === 'Spades' && card.value === '2'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '3'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '4'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '5'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '6'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '7'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '8'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '9'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '10'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'J'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'Q'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'K'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'A'){
            
            return (
                <div className='col py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesA.src}/>
                </div>
            );
        }
    }

    dealInitialCards(){
        const {game} = this.state;
        this.setState({
            playerHand: game.player.hand,
            enemy1Hand: game.enemies[0].hand,
            enemy2Hand : game.enemies[1].hand,
            enemy3Hand : game.enemies[2].hand
        });
    }
    render(){
        const { playerHand, winner } = this.state;
        return(
            <div className='container text-white'>
                <h1>Poker VietNam</h1>
                <div className='row'>
                <div className='col d-flex justify-content-center'>
                        <div className='row'>
                            <div className='col-5'>
                                <h2 className='text-center'>Enemy1</h2>
                            </div>
                            <div className='col-3'>
                                <img className='img-fluid' src={cardBackEnemyImg.src} />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-start'>
                        <div className='row'>
                            <div className='col-5'>
                                <h2>Enemy2</h2>
                            </div>
                            <div className='col-3'>
                                <img className='img-fluid' src={cardBackEnemyImg.src} />
                            </div>
                        </div>
                        
                    </div>

                    <div className='col d-flex justify-content-end'>
                        <div className='row'>
                             <div className='col-3'>
                                <img className='img-fluid' src={cardBackEnemyImg.src} />
                            </div>
                            <div className='col ps-0'>
                                <h2>Enemy3</h2>
                            </div>
                           
                        </div>
                        
                    </div>

                    
                    
                </div>
                <div className='row d-flex justify-content-center text-center'>
                    <div className='col'>
                        <h2>Drawn Card</h2>
                    </div>
                    
                </div>
                <div className='row mt-5'>
                    <h2>Player</h2>
                    <div className='row d-flex justify-content-center'>
                        {playerHand.map((card, index) => this.renderCard(card, false))}
                    </div>
                </div>

            </div>
        );
    }
}

export {ThirteenPokerComponent}