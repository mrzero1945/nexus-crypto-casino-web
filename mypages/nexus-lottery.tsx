import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class NexusLottery extends Component{
    render(){
        return(
            <div className="container mt-md-5 py-md-5">
                <div className="row">
                    <div className="text-white text-center">Next Draw in</div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-1">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>24</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Hours</div>
                        </div>
                        <div className="text-white mx-2 d-flex align-items-center" style={{fontSize:"40px"}}>
                            :
                        </div>
                        <div className="col-md-1">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>00</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Minutes</div>
                        </div>
                        <div className="text-white mx-2 d-flex align-items-center" style={{fontSize:"40px"}}>
                            :
                        </div>
                        <div className="col-md-1">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>00</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Seconds</div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-md-4">
                    <button className="text-center col-md-2 py-md-2 text-black" style={{background: "linear-gradient(180deg, #DB841F 0%, rgba(214, 129, 28, 0.74) 20%, rgba(209, 126, 25, 0.49) 40%, rgba(209, 126, 25, 0.49) 60%, rgba(207, 124, 24, 0.40) 97.56%, rgba(200, 119, 19, 0.00) 100%)", borderWidth:"0px"}}>Buy Ticket</button>
                </div>

                <div className="row text-white mt-5 py-2" >
                    <div className="col-md-2">
                        MY TICKET
                    </div>
                    <div className="col-md-2">
                        RESULT
                    </div>
                    <div className="col-md-2">
                        $10K WINNER
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-white mt-md-5 py-4" style={{background: "#1F2730"}}>You have no ticket!</div>
                    <div className="col-md-6 text-white d-flex mt-md-5 justify-content-end align-items-center" style={{background: "#1F2730"}}>
                        <button className="btn" style={{borderRadius: "5px", background: "#09EF1D"}}>
                        Buy ticket now!
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 my-md-3" style={{color: "#09D02C"}}>
                        HOW TO PLAY
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 py-md-3" style={{background: "#1F2730"}}>
                        <button className="text-white btn" style={{background: "#E08A00", fontFamily:"Inter"}}>
                            STEP 1
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Buy Tickets</p>
                        <p className="text-white">Buy ticket with <span style={{color: "#09D02C"}}>2$</span>, and choose numbers for ticket.</p>
                    </div>

                    <div className="col-md-3 py-md-3 ms-md-5" style={{background: "#1F2730"}}>
                        <button className="text-white btn" style={{background: "#5800AA", fontFamily:"Inter"}}>
                            STEP 2
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Wait For The Draw</p>
                        <p className="text-white">Wait for the draw at <span style={{color: "#09D02C"}}>03:00 UTC+0</span> daily.</p>
                    </div>

                    <div className="col-md-3 py-md-3 ms-md-5" style={{background: "#1F2730"}}>
                        <button className="text-black btn" style={{background: "#09EF1D", fontFamily:"Inter"}}>
                            STEP 3
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Check For Prizes</p>
                        <p className="text-white">Once the draw is over, come back to <span style={{color: "#09D02C"}}>this page</span> and check your prize.</p>
                    </div>
                </div>

                <div className="row mt-md-5">
                    <div className="col-md-12 text-center text-white py-md-5 px-md-5" style={{background: "#1F2730"}}>
                        <p>All six numbers matched: $100,000 prize. If there are more than one winners for the round, all winners will share the prize equally.
If you redeem a coupon and win the last four prizes($2), you will get another coupon for the next day.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 ps-md-5" style={{background: "#1F2730"}}>
                        <p style={{color: "#09D02C"}}>Lottery Instructions</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-white pb-md-4 ps-md-5" style={{background: "#1F2730"}}>
                        <p>A provably fair algorithm is used to draw the lottery prizes.<br/>
                        Prizes are drawn at 03:00 UTC+0 every day.<br/>
                        You can buy a ticket for $2.<br/>
                        The sale of tickets stops at 02:55 UTC+0 every day.<br/>
                        The player chooses six numbers for each ticket, the first five are from 1 to 49, and the last one is from 1 to 18.<br/>
                        You can choose numbers manually or automatically.<br/>
                        Order of the six numbers does not matter.</p>
                        <button className="btn" style={{background: "#09EF1D"}}>
                        Provably Fair
                        </button>
                    </div>
                </div>
            </div>


                
        )
    }
}

export {NexusLottery};