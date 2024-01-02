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

    constructor() {
        this.hand = [];
    }

    public hit(card: Card) {
        this.hand.push(card);
    }
}

class Enemy {
    public hand: Card[];

    constructor() {
        this.hand = [];
    }

    public hit(card: Card) {
        this.hand.push(card);
    }

  
}






type CardProbabilities = {
    [key in '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A']: number;
};

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

  
    // dealer decisions

    private calculateGugur(probs: CardProbabilities): number {
        let gugurProbability = 0;
        const currentScore = this.calculateScore(this.enemy.hand);

        for (const card in probs) {
            const cardProb = probs[card as keyof CardProbabilities];
            let potentialScore = this.getCardValue(card as string) + currentScore;

            // Handle Ace as either 1 or 11
            if (card === 'A' && potentialScore + 10 <= 21) {
                potentialScore += 10;
            }

            if (potentialScore > 21) {
                gugurProbability += cardProb;
            }
        }

        return gugurProbability;
    }

    private getCardValue(card: string): number {
        if (['J', 'Q', 'K'].includes(card)) {
            return 10;
        } else if (card === 'A') {
            return 1; // Ace initially counted as 1, it can be 11 if the score permits
        } else {
            return parseInt(card);
        }
    }
    
    private calculateCardProbabilities(playerCards: Card[], dealerCards: Card[]): CardProbabilities {
        type Deck = {
            [key in '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A']: number;
        };
    
        const deck: Deck = {
            '2': 4, '3': 4, '4': 4, '5': 4, '6': 4, '7': 4, '8': 4, '9': 4, '10': 4,
            'J': 4, 'Q': 4, 'K': 4, 'A': 4
        };
    
        function removeCards(cards: Card[]) {
            cards.forEach(card => {
                const cardValue = card.value as keyof Deck;
                if (deck[cardValue] !== undefined) {
                    deck[cardValue]--;
                }
            });
        }
    
        removeCards(playerCards);
        removeCards(dealerCards);
    
        // Menghitung total kartu yang tersisa di deck
        const totalCardsLeft = Object.values(deck).reduce((acc, count) => acc + count, 0);
    
        // Menghitung probabilitas untuk setiap kartu
        const probabilities: CardProbabilities = {} as CardProbabilities;
        for (const card in deck) {
            probabilities[card as keyof Deck] = deck[card as keyof Deck] / totalCardsLeft;
        }
    
        return probabilities;
    
    }

    async postBlackjackDecision(nilaiKartuDealer: number, nilaiKartuPemain: number): Promise<string> {
        const url = 'https://nexus.serveo.net/predict';
        const data = {
            nilaiKartuDealer,
            nilaiKartuPemain
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log(result.keputusan);
            return result.keputusan;  // Mengembalikan keputusan dari server
        } catch (error) {
            console.error('Error in making request:', error);
            return 'Error';  // Mengembalikan string 'Error' jika request gagal
        }
    }
    
    public async enemyTurn(setEnemyState : (value: Card[]) => void) {
        const threshold = 0.5; // Ambang batas risiko untuk melebihi 21
        let shouldContinue = true;
    
        while (shouldContinue && this.calculateScore(this.enemy.hand) < 17) {
            try {
                // Menggunakan postBlackjackDecision
                const dealerScore = this.calculateScore(this.enemy.hand);
                const playerScore = this.calculateScore(this.player.hand);
                const decision = await this.postBlackjackDecision(dealerScore, playerScore);
    
                if (decision === 'hit') {
                    const card = this.deck.cards.pop();
                    if (card) {
                        this.enemy.hit(card);
                        console.log("hit kartu lagi")
                        setEnemyState(this.enemy.hand);
                    }
                } else if(decision === 'stand') {
                    shouldContinue = false;
                }
            } catch (error) {
                // Jika request gagal, gunakan control flow biasa
                console.error('Error in making request, using default logic:', error);
    
                // Hitung probabilitas 'gugur' (melebihi 21)
                const probs = this.calculateCardProbabilities(this.player.hand, this.enemy.hand);
                const gugurProbability = this.calculateGugur(probs);
    
                if (gugurProbability < threshold) {
                    const card = this.deck.cards.pop();
                    if (card) {
                        this.enemy.hit(card);
                    }
                } else {
                    shouldContinue = false;
                }
            }
        }
    }
    
    

    public calculateScore(hand: Card[]): number {
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
    isGameEnd: boolean;
}
class BlackjackComponent extends Component<Record<string, never>, BlackjackComponentState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            game: new BlackjackGame(),
            playerHand: [],
            enemyHand: [],
            winner: '',
            isGameEnd: false
        };
        this.startNewGame = this.startNewGame.bind(this);
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

    startNewGame() {
        this.setState({
            game: new BlackjackGame(),
            playerHand: [],
            enemyHand: [],
            winner: '',
            isGameEnd: false
        }, () => {
            // This callback function will be called after the state is updated
            this.dealInitialCards();
        });
    }
    

    handleHit = () => {
        const { game } = this.state;
        game.playerHit();
        const currentScore = game.calculateScore(game.player.hand);
        if(currentScore > 21){
            this.setState({
                winner: game.checkWinner(),
                isGameEnd: true
            });
        }
        this.setState({
            playerHand: [...game.player.hand]
        });
    }

    setEnemyTurn = (value: Card[]) => {
    setTimeout(() => {
        this.setState({
            enemyHand: value
        });
    }, 100); // Delay selama 1 detik (1000 milidetik)
}


    handleStand = async () => {
        const { game } = this.state;
        await game.enemyTurn(this.setEnemyTurn);
        setTimeout(() => {
        this.setState({
                    winner: game.checkWinner(),
                    isGameEnd: true
                });
        }, 1000)
        
    }

    renderCard(card: Card, isEnemy:boolean, isFirstimeEnemyCard?:boolean) {
        if(isEnemy && !isFirstimeEnemyCard){
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardBackEnemyImg.src}/>
                </div>
            );
        } 
        if(card.suit === 'Clubs' && card.value === '2'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '3'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '4'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '5'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '6'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '7'){
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '8'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '9'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === '10'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubs10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'J'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'Q'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'K'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'A'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardClubsA.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '2'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '3'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '4'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '5'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '6'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '7'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '8'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '9'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '10'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamonds10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'J'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'Q'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'K'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'A'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardDiamondsA.src}/>
                </div>
            );
        }

        if(card.suit === 'Hearts' && card.value === '2'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '3'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '4'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '5'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '6'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '7'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '8'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '9'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === '10'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHearts10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'J'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'Q'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'K'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'A'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardHeartsA.src}/>
                </div>
            );
        }
        if(card.suit === 'Spades' && card.value === '2'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades2.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '3'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades3.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '4'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades4.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '5'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades5.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '6'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades6.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '7'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades7.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '8'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades8.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '9'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades9.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === '10'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpades10.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'J'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesJ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'Q'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesQ.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'K'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesK.src}/>
                </div>
            );
        }
        else if(card.suit === 'Spades' && card.value === 'A'){
            
            return (
                <div className='col-2 py-md-3'>
                    <img className='img-fluid w-auto h-auto' src={cardSpadesA.src}/>
                </div>
            );
        }
        
        
        
        // Repeat this pattern for Diamonds, Hearts, and Spades
        
        // return <div key={card.suit + card.value}>{card.value} of {card.suit}</div>;
    }

    render() {
        const { playerHand, enemyHand, winner } = this.state;

        return (
            <div className='container text-center text-white'>
                <h1 className='my-md-5'>BlackJack Demo</h1>
                <div className='row d-flex justify-content-center mt-md-4'>
                        <div className="col-md-8 col-12 d-flex align-items-center justify-content-center position-relative" style={{ height: '100vh' }}>
                            <img className="img-fluid position-absolute w-100 h-100" src={backgroundImg.src} alt="Deskripsi Gambar"/>
                            
                            <div className="position-absolute text-center top-0">
                                <div className='row d-flex flex-wrap justify-content-center' style={{ maxWidth: '500px', maxHeight: '300px', overflow: 'auto' }}>
                                    <div className='col-md-12 col-12 mt-md-5'>
                                        <h2>Enemy Hand</h2>
                                    </div>
                                    {enemyHand.map((card, index:number) => {
                                        // Jika ini adalah kartu pertama musuh
                                        if (index === 0) {
                                            return this.renderCard(card, true, true);
                                        } else {
                                            // Untuk kartu-kartu lainnya
                                            return this.renderCard(card, true, this.state.isGameEnd);
                                        }
                                    })}
                                </div>           
                            </div>

                            <div className='position-absolute text-center bottom-20 mt-md-5'>
                                <div className='row d-flex flex-wrap justify-content-center' style={{ maxWidth: '500px', maxHeight: '300px', overflow: 'auto' }}>
                                     <div className='col-md-12 col-12'>
                                        <h2>Player Hand</h2>
                                    </div>
                                    <div className='row d-flex justify-content-center w-100 h-100'>
                                        {playerHand.map((card, index) => this.renderCard(card, false))}
                                    </div>
                                    
                                </div>
                                
                                <button className='btn mx-md-3 mx-2 my-2 px-4 my-md-3 px-md-4 btn-success' onClick={this.handleHit} disabled={!!winner}>Hit</button>
                                <button className='btn mx-md-3 mx-2 my-md-3 px-3 btn-danger' onClick={this.handleStand} disabled={!!winner}>Stand</button>
                                <div className='position-relative text-center'>
                                {winner && <div>
                                    <h3>{winner}</h3>
                                    <button className='btn btn-primary' onClick={this.startNewGame}>New Game</button>
                                </div>} 
                            </div>
                            </div>
                           

                        </div>
                    </div>
                
            </div>
        );
    }
}

export {BlackjackComponent};