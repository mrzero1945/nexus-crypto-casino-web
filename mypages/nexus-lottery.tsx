import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountDownTimer } from "../components/time-countdown";


interface ClockTime {
    time:Date;
    Hours:number;
    minutes:number;
    seconds:number;
}


class NexusLottery extends Component<{},ClockTime>{
    constructor(props:any){
        super(props);
            this.state = {
               time : new Date,
               Hours: 0,
               minutes:0,
               seconds:0,

            };
        
    }

    componentDidMount(): void {
        this.setState({
            Hours: this.state.time.getHours(),
            minutes: this.state.time.getMinutes(),
            seconds: this.state.time.getSeconds()
        });
    }

    render(){
        return(
            <div className="container mt-md-5 py-md-5 mt-4">
                
                <div className="row mb-4">
                    <div className="text-white text-center">Next Draw in</div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-1 col-2">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>{this.state.Hours}</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Hours</div>
                        </div>
                        <div className="text-white mx-2 d-flex align-items-center" style={{fontSize:"40px"}}>
                            :
                        </div>
                        <div className="col-md-1 col-2">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>{this.state.minutes}</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Minutes</div>
                        </div>
                        <div className="text-white mx-2 d-flex align-items-center" style={{fontSize:"40px"}}>
                            :
                        </div>
                        <div className="col-md-1 col-2">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>{this.state.seconds}</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Seconds</div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-3 mt-md-4">
                    <button className="text-center col-4 col-md-2 py-2  py-md-2 text-black" style={{background: "linear-gradient(180deg, #DB841F 0%, rgba(214, 129, 28, 0.74) 20%, rgba(209, 126, 25, 0.49) 40%, rgba(209, 126, 25, 0.49) 60%, rgba(207, 124, 24, 0.40) 97.56%, rgba(200, 119, 19, 0.00) 100%)", borderWidth:"0px"}}>Buy Ticket</button>
                </div>

                <div className="row text-white mt-5 py-2" >
                    <div className="col-md-2 col-4">
                        MY TICKET
                    </div>
                    <div className="col-md-2 col-3">
                        RESULT
                    </div>
                    <div className="col-md-2 col-5">
                        $10K WINNER
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-6 text-white mt-md-2 py-4" style={{background: "#1F2730"}}>You have no ticket!</div>
                    <div className="col-md-6 col-6 text-white d-flex mt-md-2 justify-content-end align-items-center" style={{background: "#1F2730"}}>
                        <button className="btn" style={{borderRadius: "5px", background: "#09EF1D"}}>
                        Buy ticket now!
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 ms-2 ms-md-0 col-5 my-2 my-md-3" style={{color: "#09D02C"}}>
                        HOW TO PLAY
                    </div>
                </div>
                <div className="row mx-2 mx-md-0">
                    <div className="col-md-3 col-12 mb-4 py-3 py-md-3" style={{background: "#1F2730"}}>
                        <button className="text-white btn" style={{background: "#E08A00", fontFamily:"Inter"}}>
                            STEP 1
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Buy Tickets</p>
                        <p className="text-white">Buy ticket with <span style={{color: "#09D02C"}}>2$</span>, and choose numbers for ticket.</p>
                    </div>

                    <div className="col-md-3 col-12 py-3 mb-4 py-md-3 ms-md-5" style={{background: "#1F2730"}}>
                        <button className="text-white btn" style={{background: "#5800AA", fontFamily:"Inter"}}>
                            STEP 2
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Wait For The Draw</p>
                        <p className="text-white">Wait for the draw at <span style={{color: "#09D02C"}}>03:00 UTC+0</span> daily.</p>
                    </div>

                    <div className="col-md-3 py-md-3 ms-md-5 col-12 py-3 mb-4" style={{background: "#1F2730"}}>
                        <button className="text-black btn" style={{background: "#09EF1D", fontFamily:"Inter"}}>
                            STEP 3
                        </button> 
                        <p className="text-white mt-md-3" style={{fontFamily: "Inter"}}>Check For Prizes</p>
                        <p className="text-white">Once the draw is over, come back to <span style={{color: "#09D02C"}}>this page</span> and check your prize.</p>
                    </div>
                </div>

                <div className="row mt-md-5 mx-2 mx-md-0">
                    <div className="col-md-12 col-12 py-3 mb-4 px-4 text-center text-white py-md-5 px-md-5" style={{background: "#1F2730"}}>
                        <p>All six numbers matched: $100,000 prize. If there are more than one winners for the round, all winners will share the prize equally.
If you redeem a coupon and win the last four prizes($2), you will get another coupon for the next day.</p>
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-12 ps-md-5 pt-3" style={{background: "#1F2730"}}>
                        <p style={{color: "#09D02C"}}>Lottery Instructions</p>
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-12 text-white pb-md-4 ps-md-5 pb-3 mb-4" style={{background: "#1F2730"}}>
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

                <div className="row my-md-3 mb-4">
                    <div className="col-md-2 ms-4 ms-md-3 col-5 d-flex align-items-center justify-content-center" style={{background: "#1F2730", height: '100%'}}>
                        <p className="mt-md-3 mt-2 mt-md-o" style={{color: "#09D02C"}}>10 WAYS TO WIN</p>
                    </div>
                </div>
                <div className="row mx-2 mx-md-0 text-white"  style={{background: "#1F2730"}}>
                    <div className="col-md-6 col-6 pt-3 pt-md-5 text-center" >
                        <p>Matches</p>
                    </div>
                    <div className="col-md-5 col-6 pt-md-5  pt-3  d-flex justify-content-center" style={{background: "#1F2730"}}>
                        <p>Prize</p>
                    </div>
                </div>
                <div className="row  mx-md-0 px-md-5 mx-2 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7  py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <p className="text-white me-md-3 me-2 mt-3 mt-md-2" style={{fontSize: "20px"}}>+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="col-md-5 col-3 py-md-3  pt-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p style={{color: "#5AC015"}}>$10000</p>
                    </div>
                </div>

                <div className="row px-md-5 mx-2 mx-md-0 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-md-5 col-3 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$5000</p>
                    </div>
                </div>

                <div className="row mx-md-0 mx-2 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <p className="text-white me-2 mt-3 me-md-3 mt-md-2" style={{fontSize: "20px"}}>+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$500</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$50</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <p className="text-white me-2 mt-3 me-md-3 mt-md-2" style={{fontSize: "20px"}}>+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$50</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$4</p>
                    </div>
                </div>

                <div className="row mx-md-0 mx-2 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <p className="text-white me-md-3 mt-md-2 me-2 mt-3" style={{fontSize: "20px"}}>+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$2</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$2</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg className="me-md-3 me-2" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#D9D9D9"/>
                        </svg>
                        <p className="text-white me-md-3 me-2 mt-3 mt-md-2" style={{fontSize: "20px"}}>+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$2</p>
                    </div>
                </div>

                <div className="row mx-2 mx-md-0 px-md-5 d-flex justify-content-center pb-5 pb-md-5" style={{background: "#1F2730"}}>
                    <div className="col-md-5 col-7 mt-md-3 py-md-3 d-flex justify-content-center align-items-center me-md-5" style={{background: "#242F38"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <ellipse cx="9.5" cy="8" rx="9" ry="8" fill="#09D02C"/>
                        </svg>
                    </div>

                    <div className="mt-md-3 col-3 col-md-5 py-md-3 d-flex justify-content-center align-items-center" style={{background: "#242F38"}}>
                        <p className="text-white pt-3">$2</p>
                    </div>
                </div>

            </div>



                
        )
    }
}

export {NexusLottery};