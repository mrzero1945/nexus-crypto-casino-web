import React, { useRef, useState, useEffect, RefObject } from 'react';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';


class Card {
  suit: string;
  value: string;

  constructor(suit: string, value: string) {
      this.suit = suit;
      this.value = value;
  }
}



interface MainProps{
  img:string;
  isButton?:boolean;
  toggle:boolean;
  setToggle: (value: boolean) => void;
  refTarget: RefObject<HTMLDivElement>;
  card?: Card
  selectedCard?:Card[]
  setSelectedCard?: (value: Card[], another?:boolean) => void;
}

const ImageTransition: React.FC<MainProps> = ({ img = "Teks Animasi", isButton = false, toggle, setToggle, refTarget, card, selectedCard, setSelectedCard}) => {
  const refAmmo = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [choosenCard, setChoosenCard] = useState(false);

        const zoomStyle:any = {
            transform: 'scale(1.5)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 2
        };

        useEffect(() => {
          //if(selectedCard){
            //for (const card of selectedCard) {
              //console.log('selected card:', card.suit, card.value);
              //setSelectedCard(myCard);
            //}
          //}
          // Kode di sini akan dijalankan setelah state diperbarui
          //console.log("nilai dari use efek", choosenCard);

          if(choosenCard && !toggle){
            if (card && setSelectedCard && selectedCard && choosenCard) {
              console.log("control flow 1, dijalankan")
              const myCard: Card[] = [...selectedCard,card];
              //setSelectedCard(myCard);
              
          
              
                const valueOrder = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];
                const suitOrder = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
          
                  myCard.sort((a, b) => {
                  let valueComparison = valueOrder.indexOf(a.value) - valueOrder.indexOf(b.value);
          
                  if (valueComparison !== 0) {
                    return valueComparison;
                  }
          
                  return suitOrder.indexOf(a.suit) - suitOrder.indexOf(b.suit);
                });
                setSelectedCard(myCard)
              }  
          }
          else if(!choosenCard && !toggle) {
            console.log("control flow 2 dijalankan")
            if(card && selectedCard && setSelectedCard) {
                        const myCard: Card[] = [];
                        myCard.push(card);
                    
                        setSelectedCard(myCard, true);
            }
          }
          else if(toggle && choosenCard){
            console.log("animasi dijalankan")
            if (refAmmo.current && refTarget.current && toggle) {
              console.log('Kedua ref ada:', refAmmo.current, refTarget.current);
              const ammoRect = refAmmo.current.getBoundingClientRect();
              const targetRect = refTarget.current.getBoundingClientRect();
          
              const newOffsetX = targetRect.left - ammoRect.left;
              const newOffsetY = targetRect.top - ammoRect.top;
          
              console.log('Offset X:', newOffsetX, 'Offset Y:', newOffsetY);
          
              gsap.to(refAmmo.current, {
                x: newOffsetX,
                y: newOffsetY,
                duration: 1
              });
            } else {
              if (!refAmmo.current) {
                // console.log('refAmmo.current tidak ada');
              }
              if (!refTarget.current) {
                console.log('refTarget.current tidak ada');
              }
            }
          }
        }, [choosenCard, toggle]);

       
  

        const handleCardChanges = async () => {
          setChoosenCard(!choosenCard);// nilai awal adalah false dan di set ke true
          // log memprint false walau sudah di set ke true
          
          
             
            
          
        
          
        };
        


  const animation = useSpring({
    from: { opacity: 0, transform: 'translate(0px, 0px)' },
    to: {
      opacity: 1,
      transform: `translate(${toggle ? offsetX : 0}px, ${toggle ? offsetY : 0}px)`
    }
  });

  // Gabungkan gaya animasi dan zoomStyle jika choosenCard adalah true
  const combinedStyle = choosenCard ? { ...animation, ...zoomStyle } : animation;

 

  if(isButton === true) {
    return(
    <button className="col-12 btn btn-primary mt-3" onClick={() => setToggle(!toggle)}>
        Trigger Animasi {toggle.toString()}
      </button>
    );
  }

  return (
      <div ref={choosenCard ? refAmmo : null} className="col-2 py-3 mt-md-0 col-md py-md-3 d-inline-flex justify-content-center">
        <animated.img className="img-fluid" onClick={() => handleCardChanges()}  src={img} style={combinedStyle} /> {/* Menggunakan prop 'text' */}
      </div>
  );
}

export { ImageTransition };
