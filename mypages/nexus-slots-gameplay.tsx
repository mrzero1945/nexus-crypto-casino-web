import React, { useRef, useEffect } from 'react';

import reel0_0 from './proto-slots/reel_0/00_reel_0.png';
import reel0_1 from './proto-slots/reel_0/01_reel_0.png';
import reel0_2 from './proto-slots/reel_0/02_reel_0.png';
import reel0_3 from './proto-slots/reel_0/03_reel_0.png';
import reel0_4 from './proto-slots/reel_0/04_reel_0.png';
import reel0_5 from './proto-slots/reel_0/05_reel_0.png';
import reel0_6 from './proto-slots/reel_0/06_reel_0.png';
import reel0_7 from './proto-slots/reel_0/07_reel_0.png';
import reel1_0 from './proto-slots/reel_1/00_reel_1.png';
import reel1_1 from './proto-slots/reel_1/01_reel_1.png';
import reel1_2 from './proto-slots/reel_1/02_reel_1.png';
import reel1_3 from './proto-slots/reel_1/03_reel_1.png';
import reel1_4 from './proto-slots/reel_1/04_reel_1.png';
import reel1_5 from './proto-slots/reel_1/05_reel_1.png';
import reel1_6 from './proto-slots/reel_1/06_reel_1.png';
import reel1_7 from './proto-slots/reel_1/07_reel_1.png';
import reel2_0 from './proto-slots/reel_2/00_reel_2.png';
import reel2_1 from './proto-slots/reel_2/01_reel_2.png';
import reel2_2 from './proto-slots/reel_2/02_reel_2.png';
import reel2_3 from './proto-slots/reel_2/03_reel_2.png';
import reel2_4 from './proto-slots/reel_2/04_reel_2.png';
import reel2_5 from './proto-slots/reel_2/05_reel_2.png';
import reel2_6 from './proto-slots/reel_2/06_reel_2.png';
import reel2_7 from './proto-slots/reel_2/07_reel_2.png';
import Web3 from 'web3';


async function approveERC20() {
    const web3 = new Web3(window.ethereum);
    const tokenContractAddress = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd'; // Alamat kontrak ERC20
    const nexusContractAddress = '0x79e57a14716ED40e585121809b8c630a4C0d2356'; // Alamat kontrak NexusTesting
    const tokenABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    const tokenContract = new web3.eth.Contract(tokenABI, tokenContractAddress);

    const amountToApprove = web3.utils.toWei('100', 'ether'); // Contoh jumlah untuk di-approve
    const fromAddress = window.ethereum.selectedAddress; // Alamat pengguna

    try {
        const approveResult = await tokenContract.methods.approve(nexusContractAddress, amountToApprove).send({ from: fromAddress });
        console.log('Token approved:', approveResult);
    } catch (error) {
        console.error('Error in approving token:', error);
    }
}

