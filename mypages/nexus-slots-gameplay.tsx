import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import reel0_0 from './proto-slots/reel_0/00_reel_0.png';
import reel0_1 from './proto-slots/reel_0/01_reel_0.png';
import reel0_2 from './proto-slots/reel_0/02_reel_0.png';
import reel0_3 from './proto-slots/reel_0/03_reel_0.png';
import reel0_4 from './proto-slots/reel_0/04_reel_0.png';
import reel0_5 from './proto-slots/reel_0/05_reel_0.png';
import reel0_6 from './proto-slots/reel_0/06_reel_0.png';
import reel0_7 from './proto-slots/reel_0/07_reel_0.png';
import reel1_0 from './proto-slots/reel_1/00_reel_1.png';
import reel1_1 from './proto-slots/reel_1/01_reel_1.png';
import reel1_2 from './proto-slots/reel_1/02_reel_1.png';
import reel1_3 from './proto-slots/reel_1/03_reel_1.png';
import reel1_4 from './proto-slots/reel_1/04_reel_1.png';
import reel1_5 from './proto-slots/reel_1/05_reel_1.png';
import reel1_6 from './proto-slots/reel_1/06_reel_1.png';
import reel1_7 from './proto-slots/reel_1/07_reel_1.png';
import reel2_0 from './proto-slots/reel_2/00_reel_2.png';
import reel2_1 from './proto-slots/reel_2/01_reel_2.png';
import reel2_2 from './proto-slots/reel_2/02_reel_2.png';
import reel2_3 from './proto-slots/reel_2/03_reel_2.png';
import reel2_4 from './proto-slots/reel_2/04_reel_2.png';
import reel2_5 from './proto-slots/reel_2/05_reel_2.png';
import reel2_6 from './proto-slots/reel_2/06_reel_2.png';
import reel2_7 from './proto-slots/reel_2/07_reel_2.png';



// Define the state type
interface NexusSlotsGamePlayState {
    isSpin: boolean;
    animation_slots: string[]
}

class NexusSlotsGamePlay extends React.Component<{}, NexusSlotsGamePlayState> {
    constructor(props:any) {
        super(props);
        this.state = {
            isSpin : false,
            animation_slots : []
        }
    }
    

    reel0:any = {
        0: reel0_0.src,
        1: reel0_1.src,
        2: reel0_2.src,
        3: reel0_3.src,
        4: reel0_4.src,
        5: reel0_5.src,
        6: reel0_6.src,
        7: reel0_7.src
    };
    
    reel1:any = {
        0: reel1_0.src,
        1: reel1_1.src,
        2: reel1_2.src,
        3: reel1_3.src,
        4: reel1_4.src,
        5: reel1_5.src,
        6: reel1_6.src,
        7: reel1_7.src
    };
    
    reel2:any = {
        0: reel2_0.src,
        1: reel2_1.src,
        2: reel2_2.src,
        3: reel2_3.src,
        4: reel2_4.src,
        5: reel2_5.src,
        6: reel2_6.src,
        7: reel2_7.src
    };

    animationStart = () => {
        // Set the interval to update the reels
        const intervalId = setInterval(() => {
            const randomInteger = Math.floor(Math.random() * 8);
            const randomInteger1 = Math.floor(Math.random() * 8);
            const randomInteger2 = Math.floor(Math.random() * 8);
            const randomValues = [this.reel0[randomInteger], this.reel1[randomInteger1], this.reel2[randomInteger2]];
    
            this.setState({
                animation_slots: randomValues,
                isSpin: true
            });
        }, 10); // Update every 100 milliseconds
    
        // Stop the interval after 3 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            //this.setState({ isSpin: false }); // Optionally set isSpin to false after stopping
        }, 5000); // Stop after 3000 milliseconds (3 seconds)
    }
    
    
    render() {
        return (
            <div className='container' style={{minHeight: 425}}>
                <div className='row d-flex justify-content-center mt-md-3'>
                    <div className='col-1'>
                        <img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[0] :this.reel0[0] } alt="Reel 1"/>
                    </div>
                    <div className='col-1'>
                        <img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[1] : this.reel1[0]} alt="Reel 2"/>
                    </div>
                    <div className='col-1'>
                        <img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[2] : this.reel2[0]} alt="Reel 3"/>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-md-3'>
                    <div className='col-md-1'>
                        <button onClick={() => this.animationStart()} className='btn btn-success px-md-4' style={{borderRadius: "15px"}}>
                            Spin
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export { NexusSlotsGamePlay };
