// ingat untuk tidak tidur agar kau tidak mati
import React, { Component} from 'react';
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
import { ThirteenPokerGame, Card} from '../header/poker-game';
import { gsap } from "gsap";

const enumNilai : any = {
    '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 
    '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 
    'K': 13, 'A': 14, '2': 15
};

const imgArr:any = { '3Spades':cardSpades3.src , '4Spades':cardSpades4.src , '5Spades':cardSpades5.src , '6Spades':cardSpades6.src , '7Spades':cardSpades7.src , '8Spades':cardSpades8.src , '9Spades':cardSpades9.src , '10Spades':cardSpades10.src , 'JSpades':cardSpadesJ.src , 'QSpades':cardSpadesQ.src , 'KSpades':cardSpadesK.src , 'ASpades':cardSpadesA.src , '2Spades':cardSpades2.src , '3Hearts':cardHearts3.src , '4Hearts':cardHearts4.src , '5Hearts':cardHearts5.src , '6Hearts':cardHearts6.src , '7Hearts':cardHearts7.src , '8Hearts':cardHearts8.src , '9Hearts':cardHearts9.src , '10Hearts':cardHearts10.src , 'JHearts':cardHeartsJ.src , 'QHearts':cardHeartsQ.src , 'KHearts':cardHeartsK.src , 'AHearts':cardHeartsA.src , '2Hearts':cardHearts2.src , '3Clubs':cardClubs3.src , '4Clubs':cardClubs4.src , '5Clubs':cardClubs5.src , '6Clubs':cardClubs6.src , '7Clubs':cardClubs7.src , '8Clubs':cardClubs8.src , '9Clubs':cardClubs9.src , '10Clubs':cardClubs10.src , 'JClubs':cardClubsJ.src , 'QClubs':cardClubsQ.src , 'KClubs':cardClubsK.src , 'AClubs':cardClubsA.src , '2Clubs':cardClubs2.src , '3Diamonds':cardDiamonds3.src , '4Diamonds':cardDiamonds4.src , '5Diamonds':cardDiamonds5.src , '6Diamonds':cardDiamonds6.src , '7Diamonds':cardDiamonds7.src , '8Diamonds':cardDiamonds8.src , '9Diamonds':cardDiamonds9.src , '10Diamonds':cardDiamonds10.src , 'JDiamonds':cardDiamondsJ.src , 'QDiamonds':cardDiamondsQ.src , 'KDiamonds':cardDiamondsK.src , 'ADiamonds':cardDiamondsA.src , '2Diamonds':cardDiamonds2.src  };
interface MainState{
    game: ThirteenPokerGame;
    playerHand: Card[];
    enemy1Hand: Card[];
    enemy2Hand: Card[];
    enemy3Hand: Card[];
    selectedCard: Card[];
    enemy1SelectedCard: Card[];
    enemy2SelectedCard: Card[];
    enemy3SelectedCard: Card[];
    choosenCard: boolean[];
    showStartBtn : boolean;
    playTurn: string;
    thrownCards: Card[];
    isValidSelectedCard: boolean;
}

class ThirteenPokerComponent extends Component<Record<string, never>, MainState>{
    constructor(props: Record<string, never>){
        super(props);
        this.refAmmosPlayer =  Array.from({ length: 13 }, () => React.createRef<HTMLDivElement>());
        this.refAmmosEnemy =  Array.from({ length: 13 }, () => React.createRef<HTMLDivElement>());
        this.refTarget = React.createRef<HTMLDivElement>();
        this.state = {
            game: new ThirteenPokerGame(),
            playerHand: [],
            enemy1Hand: [],
            enemy2Hand: [],
            enemy3Hand: [],
            selectedCard: [],
            choosenCard: new Array(13).fill(false),
            showStartBtn : true,
            playTurn: "",
            enemy1SelectedCard: [],
            enemy2SelectedCard: [],
            enemy3SelectedCard: [],
            thrownCards: [],
            isValidSelectedCard: false
        };
    }
    
