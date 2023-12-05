import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import pokerImg from '../resources/card.png';
import lotteryImg from '../resources/lot-icon-2.png';
import slotImg from '../resources/slot-machine-2.png';

class NexusPlay extends Component {
    render(){
        return(
            <div className="container text-white mt-md-5">
                <button className="btn text-white"  style={{background: "#191F2D"}}>Game list</button>
                <div className="row mt-md-3">
                    <div className="col-md-4">
                        <img className="img-fluid" src={lotteryImg.src} style={{background: "#5D29F8"}} />
                        
                        <p className="text-center" style={{background: "#191F2D"}}>Poker</p>
                        <div className="d-flex flex-column align-items-center">
                            <button className="btn text-white px-md-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid " src={pokerImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>Poker</p>
                        <div className="d-flex flex-column align-items-center">
                            <button className="btn text-white px-md-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid " src={slotImg.src} style={{background: "#5D29F8"}} />
                        <p className="text-center" style={{background: "#191F2D"}}>Poker</p>
                        <div className="d-flex flex-column align-items-center">
                            <button className="btn text-white px-md-5" style={{background: "#59BE43", borderRadius: "15px"}}>Play</button>
                        </div>
                    </div>


                    </div>
                </div>
        );
    }
}

export {NexusPlay};