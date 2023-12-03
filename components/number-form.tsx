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

        .form-group {
            display: flex;
            align-items: center;
            position: relative;
        }

        .form-control {
            text-align: center;
            width: auto; /* Or specific width */
            padding-right: 50px; /* Adjust based on the size of $NXS */
        }
        `}
    </style>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="form-group text-white" style={{ position: 'relative' }}>
        <input type="number" className="form-control text-center no-spinner" id="numberInput" placeholder="Enter amount" />
        <span className="text-black" style={{ position: 'absolute', right: '10px', pointerEvents: 'none' }}>
            $NXS
        </span>
    </div>
</div>

</div>

        )
    }
}

export {NumberForm}