    refAmmosPlayer:React.RefObject<HTMLDivElement>[];
    refAmmosEnemy:React.RefObject<HTMLDivElement>[];
    refTarget:React.RefObject<HTMLDivElement>;

    setShowStartBtn(){
        this.dealInitialCards();
        this.setState({
            showStartBtn: !this.state.showStartBtn
        })
    }

    componentDidMount(): void {
        
    }
    // start initial
    dealInitialCards(){
        const {game} = this.state;
        this.setState({
            playerHand: game.player.hand,
            enemy1Hand: game.enemies[0].hand,
            enemy2Hand : game.enemies[1].hand,
            enemy3Hand : game.enemies[2].hand
        }, () => {
            const playerHands = {
                player: this.state.playerHand,
                enemy1: this.state.enemy1Hand,
                enemy2: this.state.enemy2Hand,
                enemy3: this.state.enemy3Hand
              };
              
              for (const [player, hand] of Object.entries(playerHands)) {
                if (hand.some(card => enumNilai[card.value] === 3 && card.suit === 'Spades')) {
                  this.setState({
                    playTurn: player
                  }, () => {
                    console.log("turn", this.state.playTurn);
                    if(this.state.playTurn === 'enemy1'){
                        this.turnEnemy1();
                    }
                    if(this.state.playTurn === 'enemy2'){
                        this.turnEnemy2();
                    }
                    if(this.state.playTurn === 'enemy3'){
                        this.turnEnemy3();
                    }
                  });
                  break; // Keluar dari loop setelah menemukan pemain pertama dengan kartu 3 Spades
                }
              }
        });
    }

    // find 2 pairs
    findPairsWithSameValue(cards:Card[]) {
        // Mengelompokkan kartu berdasarkan nilai numerik
        const groupedByNumericValue:Card[][] = [];
      
        cards.forEach(card => {
          const numericValue = this.getNumericValue(card);
          if (!groupedByNumericValue[numericValue]) {
            groupedByNumericValue[numericValue] = [];
          }
          groupedByNumericValue[numericValue].push(card);
        });
      
        const pairs = [];
      
        // Mencari pasangan dengan nilai numerik yang sama tapi suit berbeda
        for (const numericValue in groupedByNumericValue) {
          const cardsWithSameNumericValue = groupedByNumericValue[numericValue];
      
          for (let i = 0; i < cardsWithSameNumericValue.length; i++) {
            for (let j = i + 1; j < cardsWithSameNumericValue.length; j++) {
              if (cardsWithSameNumericValue[i].suit !== cardsWithSameNumericValue[j].suit) {
                pairs.push([cardsWithSameNumericValue[i], cardsWithSameNumericValue[j]]);
              }
            }
          }
        }
      
        return pairs;
      }

