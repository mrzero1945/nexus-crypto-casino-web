import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import pokerImg from '../resources/card.png';
import lotteryImg from '../resources/lot-icon-2.png';
import slotImg from '../resources/slot-machine-2.png';
import Link from 'next/link';
import blackJackImg from '../resources/black-jack2.png'



class NexusPlay extends Component {
    render(){
        return(
            <div className="container text-white mt-md-5">
                <button className="btn text-white my-3 my-md-0"  style={{background: "#191F2D"}}>Game list</button>
                <div className="row mt-md-3">
                    
                    <div className="col-md-3 col-6">
                        <img className="img-fluid" src={blackJackImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>BlackJack</p>
                        <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
                            <Link href="/blackjack" passHref>
                                <button className="btn text-white px-5 px-md-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                            </Link>
                        </div>
                    </div>
                    

                    <div className="col-md-3 col-6">
                        <img className="img-fluid " src={pokerImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>Poker</p>
                        <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
                            <Link href="/poker" passHref>
                                <button className="btn text-white px-md-5 px-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <img className="img-fluid " src={slotImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>Slot Machine</p>
                        <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
                            <Link href="/slots" passHref>
                                <button className="btn text-white px-md-5 px-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className="img-fluid" src={lotteryImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>Lottery</p>
                        <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
                            <Link href="/lottery" passHref>
                                <button className="btn text-white px-md-5 px-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export {NexusPlay};