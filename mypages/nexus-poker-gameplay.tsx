import React, { useState, useEffect } from 'react';

enum Suit {
    Hearts, Diamonds, Clubs, Spades
}

enum Rank {
    Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace, Two
}

class Card {
    constructor(public suit: Suit, public rank: Rank) {}
}

class Player {
    hand: Card[] = [];

    addCard(card: Card) {
        this.hand.push(card);
    }

    playCard(index: number): Card | null {
        if (index < this.hand.length) {
            return this.hand.splice(index, 1)[0];
        }
        return null;
    }
}

class Dealer {
    deck: Card[] = [];

    constructor() {
        // Gunakan filter untuk memastikan hanya nilai numerik yang diambil
        Object.values(Suit).filter(value => typeof value === 'number').forEach(suit => {
            Object.values(Rank).filter(value => typeof value === 'number').forEach(rank => {
                this.deck.push(new Card(suit as Suit, rank as Rank));
            });
        });
        this.shuffle();
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    dealCard(): Card | undefined {
        return this.deck.pop();
    }
}

class TienLenGame {
    players: Player[] = [new Player(), new Player()];
    dealer = new Dealer();

    startGame() {
        this.players.forEach(player => {
            for (let i = 0; i < 13; i++) {
                const card = this.dealer.dealCard();
                if (card) player.addCard(card);
            }
        });
    }
}



const TienLenComponent = () => {
    const [game] = useState(new TienLenGame());
    const [players, setPlayers] = useState<Player[]>([]);
    const [giliranPemain, setGiliranPemain] = useState(0);

    useEffect(() => {
        game.startGame();
        setPlayers([...game.players]); // Perbarui state pemain setelah pembagian kartu
    }, [game]);

    const mainkanKartu = (indexPemain: number, indexKartu: number) => {
        // Logika untuk memainkan kartu
        const newPlayers = [...players];
        const playedCard = newPlayers[indexPemain].playCard(indexKartu);
        // Lakukan sesuatu dengan playedCard jika perlu
        setGiliranPemain(giliranPemain === 0 ? 1 : 0);
        setPlayers(newPlayers); // Perbarui state pemain setelah memainkan kartu
    };

    return (
        <div>
            {players.map((pemain, index) => (
                <div key={index}>
                    <h3>Pemain {index + 1}</h3>
                    <div>
                        {pemain.hand.map((kartu, idx) => (
                            <button key={idx} onClick={() => mainkanKartu(index, idx)}>
                                {kartu.rank} dari {kartu.suit}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <h4>Giliran Pemain: {giliranPemain + 1}</h4>
        </div>
    );
};

export { TienLenComponent };