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

interface ThirteenPokerComponentState {
    game: ThirteenPokerGame;
    playerHand: Card[];
    enemy1Hand: Card[];
    enemy2Hand: Card[];
    enemy3Hand: Card[];
    winner: string;
    isGameEnd: boolean;
    choosenCard: boolean[];
    selectedCards: Card[];
    animateCard: boolean;
    animationStyles: { transform?: string; transition?: string }[];
    toggleAnimation: boolean;
    thrownCards : Card[];
    isDisabledPlayBtn: boolean;
    isFirstStart: boolean;
    isFirstPlayerTurn: boolean;
}

class ThirteenPokerComponent extends Component<Record<string, never>, ThirteenPokerComponentState>{
    constructor(props: Record<string, never>){
        super(props);
        this.state = {
            game: new ThirteenPokerGame(),
            isFirstStart: false,
            playerHand: [],
            enemy1Hand: [],
            enemy2Hand: [],
            enemy3Hand: [],
            winner: '',
            isGameEnd: false,
            choosenCard: new Array(13).fill(false),
            animateCard: false,
            animationStyles: [],
            toggleAnimation: false,
            //proto
            selectedCards: [],
            thrownCards: [],
            isDisabledPlayBtn: true,
            isFirstPlayerTurn: false
        };
        this.targetRef = React.createRef<HTMLDivElement>();
        // Inisialisasi cardRefs sebagai instance variable
    
    }
    //proto
  
    //proto
    private targetRef: RefObject<HTMLDivElement>;

    
    
    

    componentDidMount(): void {
        this.dealInitialCards();
    }





    //proto
    componentDidUpdate(){
        console.log("isdbslbtn", this.state.isDisabledPlayBtn)
        let index = 0;
        const selectedCard = this.state.selectedCards; 
        for(const card of selectedCard){
            index++;
            console.log("obj", index, card.suit, card.value);
        }
        const ThrowTheCard = this.state.thrownCards
        
        
        
    }

    // proto
    setIsDisableBtn = (value: boolean) => {
        this.setState({
            isDisabledPlayBtn: value
        });
    }

    //proto
    setThrownCards = (value: Card[]) =>{
        this.setState({
            thrownCards : value
        }, () => {
            console.log(this.state.thrownCards.length)
        });
    }


    // proto
    setToggleAnimation = (value: boolean) => {
        this.setState({ toggleAnimation: value });
    };

    updateButtonPlay(){
        const enumNilai:any = {
            '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, 
            '8': 6, '9': 7, '10': 8, 'J': 9, 'Q': 10, 
            'K': 11, 'A': 12, '2': 13
        };
    
        console.log("Memulai updateButtonPlay:", this.state);
    
        if(this.state.thrownCards.length === 0){
            console.log("Tidak ada kartu yang dibuang atau dipilih");
            for(const card of this.state.playerHand){
                console.log("Memeriksa kartu di tangan pemain:", enumNilai[card.value]);
                if(enumNilai[card.value] === 3 && card.suit === 'Spades'){
                    console.log("Kartu 3 Spades ditemukan, giliran pemain pertama");
                    this.setState({
                        isFirstPlayerTurn: true
                    }, () => {
                        //if(this.state.isFirstPlayerTurn === true &&
                          //  enumNilai[this.state.selectedCards[0].value] === 3 &&
                            //this.state.selectedCards[0].suit === "Spades"){
                            //console.log("Kartu 3 Spades dipilih di giliran pertama");
                            //this.setIsDisableBtn(false);
                        //}    
                    });
                    break;
                }
            }
        }
        
        // single
        if(this.state.selectedCards.length === 1){
            console.log("Satu kartu dipilih");
            if(this.state.thrownCards.length === 1){
                console.log("Satu kartu dibuang");
                if(this.state.selectedCards[0].value > this.state.thrownCards[0].value ){
                    console.log("Kartu yang dipilih lebih tinggi dari yang dibuang");
                    this.setIsDisableBtn(false);
                }
            }
              
            
        }
        // pair
        else if(this.state.selectedCards.length === 2){
            console.log("Dua kartu dipilih");
            // Logika untuk pair
        }
        // triple pair
        else if(this.state.selectedCards.length === 3){
            console.log("Tiga kartu dipilih");
            // Logika untuk triple pair
        }
        // four pair
        else if(this.state.selectedCards.length === 4){
            console.log("Empat kartu dipilih");
            // Logika untuk four pair
        }
        // bomb pair
        else if(this.state.selectedCards.length === 6){
            console.log("Enam kartu dipilih, memeriksa untuk bomb pair");
            if(this.state.selectedCards[0].value === this.state.selectedCards[1].value &&
                (enumNilai[this.state.selectedCards[1].value] + 1) === enumNilai[this.state.selectedCards[2].value]){
                console.log("Kondisi bomb pair terpenuhi");
                // Logika untuk bomb pair
            }
        }
        else{
            console.log("Kondisi lain, tombol non-aktif");
            this.setIsDisableBtn(true);
        }
    }
    
