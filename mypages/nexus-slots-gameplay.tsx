import React, { useRef, useEffect } from 'react';
import { NexusFormChat } from '../components/nexus-chat-form';
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
import real_reel_1 from './proto-slots/real_reel/orange_1.png';
import real_reel_2 from './proto-slots/real_reel/banana_2.png';
import real_reel_3 from './proto-slots/real_reel/pear_3.png';
import real_reel_4 from './proto-slots/real_reel/apple_4.png';
import { NexusSmartContract } from '../smart_contract/nexus_smart_contract';

let web3:any;
if(typeof window !== "undefined" && window.ethereum){
  web3 = new Web3(window.ethereum)
}

const real_reels:any = {
  1 : real_reel_1.src,
  2 : real_reel_2.src,
  3 : real_reel_3.src,
  4 : real_reel_4.src
}


async function approveERC20() {
    const web3 = new Web3(window.ethereum);
    const tokenContractAddress = NexusSmartContract.usdt_token_addr; // Alamat kontrak ERC20
    const nexusContractAddress = NexusSmartContract.slots_bet_contract_addr; // Alamat kontrak NexusTesting
    const tokenABI = NexusSmartContract.usdt_abi;
    const tokenContract = new web3.eth.Contract(tokenABI, tokenContractAddress);

    const amountToApprove = web3.utils.toWei('9999999999', 'ether'); // Contoh jumlah untuk di-approve
    const fromAddress = window.ethereum.selectedAddress; // Alamat pengguna

    try {
        const approveResult = await tokenContract.methods.approve(nexusContractAddress, amountToApprove).send({ from: fromAddress });
        console.log('Token approved:', approveResult);
    } catch (error) {
        console.error('Error in approving token:', error);
    }
}

async function checkApproveERC20(amount:number, animationStart:() => void, setRealReels:(src:string[]) => void, animationStop:() => void){
  const web3 = new Web3(window.ethereum);
  const contractAddress = NexusSmartContract.slots_bet_contract_addr;
  const contractABI = NexusSmartContract.slots_bet_abi;
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const amountToDeposit = web3.utils.toWei(amount.toString(), 'ether'); // Contoh jumlah deposit
  try {
    const result = await contract.methods.isAllowanceSufficient(amountToDeposit).call({from: window.ethereum.selectedAddress});
    console.log("nilai hasil adalah");
    console.log("Allowance Sufficient:", result);
    if(result) {
        // Logika jika allowance cukup
        callSmartContract(amount, animationStart, setRealReels, animationStop);
    } else {
      approveERC20()
        // Logika jika allowance tidak cukup
    }
  } catch (error) {
      console.error("Error:", error);
  }
  

}

