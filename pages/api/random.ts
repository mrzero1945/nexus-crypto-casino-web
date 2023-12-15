// pages/api/random.ts

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


import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Membuat nomor acak antara 1 dan 10
  //const randomNumber = Math.floor(Math.random() * 10) + 1;
  const deck = new Deck();
  deck.shuffle();

  // Mengembalikan nomor tersebut dalam format JSON
  res.status(200).json({ value: deck.cards[0].value });
}