    // proto
    setSelectedCard = (cards: Card[], isRemove?: boolean) => {
        if (!isRemove) {
            this.setState({
              selectedCards: [...cards]
            }, () => {
              console.log("Added cards:", cards);
              this.updateButtonPlay();
               
            });
       } else {
        const updatedSelectedCards = [...this.state.selectedCards];
        const cardsToRemove = cards.map((card) => card.suit + card.value);
    
        for (const cardToRemove of cardsToRemove) {
          const indexToRemove = updatedSelectedCards.findIndex(
            (card) => card.suit + card.value === cardToRemove
          );
    
          if (indexToRemove !== -1) {
            updatedSelectedCards.splice(indexToRemove, 1);
            console.log(`Removed card: ${cardToRemove}`);
          } else {
            console.log(`Card not found: ${cardToRemove}`);
          }
        }
    
        this.setState({
          selectedCards: updatedSelectedCards
        }, () => {
            // update todo
            this.updateButtonPlay();
        });
      }
      };
    renderCard(card: Card, index:number) {

        
        if(card.suit === 'Clubs' && card.value === '2'){
            
            return (
                <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs2.src} />
            );
        }
        else if(card.suit === 'Clubs' && card.value === '3'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs3.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '4'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs4.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '5'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs5.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '6'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs6.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '7'){
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs7.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '8'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs8.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '9'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs9.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === '10'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubs10.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'J'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsJ.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsQ.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'K'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsK.src}/>
                
            );
        }
        else if(card.suit === 'Clubs' && card.value === 'A'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardClubsA.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '2'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds2.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '3'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds3.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '4'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds4.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '5'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds5.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '6'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds6.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '7'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds7.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '8'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds8.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '9'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds9.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === '10'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamonds10.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'J'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsJ.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsQ.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'K'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsK.src}/>
                
            );
        }
        else if(card.suit === 'Diamonds' && card.value === 'A'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardDiamondsA.src}/>
                
            );
        }

        if(card.suit === 'Hearts' && card.value === '2'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts2.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '3'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts3.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '4'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts4.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '5'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts5.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '6'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts6.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '7'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts7.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '8'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts8.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '9'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts9.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === '10'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHearts10.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'J'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsJ.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsQ.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'K'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsK.src}/>
                
            );
        }
        else if(card.suit === 'Hearts' && card.value === 'A'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardHeartsA.src}/>
                
            );
        }
        if(card.suit === 'Spades' && card.value === '2'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades2.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '3'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades3.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '4'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades4.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '5'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades5.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '6'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades6.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '7'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades7.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '8'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades8.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '9'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades9.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === '10'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpades10.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'J'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesJ.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'Q'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesQ.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'K'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesK.src}/>
                
            );
        }
        else if(card.suit === 'Spades' && card.value === 'A'){
            
            return (
                
                    <ImageTransition isDisabledPlayBtn={this.state.isDisabledPlayBtn} setIsDisabledPlayBtn={this.setIsDisableBtn} thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} card={card} selectedCard={this.state.selectedCards} setSelectedCard={this.setSelectedCard} refTarget={this.targetRef} toggle={this.state.toggleAnimation} setToggle={this.setToggleAnimation} img={cardSpadesA.src}/>
                
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
                <div className='col-md-6 col-6'>
                    <h2 className='text-start'>Enemy2</h2>
                    <div className='text-start'>
                        <img width={50} src={cardBackEnemyImg.src} />
                    </div>
                </div>

    <div className='col-md-6 col-6'>
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
                    <div className='row justify-content-center mt-md-2 '>
                        <ImageTransition thrownCards={this.state.thrownCards} setThrownCards={this.setThrownCards} isDisabledPlayBtn={this.state.isDisabledPlayBtn} refTarget={this.targetRef} img="" setToggle={this.setToggleAnimation} toggle={this.state.toggleAnimation}  isButton={true}/>
                        <div className='col-md-auto col d-flex justify-content-center'>
                            <button className='btn px-md-4 px-5 text-white btn-warning' style={{borderRadius:'15px'}}>Pass</button>
                        </div>
                    </div>
                    


                </div>

                

       

            </div>
        );
    }
}

export {ThirteenPokerComponent}