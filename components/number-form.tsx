import { Component } from "react";

class NumberForm extends Component {
    render(){
        return(
            <div className="form-group text-white">
                <label htmlFor="numberInput">Amount Stake</label>
                <input type="number" className="form-control" id="numberInput" placeholder="Enter amount" />
            </div>
        )
    }
}

export {NumberForm}