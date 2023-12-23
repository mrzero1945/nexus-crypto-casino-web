import React, { useRef, useState, useEffect, RefObject } from 'react';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';

interface MainProps{
  img:string;
  isTarget:boolean;
  isButton:boolean;
  toggle:boolean;
  setToggle: (value: boolean) => void;
  refTarget: RefObject<HTMLDivElement>;
}

const ImageTransition: React.FC<MainProps> = ({ img = "Teks Animasi", isTarget= false, isButton = false, toggle, setToggle, refTarget}) => {
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
          console.log('useEffect dijalankan');
        
          if (refAmmo.current && refTarget.current) {
            console.log('Kedua ref ada:', refAmmo.current, refTarget.current);
        
            const ammoRect = refAmmo.current.getBoundingClientRect();
            const targetRect = refTarget.current.getBoundingClientRect();
        
            const newOffsetX = targetRect.left - ammoRect.left;
            const newOffsetY = targetRect.top - ammoRect.top;
        
            console.log('Offset X:', newOffsetX, 'Offset Y:', newOffsetY);
        
            // Animasi menggunakan GSAP
            gsap.to(refAmmo.current, {
              x: newOffsetX,
              y: newOffsetY,
              duration: 1 // Durasi animasi dalam detik
            });
          } else {
            if (!refAmmo.current) {
              //console.log('refAmmo.current tidak ada');
            }
            if (!refTarget.current) {
              console.log('refTarget.current tidak ada');
            }
          }
        }, [toggle]); // Dependensi pada 'toggle'
        


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
      <div ref={choosenCard ? refAmmo : null} className="col py-md-3 d-inline-flex justify-content-center">
        <animated.img className="img-fluid" onClick={() => setChoosenCard(!choosenCard)}  src={img} style={combinedStyle} /> {/* Menggunakan prop 'text' */}
      </div>
  );
}

export { ImageTransition };
