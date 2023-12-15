import React, { Component } from 'react';

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

class BlackjackComponent extends Component {
    constructor(props) {
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

    renderCard(card:any) {
        return <div key={card.suit + card.value}>{card.value} of {card.suit}</div>;
    }

    render() {
        const { playerHand, enemyHand, winner } = this.state;

        return (
            <div>
                <h2>Blackjack</h2>
                <div>
                    <h3>Player Hand</h3>
                    {playerHand.map(card => this.renderCard(card))}
                </div>
                <div>
                    <h3>Enemy Hand</h3>
                    {enemyHand.map(card => this.renderCard(card))}
                </div>
                <button onClick={this.handleHit} disabled={!!winner}>Hit</button>
                <button onClick={this.handleStand} disabled={!!winner}>Stand</button>
                {winner && <h3>{winner}</h3>}
            </div>
        );
    }
}

export {BlackjackComponent};