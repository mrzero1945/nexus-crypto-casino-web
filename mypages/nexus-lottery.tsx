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
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>24</div>
                            <div className="text-white text-center" style={{background: "#13181E"}}>Minutes</div>
                        </div>
                        <div className="text-white mx-2 d-flex align-items-center" style={{fontSize:"40px"}}>
                            :
                        </div>
                        <div className="col-md-1">
                            <div className="text-white text-center" style={{fontSize: "40px", background: "#18332A"}}>24</div>
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
                        RESULT
                    </div>
                </div>
            </div>


                
        )
    }
}

export {NexusLottery};