    turnEnemy1(){
        // first game
        console.log("Memulai turnEnemy1");
    
        if(this.state.thrownCards.length === 0){
            console.log("Tidak ada kartu yang dibuang. Mencari rangkaian berurutan...");
    
            const countedRuns = this.countingRun(this.state.enemy1Hand);
            console.log("Rangkaian berurutan ditemukan:", countedRuns);
    
            if(countedRuns.length !== 0){
                for(const runs of countedRuns){
                    for(const run of runs){
                        if(enumNilai[run.value] === 3 && run.suit === 'Spades'){
                            console.log("Mengatur kartu terpilih enemy1 dengan rangkaian:", runs);
                            this.setState({
                                enemy1SelectedCard: runs
                            }, () => {
                                this.handleAnimationEnemy(this.state.enemy1SelectedCard);
                            });
                        }
                    }
                }
            }
    
            if(this.state.enemy1SelectedCard.length === 0){
                console.log("Tidak ada rangkaian yang valid. Memilih kartu dengan nilai 3...");
    
                let selectedCard = [];
                for(const card of this.state.enemy1Hand){
                    if(enumNilai[card.value] === 3){
                        selectedCard.push(card);
                    }
                }
    
                console.log("Kartu terpilih berdasarkan nilai 3:", selectedCard);
                this.setState({
                    enemy1SelectedCard: selectedCard
                }, () => {
                    this.handleAnimationEnemy(this.state.enemy1SelectedCard);
                });
            }
        }
        // againts 1 card
        else if(this.state.thrownCards.length === 1){

        }
        // againts 2 cards pair
         else if(this.state.thrownCards.length === 2){
           // Asumsikan findPairsWithSameValue dan getNumericValue sudah didefinisikan
            const countedPairs = this.findPairsWithSameValue(this.state.enemy1Hand);
            let mayThrownPair:Card[][] = [];
            for (const pairs of countedPairs) {
                // Cek apakah salah satu dari pasangan memiliki nilai lebih besar
                let shouldAddPair = pairs.some(pair => 
                    this.getNumericValue(pair) > this.getNumericValue(this.state.thrownCards[0])
                );

                if (shouldAddPair) {
                    mayThrownPair.push(pairs);
                }
            }
            // Iterasi untuk menemukan pasangan dengan nilai terkecil
            let smallestPair = null;
            let smallestValue = Infinity;

            for (const pairs of mayThrownPair) {
                let pairValue = pairs.reduce((acc, card) => acc + this.getNumericValue(card), 0);
                if (pairValue < smallestValue) {
                    smallestValue = pairValue;
                    smallestPair = pairs;
                }
            }

            // smallestPair sekarang berisi pasangan kartu dengan nilai total terkecil
            if (smallestPair) {
                console.log("Pasangan yang dipilih untuk dibuang:", smallestPair);
                this.setState({
                    enemy1SelectedCard: smallestPair
                },()=>{
                    this.handleAnimationEnemy(this.state.enemy1SelectedCard);
                });
            } else {
                console.log("Tidak ada pasangan yang bisa dibuang");
            }

         }
         else {
            console.log("Kartu sudah dibuang. Tidak melakukan aksi.");
        }
    }
    

    turnEnemy2(){
        console.log("Memulai turnEnemy2");
    
        if(this.state.thrownCards.length === 0){
            console.log("Tidak ada kartu yang dibuang. Mencari rangkaian berurutan...");
    
            const countedRuns = this.countingRun(this.state.enemy2Hand);
            console.log("Rangkaian berurutan ditemukan:", countedRuns);
    
            if(countedRuns.length !== 0){
                for(const runs of countedRuns){
                    for(const run of runs){
                        if(enumNilai[run.value] === 3 && run.suit === 'Spades'){
                            console.log("Mengatur kartu terpilih enemy1 dengan rangkaian:", runs);
                            this.setState({
                                enemy2SelectedCard: runs
                            }, () => {
                                this.handleAnimationEnemy(this.state.enemy2SelectedCard);
                            });
                        }
                    }
                }
            }
    
            if(this.state.enemy2SelectedCard.length === 0){
                console.log("Tidak ada rangkaian yang valid. Memilih kartu dengan nilai 3...");
    
                let selectedCard = [];
                for(const card of this.state.enemy2Hand){
                    if(enumNilai[card.value] === 3){
                        selectedCard.push(card);
                    }
                }
    
                console.log("Kartu terpilih berdasarkan nilai 3:", selectedCard);
                this.setState({
                    enemy2SelectedCard: selectedCard
                }, () => {
                    this.handleAnimationEnemy(this.state.enemy2SelectedCard);
                });
            }
        } else {
            console.log("Kartu sudah dibuang. Tidak melakukan aksi.");
        }
    }