// Fungsi untuk memanggil smart contract
async function callSmartContract() {
    try{
        await approveERC20();
        const web3 = new Web3(window.ethereum); // Menggunakan provider dari wallet
        const contractAddress = '0x79e57a14716ED40e585121809b8c630a4C0d2356';
        const contractABI =    [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256[3]",
                "name": "randomNumbers",
                "type": "uint256[3]"
              }
            ],
            "name": "DepositMade",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "tokenContract",
            "outputs": [
              {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "randomThree",
            "outputs": [
              {
                "internalType": "uint256[3]",
                "name": "",
                "type": "uint256[3]"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "deposit",
            "outputs": [
              {
                "internalType": "uint256[3]",
                "name": "",
                "type": "uint256[3]"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]// ABI dari kontrak Anda

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Memanggil method dari kontrak
       // Memanggil method dari kontrak
       const amountToDeposit = web3.utils.toWei('1', 'ether'); // Contoh jumlah deposit

        contract.methods.deposit(amountToDeposit).send({ from: window.ethereum.selectedAddress })
            .on('transactionHash', (hash) => {
                console.log('Transaction Hash:', hash);
            })
            .on('receipt', (receipt) => {
                console.log('Transaction Receipt:', receipt);
                if(receipt.events){
                    const depositEvent = receipt.events.DepositMade;
                if (depositEvent) {
                    console.log('Deposit Made Event:', depositEvent.returnValues.randomNumbers);
                }
                }
            })
            .on('error', console.error);
    } catch(error){
        console.error("Error calling the smart contract:", error);
    }
    

}








// Define the state type
interface NexusSlotsGamePlayState {
    isSpin: boolean;
    animation_slots: string[];
    random_reels: number[];
    bet_ammount: number;
    game_start: boolean;
}

class NexusSlotsGamePlay extends React.Component<{}, NexusSlotsGamePlayState> {
    constructor(props:any) {
        super(props);
        this.state = {
            isSpin : false,
            animation_slots : [],
            random_reels: [],
            bet_ammount: 0, 
            game_start: false
        }
    }
    

    reel0:any = {
        0: reel0_0.src,
        1: reel0_1.src,
        2: reel0_2.src,
        3: reel0_3.src,
        4: reel0_4.src,
        5: reel0_5.src,
        6: reel0_6.src,
        7: reel0_7.src
    };
    
    reel1:any = {
        0: reel1_0.src,
        1: reel1_1.src,
        2: reel1_2.src,
        3: reel1_3.src,
        4: reel1_4.src,
        5: reel1_5.src,
        6: reel1_6.src,
        7: reel1_7.src
    };
    
    reel2:any = {
        0: reel2_0.src,
        1: reel2_1.src,
        2: reel2_2.src,
        3: reel2_3.src,
        4: reel2_4.src,
        5: reel2_5.src,
        6: reel2_6.src,
        7: reel2_7.src
    };

    postSlotsDecision = async ()=>{
        const url_route = 'https://zero.serveo.net/slots_start';
        const data = {
            player_address: ''
        }
        try{
            const response = await fetch(url_route, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            // result json
        } catch(error){
            console.error('Error in making request:',error);
        }
    }

    animationStart = () => {
        // Set the interval to update the reels
        const intervalId = setInterval(() => {
            const randomInteger = Math.floor(Math.random() * 8);
            const randomInteger1 = Math.floor(Math.random() * 8);
            const randomInteger2 = Math.floor(Math.random() * 8);
            const randomValues = [this.reel0[randomInteger], this.reel1[randomInteger1], this.reel2[randomInteger2]];
    
            this.setState({
                animation_slots: randomValues,
                isSpin: true
            });
        }, 10); // Update every 100 milliseconds
    
        // Stop the interval after 3 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            //this.setState({ isSpin: false }); // Optionally set isSpin to false after stopping
        }, 5000); // Stop after 3000 milliseconds (3 seconds)
        this.setState({

        });
    }

    handleInputChange = (event:any) => {
        //setBetAmount(event.target.value);
        this.setState({
            bet_ammount: event.target.value
        });
      };
    
    handleSubmit = (event:any) => {
        event.preventDefault();
        // Handle the submission logic here
        console.log('Bet Amount:', this.state.bet_ammount);
      };

    handle_call_smart_contract = async () => {
       await callSmartContract();
    }
    
    
    render() {
        return (
            <div className='container' style={{minHeight: 500}}>
                <div className="container">
                    <div className="row justify-content-center text-white mt-md-3">
                        <div className="col-md-3">
                        <form onSubmit={this.handleSubmit} className="form-group">
                            <label htmlFor="betAmount">Bet ammount</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="betAmount" 
                            value={this.state.bet_ammount} 
                            onChange={this.handleInputChange} 
                            placeholder="Enter bet amount" 
                            />
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
              
                <div className='row d-flex justify-content-center mt-md-3'>
                    <div className='col-1'>
                    {this.state.game_start &&<img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[0] :this.reel0[0] } alt="Reel 1"/>}
                    </div>
                    <div className='col-1'>
                        {this.state.game_start && <img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[1] : this.reel1[0]} alt="Reel 2"/>}
                    </div>
                    <div className='col-1'>
                       {this.state.game_start && <img className='img-fluid' src={this.state.isSpin ? this.state.animation_slots[2] : this.reel2[0]} alt="Reel 3"/>}
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-md-3'>
                    <div className='col-md-1'>
                       {this.state.game_start && <button onClick={() => this.animationStart()} className='btn btn-success px-md-4' style={{borderRadius: "15px"}}>
                            Spin
                        </button>}
                    </div>
                    
                </div>
                <button onClick={()=> this.handle_call_smart_contract()}>Call Contract</button>
            </div>
        );
    }
}

export { NexusSlotsGamePlay };
