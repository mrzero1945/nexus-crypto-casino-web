import { ImageTransition } from '../components/animation-move';
import React, { Component, RefObject } from 'react';
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
    choosenCard: boolean[];
    animateCard: boolean;
    animationStyles: { transform?: string; transition?: string }[];
    toggleAnimation: boolean;
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
            isGameEnd: false,
            choosenCard: new Array(13).fill(false),
            animateCard: false,
            animationStyles: [],
            toggleAnimation: false
        };
        this.targetRef = React.createRef<HTMLDivElement>();
        // Inisialisasi cardRefs sebagai instance variable
        this.cardRefs = Array(13).fill(null).map(() => React.createRef());
    }
    //proto
    private cardRefs: RefObject<HTMLImageElement>[];
    //proto
    private targetRef: RefObject<HTMLDivElement>;

    //proto 
    triggerAnimation = (cardIndex: number) => {
        const cardRef = this.cardRefs[cardIndex];

        if (cardRef.current && this.targetRef.current) {
            const targetBounds = this.targetRef.current.getBoundingClientRect();
            const cardBounds = cardRef.current.getBoundingClientRect();

            const diffX = targetBounds.left - cardBounds.left;
            const diffY = targetBounds.top - cardBounds.top;

            this.setState(prevState => {
                const updatedStyles = prevState.animationStyles.slice();
                updatedStyles[cardIndex] = {
                    transform: `translate(${diffX}px, ${diffY}px)`,
                    transition: 'transform 1s ease-in-out'
                };
                return {
                    ...prevState, // Jangan lupa menyertakan sisa properti state
                    animateCard: true,
                    animationStyles: updatedStyles
                };
            });

            setTimeout(() => {
                this.setState(prevState => {
                    const updatedStyles = prevState.animationStyles.slice();
                    updatedStyles[cardIndex] = {};
                    return {
                        ...prevState, // Menyertakan sisa properti state
                        animateCard: false,
                        animationStyles: updatedStyles
                    };
                });
            }, 1000);
        }
    };
    // proto
    toggleZoom = (index: number) => {
        let updatedChoosenCard = [...this.state.choosenCard];
        updatedChoosenCard[index] = !updatedChoosenCard[index];
        this.setState({ choosenCard: updatedChoosenCard });
    }
    

    componentDidMount(): void {
        this.dealInitialCards();
    }

    // proto
    setToggleAnimation = (value: boolean) => {
        this.setState({ toggleAnimation: value });
    };

    renderCard(card: Card, index:number) {
        const isSelected = this.state.choosenCard[index];
        const zoomStyle:any = {
            transform: 'scale(1.5)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 2
        };
        const cardRef = this.cardRefs[index];
        const targetCard: any = isSelected ? {cardRef} : {};

        
        if(card.suit === 'Clubs' && card.value === '2'){
            
            return (
                <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs2.src} />
            );
        }
        else if(card.suit === 'Clubs' && card.value === '3'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs3.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '4'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs4.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '5'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs5.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '6'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs6.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '7'){
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs7.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '8'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs8.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '9'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs9.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '10'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs10.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'J'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsJ.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsQ.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'K'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsK.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'A'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsA.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '2'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds2.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '3'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds3.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '4'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds4.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '5'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds5.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '6'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds6.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '7'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds7.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '8'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds8.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '9'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds9.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '10'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds10.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'J'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsJ.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsQ.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'K'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsK.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'A'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsA.src}/>
                
            );
        }

        if(card.suit === 'Hearts' && card.value === '2'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts2.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '3'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts3.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '4'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts4.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '5'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts5.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '6'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts6.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '7'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts7.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '8'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts8.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '9'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts9.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '10'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts10.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'J'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsJ.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsQ.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'K'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsK.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'A'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsA.src}/>
                
            );
        }
        if(card.suit === 'Spades' && card.value === '2'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades2.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '3'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades3.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '4'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades4.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '5'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades5.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '6'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades6.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '7'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades7.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '8'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades8.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '9'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades9.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '10'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades10.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'J'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesJ.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesQ.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'K'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesK.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'A'){
            
            return (
                
                    <ImageTransition refTarget={this.targetRef} isTarget={false} isButton={false} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesA.src}/>
                
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
                

                <h1 className='text-center'>Poker VietNam</h1>
                <div className='row justify-content-center'>
    <div className='col-md-6 text-center'>
        <h2>Enemy1</h2>
    </div>
    <div className='text-center'>
        <img width={50} src={cardBackEnemyImg.src} />
    </div>
</div>

<div className='row'>
    <div className='col-md-6'>
        <h2 className='text-start'>Enemy2</h2>
        <div className='text-start'>
            <img width={50} src={cardBackEnemyImg.src} />
        </div>
    </div>

    <div className='col-md-6'>
        <h2 className='text-end'>Enemy3</h2>
        <div className='text-end'>
            <img width={50} src={cardBackEnemyImg.src} />
        </div>
    </div>     
</div>



                <div className='row d-flex justify-content-center text-center'>
                    <div className='col'>
                    <div className="col-12 d-inline-flex justify-content-center" >
                        <p ref={this.targetRef}>Target</p>
                    </div>
                    </div>
                </div>

                <div className='row'>
                    <h2 className='mb-md-2'>Player</h2>
                    <div className='row d-flex justify-content-center'>
                        {playerHand.map((card, index) => this.renderCard(card, index))}
                    </div>
                    <div className='row justify-content-center mt-md-2'>
                        <div className='col-md-auto d-flex justify-content-center'>
                            <button className='btn px-md-4 btn-success' style={{borderRadius:'15px'}} onClick={() => this.triggerAnimation(0)}>Play</button>
                        </div>
                        <div className='col-md-auto d-flex justify-content-center'>
                            <button className='btn px-md-4 text-white btn-warning' style={{borderRadius:'15px'}}>Pass</button>
                        </div>
                    </div>
                    <ImageTransition refTarget={this.targetRef} img="" setToggle={this.setToggleAnimation} toggle={this.state.toggleAnimation} isTarget={false} isButton={true}/>


                </div>

                

       

            </div>
        );
    }
}

export {ThirteenPokerComponent}