    turnEnemy3(){
        console.log("Memulai turnEnemy3");
    
        if(this.state.thrownCards.length === 0){
            console.log("Tidak ada kartu yang dibuang. Mencari rangkaian berurutan...");
    
            const countedRuns = this.countingRun(this.state.enemy3Hand);
            console.log("Rangkaian berurutan ditemukan:", countedRuns);
    
            if(countedRuns.length !== 0){
                for(const runs of countedRuns){
                    for(const run of runs){
                        if(enumNilai[run.value] === 3 && run.suit === 'Spades'){
                            console.log("Mengatur kartu terpilih enemy1 dengan rangkaian:", runs);
                            this.setState({
                                enemy3SelectedCard: runs
                            }, () => {
                                this.handleAnimationEnemy(this.state.enemy3SelectedCard);
                            });
                        }
                    }
                }
            }
    
            if(this.state.enemy3SelectedCard.length === 0){
                console.log("Tidak ada rangkaian yang valid. Memilih kartu dengan nilai 3...");
    
                let selectedCard = [];
                for(const card of this.state.enemy3Hand){
                    if(enumNilai[card.value] === 3){
                        selectedCard.push(card);
                    }
                }
    
                console.log("Kartu terpilih berdasarkan nilai 3:", selectedCard);
                this.setState({
                    enemy3SelectedCard: selectedCard
                }, () => {
                    this.handleAnimationEnemy(this.state.enemy3SelectedCard);
                });
            }
        } else {
            console.log("Kartu sudah dibuang. Tidak melakukan aksi.");
        }
    }


