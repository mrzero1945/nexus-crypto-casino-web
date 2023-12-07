import { Component } from "react";
import { NumberForm } from "../components/number-form";
class NexusSlots extends Component{
    render(){
        return(
            <div className="container">
                <button className="btn text-white mt-md-4" style={{ justifyContent: "center", alignItems: "center", borderRadius: "30px", background: "#191F2D" }}>
                        Slot Machine
                </button>
                <div className="row mt-md-5 d-flex flex-row align-items-center justify-content-center" >
                    <div className="col-2 py-md-4" style={{backgroundColor:"#FFB000"}}>
                        <button className="btn" style={{ color: "#DA2A2A", fontFamily: "Inter", borderColor:"#FFB000", backgroundColor:"#FFFBF5", fontSize:"96px", width: '100%'}}>7</button>
                    </div>
                    <div className="col-md-2 py-md-4" style={{backgroundColor:"#FFB000"}}>
                        <button className="btn" style={{ color: "#DA2A2A", fontFamily: "Inter", borderColor:"#FFB000", backgroundColor:"#FFFBF5", fontSize:"96px", width: '100%' }}>7</button>
                    </div>
                    <div className="col-md-2 py-4" style={{backgroundColor:"#FFB000"}}>
                        <button className="btn" style={{ color: "#DA2A2A", fontFamily: "Inter", borderColor:"#FFB000", backgroundColor:"#FFFBF5", fontSize:"96px", width: '100%' }}>7</button>
                    </div>
                </div>
                <div className="row d-flex flex-row align-items-center justify-content-center" >
                    <div className="col-md-2 py-md-3 px-md-4" style={{backgroundColor: "#711DB0"}}>
                        <button className="btn text-white" style={{backgroundColor:"#59BE43"}}>Win $NXS 0</button>
                    </div>
                    <div className="col-md-2 py-md-3 px-md-4" style={{backgroundColor: "#711DB0"}}>
                        <NumberForm />
                    </div>
                    <div className="col-md-2 py-md-3 px-md-4" style={{backgroundColor: "#711DB0"}}>
                        <button className="btn text-white ms-md-3" style={{backgroundColor: "#59BE43"}}>Play</button>
                    </div>
                    
                </div>
                <button className="btn text-white mt-md-4" style={{ justifyContent: "center", alignItems: "center", borderRadius: "30px", background: "#191F2D" }}>
                        Winner List
                </button>
                <div className="row d-flex flex-row align-items-center justify-content-center">
                    <div className="col-2">
                        <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>Username</p>
                    </div>
                    <div className="col-2">
                        <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>Address</p>
                    </div>
                    <div className="col-2">
                        <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>Prize</p>
                    </div>
                </div>
                <div className="row d-flex flex-row align-items-center justify-content-center">
                    <div className="col-2">
                        <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>John Thor</p>
                    </div>
                    <div className="col-2">
                        <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>0x765...</p>
                    </div>
                    <div className="col-2">
                    <p className="text-white text-center" style={{ justifyContent: "center", alignItems: "center", background: "#191F2D" }}>1000$NXS</p>
                    </div>
                </div>


            </div>

        );
    }
}

export {NexusSlots};