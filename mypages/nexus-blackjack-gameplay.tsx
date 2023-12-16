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


class Player {
    public hand: Card[];
    private isStand = false;

    constructor() {
        this.hand = [];
    }

    public hit(card: Card) {
        this.hand.push(card);
    }

    public stand() {
        this.isStand = true;
    }
}

class Enemy {
    public hand: Card[];
    private isFirstTimeCard = true;

    constructor() {
        this.hand = [];
    }

    public hit(card: Card) {
        this.hand.push(card);
    }

    public getIsFirstTimeCard(){
       return this.isFirstTimeCard
    }

    public setIsFirstTimeCard(isFirstTimeCard:boolean){
        this.isFirstTimeCard = isFirstTimeCard;
    }

  
}


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

class BlackjackGame {
    private deck: Deck;
    public player: Player;
    public enemy: Enemy;

    constructor() {
        this.deck = new Deck();
        this.deck.shuffle(); // Mengacak dek sebelum permainan dimulai

        this.player = new Player();
        this.enemy = new Enemy();

        // Bagikan masing-masing dua kartu untuk player dan enemy
        this.dealInitialCards();
    }

    private dealInitialCards() {
        for (let i = 0; i < 2; i++) {
            this.player.hit(this.deck.cards.pop()!);
            this.enemy.hit(this.deck.cards.pop()!);
        }
    }

    public playerHit() {
        const card = this.deck.cards.pop();
        if (card) {
            this.player.hit(card);
        }
    }

    public playerStand() {
        this.player.stand();
        // Implementasi lebih lanjut diperlukan di sini
    }

    public enemyTurn() {
        // Sederhana: enemy akan hit sampai skor mencapai 17 atau lebih
        // Logika ini bisa dibuat lebih kompleks
        while (this.calculateScore(this.enemy.hand) < 17) {
            const card = this.deck.cards.pop();
            if (card) {
                this.enemy.hit(card);
            }
        }
    }

    private calculateScore(hand: Card[]): number {
        // Implementasi logika menghitung skor
        // Perlu mempertimbangkan nilai 'A' sebagai 1 atau 11
        let score = 0;
        let aceCount = 0;

        for (const card of hand) {
            if (card.value === 'A') {
                aceCount++;
                score += 11; // Sementara anggap nilai 'A' sebagai 11
            } else if (['J', 'Q', 'K'].includes(card.value)) {
                score += 10;
            } else {
                score += parseInt(card.value);
            }
        }

        while (score > 21 && aceCount > 0) {
            score -= 10; // Mengurangi nilai 'A' menjadi 1
            aceCount--;
        }

        return score;
    }

    public checkWinner() {
        // Logika untuk menentukan pemenang
        const playerScore = this.calculateScore(this.player.hand);
        const enemyScore = this.calculateScore(this.enemy.hand);

        if (playerScore > 21) {
            return 'Enemy wins';
        } else if (enemyScore > 21) {
            return 'Player wins';
        } else if (playerScore > enemyScore) {
            return 'Player wins';
        } else if (enemyScore > playerScore) {
            return 'Enemy wins';
        } else {
            return 'Tie';
        }
    }
}

interface BlackjackComponentState {
    game: BlackjackGame;
    playerHand: Card[];
    enemyHand: Card[];
    winner: string;
}
class BlackjackComponent extends Component<Record<string, never>, BlackjackComponentState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            game: new BlackjackGame(),
            playerHand: [],
            enemyHand: [],
            winner: ''
        };
    }

    componentDidMount() {
        this.dealInitialCards();
    }

    dealInitialCards() {
        const { game } = this.state;
        this.setState({
            playerHand: game.player.hand,
            enemyHand: game.enemy.hand
        });
    }

    handleHit = () => {
        const { game } = this.state;
        game.playerHit();
        this.setState({
            playerHand: [...game.player.hand]
        });
    }

    handleStand = () => {
        const { game } = this.state;
        game.playerStand();
        game.enemyTurn();
        this.setState({
            enemyHand: [...game.enemy.hand],
            winner: game.checkWinner()
        });
    }

    renderCard(card: Card, isEnemy:boolean) {
        if(card.suit === 'Clubs' && card.value === '2'){
            if(isEnemy){
                if(!this.state.game.enemy.getIsFirstTimeCard()){
                    return(
                    <div className='col-2'>
                        <img className='img-fluid' src={cardBackEnemyImg.src}/>
                    </div>
                    );
                }
                if(this.state.game.enemy.getIsFirstTimeCard()){
                    this.state.game.enemy.setIsFirstTimeCard(false);
                }
            }
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '3'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '4'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '5'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '6'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '7'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '8'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '9'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '10'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubs10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'J'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'Q'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'K'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'A'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardClubsA.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '2'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '3'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '4'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '5'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '6'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '7'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '8'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '9'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '10'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamonds10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'J'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamondsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'Q'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamondsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'K'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamondsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'A'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardDiamondsA.src}/>
                </div>
            );
        }

        if(card.suit === 'Hearts' && card.value === '2'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '3'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '4'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '5'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '6'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '7'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '8'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '9'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '10'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHearts10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'J'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHeartsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'Q'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHeartsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'K'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHeartsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'A'){
            return (
                <div className='col-2'>
                    <img className='img-fluid' src={cardHeartsA.src}/>
                </div>
            );
        }
        
        
        // Repeat this pattern for Diamonds, Hearts, and Spades
        
        return <div key={card.suit + card.value}>{card.value} of {card.suit}</div>;
    }

    render() {
        const { playerHand, enemyHand, winner } = this.state;

        return (
            <div className='container text-center text-white'>
                <h1>BlackJack Demo</h1>
                
                <div>
                    <h2>Enemy Hand</h2>
                    <div className='row'>
                        {enemyHand.map((card, index) => this.renderCard(card, true))}
                    </div>
                    
                </div>
                <div>
                    <h2>Player Hand</h2>
                    <div className='row'>
                        {playerHand.map((card, index) => this.renderCard(card, false))}
                    </div>
                    
                </div>
                <button onClick={this.handleHit} disabled={!!winner}>Hit</button>
                <button onClick={this.handleStand} disabled={!!winner}>Stand</button>
                {winner && <h3>{winner}</h3>}
            </div>
        );
    }
}

export {BlackjackComponent};