    getNumericValue(card:Card) {
        const valueMap:any = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, '2':15 };
        return valueMap[card.value] || parseInt(card.value, 10);
      }
      

    countingRun(arr:Card[]) {
        if (arr.length < 3) return [];

            arr.sort((a, b) => this.getNumericValue(a) - this.getNumericValue(b));

            let longestLength = 1;
            let currentSequence = [arr[0]];
            let allSequences = [];

            for (let i = 1; i < arr.length; i++) {
                if (this.getNumericValue(arr[i]) === this.getNumericValue(arr[i - 1]) + 1) {
                currentSequence.push(arr[i]);
                longestLength = Math.max(longestLength, currentSequence.length);
                } else if (this.getNumericValue(arr[i]) !== this.getNumericValue(arr[i - 1])) {
                if (currentSequence.length === longestLength) {
                    allSequences.push(currentSequence);
                }
                currentSequence = [arr[i]];
                }
            }

            // Check the last sequence
            if (currentSequence.length === longestLength) {
                allSequences.push(currentSequence);
            }

            // Only return sequences that are of the same length as the longest sequence
            return allSequences.filter(sequence => sequence.length === longestLength);
        }

        isValidRun(cards:Card[]) {
            console.log("Memeriksa run valid pada kartu:", cards);
          
            if (cards.length < 3) {
              console.log("Kartu tidak cukup untuk membentuk run.");
              return false;
            }
          
            cards.sort((a, b) => this.getNumericValue(a) - this.getNumericValue(b));
            console.log("Kartu setelah diurutkan:", cards);
          
            let consecutiveCount = 1;
          
            for (let i = 0; i < cards.length - 1; i++) {
              if (this.getNumericValue(cards[i + 1]) === this.getNumericValue(cards[i]) + 1) {
                consecutiveCount++;
                console.log(`Kartu berurutan ditemukan: ${cards[i].value}, ${cards[i+1].value}`);
                if (consecutiveCount >= 3) {
                  console.log("Run valid ditemukan.");
                  return true;
                }
              } else {
                console.log(`Kartu tidak berurutan ditemukan: ${cards[i].value}, ${cards[i+1].value}`);
                consecutiveCount = 1; // Reset hitungan jika tidak berurutan
              }
            }
          
            console.log("Tidak ada run valid yang ditemukan.");
            return false;
          }
      

    setChoosenCard = (index:number, card:Card) => {
        // Membuat salinan dari state yang ada
        let newArr = [...this.state.choosenCard];
        let mySelectedCard = [...this.state.selectedCard];
    
        // Toggle nilai di choosenCard
        newArr[index] = !newArr[index];
    
        if (newArr[index]) {
            // Jika kartu dipilih, tambahkan ke selectedCard
            mySelectedCard.push(card);
        } else {
            // Jika kartu tidak lagi dipilih, hapus dari selectedCard
            mySelectedCard = mySelectedCard.filter(obj => obj !== card);
        }
    
        // Mengupdate state
        this.setState({
            choosenCard: newArr,
            selectedCard: mySelectedCard
        }, () => {
            let isValid = false;
            console.log("Kartu yang dipilih:", this.state.selectedCard);

            // Memeriksa apakah semua kartu dalam array memiliki nilai yang sama
            const allCardsHaveSameValue = (cards:Card[]) => 
            cards.every(card => card.value === cards[0].value);

            // first start player
            if (this.state.thrownCards.length === 0) {
            const selectedCardLength = this.state.selectedCard.length;

            // Memeriksa pair, triple pair, dan fourth pair
            if (selectedCardLength >= 2 && selectedCardLength <= 4) {
                if (allCardsHaveSameValue(this.state.selectedCard)) {
                // Cek kartu 3 Spades untuk semua kombinasi valid
                isValid = this.state.selectedCard.some(card => 
                    card.suit === 'Spades' && enumNilai[card.value] === 3
                );
                }
            }
            // memeriksa jika selectedCard adalah run 
            if(selectedCardLength >= 3){
                const isValidRun = this.isValidRun(this.state.selectedCard);
                if(isValidRun){
                    isValid = this.state.selectedCard.some(card => 
                        card.suit === 'Spades' && enumNilai[card.value] === 3
                    );
                }
            }

            this.setState({
                isValidSelectedCard: isValid
            });
}

            
        });
    }
    

    renderCard(card:Card, index:number){
        const choosenCard = this.state.choosenCard;
        const zoomStyle:any = {
            transform: 'scale(1.5)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 2
        };
        return(
            
            <div ref={this.refAmmosPlayer[index]} className='col'>
                <img className='img-fluid' width={50} onClick={() => this.setChoosenCard(index, card)} style={choosenCard[index] ? zoomStyle : {}} src={imgArr[card.value + card.suit]}/>
            </div>
            
        )
    }

    handleAnimationEnemy(selectedCard:Card[]) {
        console.log("Memulai animasi untuk enemy dengan kartu terpilih:", selectedCard);
      
        const countIndex = selectedCard.length;
        for (let i = 0; i < countIndex; i++) { // Memperbaiki kondisi loop
          console.log(`Memeriksa animasi untuk kartu ke-${i}`);
      
          if (this.refTarget?.current && this.refAmmosEnemy[i]?.current) {
            console.log("refTarget dan refAmmosEnemy ada:", this.refTarget.current, this.refAmmosEnemy[i].current);
      
            const ammoRef = this.refAmmosEnemy[i].current;
      
            if (ammoRef) {
              const ammoRect = ammoRef.getBoundingClientRect();
              const targetRect = this.refTarget.current.getBoundingClientRect();
              const newOffsetX = targetRect.left - ammoRect.left + (i * 25);
              const newOffsetY = targetRect.top - ammoRect.top;
      
              console.log(`Offset untuk kartu ke-${i}: X=${newOffsetX}, Y=${newOffsetY}`);
      
              gsap.to(ammoRef, {
                x: newOffsetX,
                y: newOffsetY,
                duration: 1
              });
              setTimeout(() => {
                this.setState({
                  thrownCards: selectedCard
                }, () => {
                  const emptyArr: Card[] = [];
                  if (this.state.playTurn === 'enemy1') {
                    let remainingCards = this.state.enemy1Hand.filter(card => 
                      !this.state.thrownCards.some(thrownCard => 
                        thrownCard.suit === card.suit && thrownCard.value === card.value)
                    );
                    this.setState({
                      enemy1Hand: remainingCards,
                      enemy1SelectedCard: emptyArr, 
                      playTurn: 'enemy2'
                    },()=>{
                        this.turnEnemy2();
                    });
                  }
                  else if (this.state.playTurn === 'enemy2') {
                    let remainingCards = this.state.enemy2Hand.filter(card => 
                      !this.state.thrownCards.some(thrownCard => 
                        thrownCard.suit === card.suit && thrownCard.value === card.value)
                    );
                    this.setState({
                      enemy2Hand: remainingCards,
                      enemy2SelectedCard: emptyArr,
                      playTurn: 'player'
                    });
                  }
                  else if (this.state.playTurn === 'enemy3') {
                    let remainingCards = this.state.enemy3Hand.filter(card => 
                      !this.state.thrownCards.some(thrownCard => 
                        thrownCard.suit === card.suit && thrownCard.value === card.value)
                    );
                    this.setState({
                      enemy3Hand: remainingCards,
                      enemy3SelectedCard: emptyArr,
                      playTurn: 'enemy1'
                    },()=>{
                        this.turnEnemy1();
                    });
                  }
                });
              }, 1000);
              
              
            } else {
              console.log(`refAmmosEnemy ke-${i} adalah null atau undefined`);
            }
          } else {
            if (!this.refTarget.current) {
              console.log("refTarget.current tidak ada");
            }
            if (!this.refAmmosEnemy[i].current) {
              console.log(`refAmmosEnemy ke-${i} tidak ada`);
            }
          }
        }
      }
      

    renderEnemyCard(card:Card, index:number){
        return(
            <div ref={this.refAmmosEnemy[index]} className='d-inline-flex'>
                <img width={50} src={imgArr[card.value + card.suit]}/>
            </div>
            
        )
    }

    renderThrownCard(card:Card){
        return(
            <div className='d-inline-flex'>
                <img width={50} src={imgArr[card.value + card.suit]}/>
            </div>
        )
    }

    render(){
        const playerHand = this.state.playerHand;
        const showStartBtn = this.state.showStartBtn;
        return(
            // enemy
        <div className="container text-white" style={{minHeight:"500px"}}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Poker Vietnam</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Enemy 1</h2>
                </div>
            </div>

            <div className='row'>
                <div className='text-center'>
                    <img width={50} src={cardBackEnemyImg.src} />
                
                </div>
            </div>
            <div className='row'>
                <div className='text-center'>
                    {this.state.enemy1SelectedCard.map((card, index) => this.renderEnemyCard(card, index))}
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-start">
                    <h2>Enemy 2</h2>
                </div>

                <div className='col-md-6 text-end'>
                    <h2>Enemy 3</h2>
                </div>
            </div>

            <div className='row'>
                <div className='text-start col-md-4'>
                    <img width={50} src={cardBackEnemyImg.src} />
                    <div className='col-md-12'>
                        {this.state.enemy2SelectedCard.map((card, index) => this.renderEnemyCard(card, index))}
                    </div>
                    
                </div>
                <div className='col-md-4 d-inline-flex justify-content-center'>
                    <div ref={this.refTarget}  style={{minWidth:"50px" , minHeight:"50px"}} >
                        {this.state.thrownCards.map((card, index) => this.renderThrownCard(card))}
                    </div>
                    
                </div>

                <div className='text-end col-md-4'>
                    <img width={50} src={cardBackEnemyImg.src} />
                    <div className='col-md-12'>
                        {this.state.enemy3SelectedCard.map((card, index) => this.renderEnemyCard(card, index))}
                    </div>
                    
                </div>

            </div>

            {/*player*/}
            
            <div className='row text-center mt-md-5'>
                {playerHand.map((card, index) => this.renderCard(card, index))}
                {showStartBtn && <div className='col'> <button onClick={() => this.setShowStartBtn()} className='btn btn-primary'>Start</button> </div>}
            </div>
            {!showStartBtn && <div className='row d-flex justify-content-center mt-md-5'> <div className='col-md-auto col'>
                            <button disabled={this.state.playTurn === 'player' && this.state.isValidSelectedCard ? false : true} className='btn px-md-4 px-5 text-white btn-success' style={{borderRadius:'15px'}}>Play</button>
                        </div><div className='col-md-auto col'>
                            <button className='btn px-md-4 px-5 text-white btn-warning' style={{borderRadius:'15px'}}>Pass</button>
                        </div></div>}
        </div>

            
        );
    }
}


export {ThirteenPokerComponent}