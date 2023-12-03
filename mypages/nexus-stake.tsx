import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import stakeImg from '../resources/stake.png'
import { NumberForm } from "../components/number-form";

class NexusStake extends Component{
    render(){
        return(
            <div className="mt-3 pb-3 container" style={{ backgroundColor: "#191F2D" }}>
                <div className="row justify-content-center text-white">
                    <div className="col-12 text-center pt-3">
                        <p className="text-white" style={{fontFamily: "Inter", fontSize: "25px", backgroundColor: "#242F38"}}>Stake Pool</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={stakeImg.src} className="img-fluid" alt="Stake" />
                    </div>
                    <div className="col-md-3 text-center mt-3 mt-md-0 ms-md-2 py-3" style={{backgroundColor: "#242F38"}}>
                        <p className="text-white">Stake $NXS and Earn $NXS</p>
                        <NumberForm />
                        <button className="my-md-3 px-md-3 my-2 btn px-5 text-white" style={{backgroundColor: "#59BE43", borderRadius: "15px"}}>Stake</button>
                        <p className="text-white">Total staked</p>
                        <p className="text-white">????</p>
                    </div>
                    <div className="col-md-2 ms-md-4 text-center py-3 mt-3 mt-md-0" style={{backgroundColor: "#242F38"}}>
                        <p className="text-white">APR</p>
                        <p className="text-white">??%</p>
                        <p className="text-white">Deposit fee</p>
                        <p className="text-white">2%</p>
                        <p className="text-white">Unstaking fee</p>
                        <p className="text-white">0 ~ 2%</p>
                    </div>
                </div>

            </div>
            


        );
    }
}

export {NexusStake}