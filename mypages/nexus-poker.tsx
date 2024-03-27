import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import chipRedImg from '../resources/assets/PNG/Chips/chipRedWhite_side.png';

import ASImg from '../resources/assets/PNG/Cards/cardClubsA.png';
import cardDiamondsA from '../resources/assets/PNG/Cards/cardDiamondsA.png';
import cardHeartsA from '../resources/assets/PNG/Cards/cardHeartsA.png';
import cardSpadesA from '../resources/assets/PNG/Cards/cardSpadesA.png';
import { NexusSmartContract } from "../smart_contract/nexus_smart_contract";



interface INexusPoker{
    bet_ammount:number;
    address:string;
}

class NexusPoker extends Component<{}, INexusPoker>{

    private bet_sc = async (bet_amount:number) => {
        
    }

    constructor(props:{}){
        super(props);
        this.state = {
            bet_ammount:0,
            address:""
        };
    }

    set_address = (address:string)=>{
        this.setState({address:address}, ()=>{
            console.log("address: ", this.state.address);
        });
    }

    private handleSubmitBetAmount = async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        if(await NexusSmartContract.is_connect_wallet(this.set_address)){
            console.log("dompet terhubung");
            await NexusSmartContract.call_poker_smart_contract(this.state.bet_ammount, 0.001);
        } else{
            console.log("wallet not connected");
        }
        // todo:call smart contract
        
    }

    private handleChangeBetAmount = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            bet_ammount:parseInt(event.target.value)
        }, ()=>{
            console.log("bet amount is: ", this.state.bet_ammount);
        });
    }

    
    render(){
        return(
            <div className='container'>
                    <div className='row d-flex justify-content-center mt-md-4'>
                    <div className="col-md-8 d-flex align-items-center justify-content-center position-relative" style={{ backgroundColor:"rgb(25,31,45)"}}>
                        {/*<img className="img-fluid position-absolute w-100 h-100" src={backgroundImg.src} alt="Deskripsi Gambar"/>*/}
                        
                        <div className="text-center">
                            <div className='row py-5'>
                                <div className='col-md-12'>
                                    <h2 className="text-white">Tien Len ( Vietnamese Poker) ( Thirteen Tienlen )</h2>
                                </div>
                                <div className='my-md-5 col-md-12 d-flex justify-content-center'>
                                    <form onSubmit={this.handleSubmitBetAmount}>
                                        <div className="col-md-10 mb-3">
                                            <label htmlFor="username" className="form-label text-white">Bet Amount</label>
                                            <input type="number" className="form-control text-center" id="username" placeholder="min 1" onChange={this.handleChangeBetAmount}/>
                                            <button className="text-white btn mt-md-2" style={{backgroundColor:"rgb(89,190,67)", borderRadius:15}}>Submit</button>
                                        </div>
                                        
                                    </form>
                                </div>
                                <div className="col-md-3">
                                    <img className="img-fluid" src={ASImg.src}/>
                                </div>
                                <div className="col-md-3">
                                    <img className="img-fluid" src={cardDiamondsA.src}/>
                                </div>
                                <div className="col-md-3">
                                    <img className="img-fluid" src={cardHeartsA.src}/>
                                </div>
                                <div className="col-md-3">
                                    <img className="img-fluid" src={cardSpadesA.src}/>
                                </div>

                            </div>
        
        
                        </div>
                    </div>
                    </div>
                    <div className="text-white container my-5">
                        <h1 className="text-center mb-3">Tiến Lên (Vietnamese Poker)</h1>
                        <div className="row">
                            <div className="col-md-6">
                            <h2>Objective</h2>
                            <p>Be the first player to get rid of all your cards.</p>

                            <h2>Number of Players</h2>
                            <p>Typically 4 players, can be played with 2, 3, or more using two decks.</p>

                            <h2>Materials</h2>
                            <p>A standard 52-card deck without Jokers or wild cards.</p>

                            <h2>Card Ranking</h2>
                            <p>Cards are ranked 2, Ace, King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3. Suits ranked Hearts, Diamonds, Clubs, Spades. 2 of Hearts highest, 3 of Spades lowest.</p>

                            <h2>Setup</h2>
                            <p>Random dealer first game, subsequent games dealer is the loser of the previous game. Each player gets 13 cards.</p>
                            </div>
                            <div className="col-md-6">
                            <h2>Gameplay</h2>
                            <p>Player with the 3 of Spades starts the first game, winner of previous game starts subsequent games. Players must beat the played card or pass.</p>

                            <h2>Legal Combinations</h2>
                            <p>Single Card, Pair, Triple, Four of a Kind, Sequence, Double Sequence. Combinations beaten by stronger of the same type.</p>

                            <h2>Special Rules</h2>
                            <p>"Bombs" or "two-bombs" can beat single twos or sets of twos. Four of a kind beats single two; sequences beat pairs or triples of twos.</p>

                            <h2>End of Game</h2>
                            <p>The game ends when only one player has cards left. That player may owe a stake to each of the other players.</p>

                            <p className="font-weight-bold">Tiến Lên is often played for money, and stakes can be high among serious players.</p>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}

export {NexusPoker};