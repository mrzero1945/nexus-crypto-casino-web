import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImg from '../resources/card.png';
import casinoImg from '../resources/casino.png';
import clockImg from '../resources/clock.png';
import smartContractImg from '../resources/smart-contract.png';
import blackJackImg from '../resources/black-jack.png'
import slotMachineImg from '../resources/slot-machine.png'
import lotteryImg from '../resources/lot-icon.png'
import lowPriceImg from '../resources/low-price.png'
import Link from 'next/link';


class NexusHome extends Component {
    render() {
        return (
            <div>
                <div className="container mt-md-5 mt-3" style={{ backgroundColor: "#191F2D" }}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 mt-3 mt-md-0 text-center">
                            <p className="text-white mt-sm-3" style={{
                                color: '#F5F8FF',
                                fontFamily: 'Roboto',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}>
                                "Step into the future of gaming with Nexus's Crypto Casino where cutting-edge technology meets the thrill of the win. Secure, fast, and filled with endless possibilities. Play now and join the digital revolution of entertainment!"
                            </p>
                            <Link href="/play">
                                <button className="btn text-white" style={{ borderRadius: "15px", background: "#59BE43" }}>
                                    Play Now
                                </button>
                            </Link>
                            
                        </div>
                        <div className="col-md-6">
                            <img src={cardImg.src} className="img-fluid" alt="Card"/>
                        </div>
                    </div>
                </div>

                <div className="container mt-md-5 mt-3">
                    <button className="btn text-white" style={{borderRadius: "15px", background: "#191F2D"}}><img className="pe-2" src={casinoImg.src} width={25}/>Casino</button>
                </div>

                <div className="container text-white mt-2 mt-md-3 pt-5 pb-5" style={{ background: "#191F2D" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-5 mx-2 mx-md-4 text-center" style={{ background: "#5D29F8" }}>
                            <img src={blackJackImg.src} className="img-fluid" alt="BlackJack" width={200}/>
                            <p>BlackJack</p>
                        </div>
                        <div className="col-md-2 col-5 mx-2 mx-md-4 text-center" style={{background: "#5D29F8"}}>
                            <img src={cardImg.src} className="img-fluid pt-md-4 pt-4" alt="Poker" width={200}/>
                            <p className="pt-md-3 pt-2">Poker</p>
                        </div>
                        <div className="col-md-2 col-5 mx-2 mx-md-4 mt-3 mt-md-0 pt-md-2 text-center" style={{background: "#5D29F8"}}>
                            <img src={slotMachineImg.src} className="img-fluid"  width={200}/>
                            <p>Slots</p>
                        </div>
                        <div className="col-md-2 col-5 mx-2 mx-md-4 mt-3 mt-md-0 pt-md-2 text-center" style={{background: "#5D29F8"}}>
                            <img src={lotteryImg.src} className="img-fluid" width={200}/>
                            <p className="px-4">Lottery</p>
                        </div>
                    </div>
                </div>
                
                <div className="container mt-5 text-white">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={clockImg.src} className="img-fluid" alt="Low Price" width={200}/> {/* Sesuaikan maxWidth sesuai kebutuhan */}
                        </div>
                        <div className="col-md-6 d-flex justify-content-start">
                            <div>
                                <p style={{ 
                                    fontFamily: 'Fugaz One',
                                    fontSize: '20px',
                                }}>
                                    Fast Transaction
                                </p>
                                <p>By utilizing blockchain technology, transaction speeds become faster and more practical.</p>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="container mt-5 text-white">
                    <div className="row align-items-center">
                        <div className="col-md-auto">
                            <img src={smartContractImg.src} className="img-fluid" alt="Smart Contract" style={{ width: '200px' }}/> 
                        </div>
                        <div className="col-md">
                            <p style={{ 
                                fontFamily: 'Fugaz One',
                                fontSize: '20px',
                                color: '#FFF',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}>
                                Fair Play
                            </p>
                            <p>We utilize smart contract technology on the blockchain to ensure fair play.</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 text-white">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={lowPriceImg.src} className="img-fluid" alt="Low Price" width={200}/> {/* Sesuaikan maxWidth sesuai kebutuhan */}
                        </div>
                        <div className="col-md-6 d-flex justify-content-start">
                            <div>
                                <p style={{ 
                                    fontFamily: 'Fugaz One',
                                    fontSize: '20px',
                                }}>
                                    Low Fees
                                </p>
                                <p>We offer low fees to players, high fees are very annoying, right?</p>
                            </div>
                        </div>
                    </div>
                </div>







    
            </div>
        );
    }
}

export { NexusHome };