// Fungsi untuk memanggil smart contract
async function callSmartContract(amount:number, animationStart:() => void, setRealReels:(src:string[]) => void, animationStop:() => void) {
    try{
        const web3 = new Web3(window.ethereum); // Menggunakan provider dari wallet
        const contractAddress = NexusSmartContract.slots_bet_contract_addr;
        const contractABI =   NexusSmartContract.slots_bet_abi// ABI dari kontrak Anda

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Memanggil method dari kontrak
       // Memanggil method dari kontrak
       const amountToDeposit = web3.utils.toWei(amount.toString(), 'ether'); // Contoh jumlah deposit
       


        contract.methods.deposit(amountToDeposit).send({ from: window.ethereum.selectedAddress })
            .on('transactionHash', (hash) => {
              animationStart();
                console.log('Transaction Hash:', hash);
            })
            .on('receipt', (receipt) => {
                console.log('Transaction Receipt:', receipt);
                if(receipt.events){
                    const depositEvent:any = receipt.events.DepositMade;
                if (depositEvent) {
                    console.log('Deposit Made Event:', depositEvent.returnValues.randomNumbers.toString());
                    animationStop();
                    const the_real_reels = depositEvent.returnValues.randomNumbers.toString();
                    const arr_real_reels = the_real_reels.split(','); // Sudah berupa array string
                    console.log(arr_real_reels);
                    let src_arr:string[] = [];
                    for(const reel of arr_real_reels){
                      src_arr.push(real_reels[reel]);
                    }
                    setRealReels(src_arr); // Memasukkan array string ke fungsi setRealReels

                  
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
    real_reels:string[]
    bet_amount: number;
    game_start: boolean;
    is_wallet_connected: boolean;
}

class NexusSlotsGamePlay extends React.Component<{}, NexusSlotsGamePlayState> {
    constructor(props:any) {
        super(props);
        this.state = {
            isSpin : false,
            animation_slots : [],
            real_reels : [real_reels['1'],real_reels['1'],real_reels['1']],
            bet_amount: 0, 
            game_start: false,
            is_wallet_connected: false
        }
    }

    private set_random_reels = (randomNumber:string[])=>{
      this.setState({
        animation_slots : randomNumber
      });
    }

    

    intervalId:any; // Deklarasi properti intervalId
    animationStart = () => {
      // Set the interval to update the reels
      this.intervalId = setInterval(() => {
          const randomInteger = Math.floor(Math.random() * 8);
          const randomInteger1 = Math.floor(Math.random() * 8);
          const randomInteger2 = Math.floor(Math.random() * 8);
          const randomValues = [this.reel0[randomInteger], this.reel1[randomInteger1], this.reel2[randomInteger2]];

          this.setState({
              animation_slots: randomValues,
              isSpin: true
          });
      }, 10); // Update every 10 milliseconds
  }
  animationStop = () => {
    // Stop the interval
    clearInterval(this.intervalId);
    this.setState({ isSpin: false }); // Optionally set isSpin to false after stopping
}

setRealReels = (real_reels:string[])=> {
  this.setState({
    real_reels:real_reels
  });
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

   

    

    handleInputChange = (event:any) => {
        //setBetAmount(event.target.value);
        this.setState({
            bet_amount: event.target.value
        });
      };
    
    handleSubmit = async (event:any) => {
        event.preventDefault();
        // Handle the submission logic here
        console.log('Bet Amount:', this.state.bet_amount);
        await this.handle_call_smart_contract();
      };

    handle_call_smart_contract = async () => {
       await checkApproveERC20(this.state.bet_amount, this.animationStart, this.setRealReels, this.animationStop);
    }

   


    
    
    render() {
        return (
          <div className='container'>
            <div className='row justify-content-between align-items-center mt-3 mt-md-5'>
              {/* Rewards Section */}
              <div className='px-4'>
                  <div className="col-12 col-md-4 text-white py-3 mb-3" style={{ backgroundColor: 'rgb(25,31,45)', borderRadius: 20 }}>
                    <h3 className='text-center'>Current Rewards</h3>
                    {[{src: real_reel_4.src, multiplier: "10X"}, {src: real_reel_3.src, multiplier: "5X"}, {src: real_reel_2.src, multiplier: "3X"}, {src: real_reel_1.src, multiplier: "2X"}].map((reward, index) => (
                      <div key={index} className='d-flex justify-content-center py-3'>
                        <div className='d-inline-flex align-items-center p-2' style={{ backgroundColor: 'rgb(25,31,45)', borderRadius: 20 }}>
                          <div className='px-2'>
                            <img className='img-fluid' width={50} src={reward.src} style={{ borderRadius: 15 }} alt={`Reel ${index * 3 + 1}`} />
                          </div>
                          <div className='px-2'>
                            <img className='img-fluid' width={50} src={reward.src} style={{ borderRadius: 15 }} alt={`Reel ${index * 3 + 2}`} />
                          </div>
                          <div className='px-2'>
                            <img className='img-fluid' width={50} src={reward.src} style={{ borderRadius: 15 }} alt={`Reel ${index * 3 + 3}`} />
                          </div>
                        </div>
                        <p className='text-center'>{reward.multiplier}</p>
                      </div>
                    ))}
                  </div>
              </div>
            

              {/* Slot Machine Visual Section */}
              <div className='col-md-4 px-3 col-sm-12 d-flex flex-column justify-content-center align-items-center py-md-3 ms-md-1'>
                {/* Big Win Header */}
                <div className='col-12' style={{ backgroundColor: "rgb(77,6,97)", borderTopLeftRadius: 100, borderTopRightRadius: 100, overflow: "hidden", border: "10px solid rgb(255,215,0)", borderBottom: 0, color: "rgb(255,215,0)" }}>
                  <div className='text-center'>BIG WIN</div>
                </div>

                {/* Slot Machine Reels */}
                <div className="col-12 position-relative d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgb(77,6,97)', borderLeft: '10px solid rgb(255,215,0)', borderRight: '10px solid rgb(255,215,0)', borderBottom: '10px solid rgb(255,215,0)', minHeight: '80px' }}>
                {/* Central $ Symbol, further adjusted to the left */}
                  <div className="position-absolute" style={{ top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                    <div className="d-inline-flex justify-content-center align-items-center rounded-circle text-center" style={{ backgroundColor: 'rgb(153,101,21)', border: '2px solid rgb(255,215,0)', color: 'rgb(255,215,0)', width: '40px', height: '40px' }}>
                      $
                    </div>
                  </div>
                  
                  <div className="position-absolute" style={{ top: '50%', left: '90%', transform: 'translate(-50%, -50%)' }}>
                    <div className="d-inline-flex justify-content-center align-items-center rounded-circle text-center" style={{ backgroundColor: 'rgb(153,101,21)', border: '2px solid rgb(255,215,0)', color: 'rgb(255,215,0)', width: '40px', height: '40px' }}>
                      $
                    </div>
                  </div>

                  

                  {/* Reel Images */}
                  <div className='d-flex justify-content-center'>
                    <div className='px-2'>
                      <img className='img-fluid' width={50} src={real_reel_4.src} style={{ borderRadius: 15 }} alt="Reel 1" />
                    </div>
                    <div className='px-2'>
                      <img className='img-fluid' width={50} src={real_reel_4.src} style={{ borderRadius: 15 }} alt="Reel 2" />
                    </div>
                    <div className='px-2'>
                      <img className='img-fluid' width={50} src={real_reel_4.src} style={{ borderRadius: 15 }} alt="Reel 3" />
                    </div>
                  </div>
                </div>

               {/* Betting Form */}
                <form onSubmit={this.handleSubmit} className="form-group px-md-5 col-12 text-center" style={{ backgroundColor: "rgb(77,6,97)", border: "10px solid rgb(255,215,0)" }}>
                  <label className='text-white' htmlFor="betAmount">Bet amount</label>
                  <div className="d-flex justify-content-center"> {/* Container baru untuk centering */}
                    <input 
                      type="number" 
                      className="form-control" 
                      id="betAmount" 
                      value={this.state.bet_amount} 
                      onChange={this.handleInputChange} 
                      placeholder="Enter bet amount" 
                      style={{ maxWidth: "200px" }} // Memastikan input tidak terlalu lebar
                    />
                  </div>
                  <button type="submit" className="btn btn-primary my-md-3 my-3" style={{ borderRadius: 15 }}>Submit</button>
                </form>

              </div>

              {/* Chat Component Placeholder */}
              <div className="col-md-3">
                <NexusFormChat/>
              </div>
            </div>
          </div>

        





        );
    }
}

export { NexusSlotsGamePlay };
