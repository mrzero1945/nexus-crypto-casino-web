import { Component } from "react";

class NumberForm extends Component {
    render(){
        return(
            <div>
            <style>
                {`
                .no-spinner::-webkit-inner-spin-button, 
                .no-spinner::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                `}
            </style>

            <div className="form-group text-white" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                
                <input type="number" className="form-control text-center no-spinner" id="numberInput" placeholder="Enter amount" />
                <span className="text-black" style={{ position: 'absolute', right: '10px', pointerEvents: 'none' }}>
                    $NXS
                </span>
            </div>

        </div>
        )
    }
}

export {NumberForm}