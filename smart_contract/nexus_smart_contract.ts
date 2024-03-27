import Web3 from 'web3';

class NexusSmartContract {
    private static  async approve_usdt_spend_to_poker_sc(){
      let web3: any;
      if (typeof window !== 'undefined' && window.ethereum) {
        web3 = new Web3(window.ethereum);
      }
      const amountToApprove = web3.utils.toWei('9999999999', 'ether'); // Contoh jumlah untuk di-approve
      const fromAddress = window.ethereum.selectedAddress;
      const usdtContract = new web3.eth.Contract( this.usdt_abi , this.usdt_token_addr);
      try{
        const approveResult = await usdtContract.methods.approve(this.poker_bet_contract_addr, amountToApprove).send({from: fromAddress});
        console.log("approve token success", approveResult);
      } catch(error){
        console.error("error approve token: ", error);
      }
    }

    private static async check_approve_usdt_poker_sc(amount:number){
      let web3:any;
      if(typeof window!== 'undefined' && window.ethereum){
        web3 = new Web3(window.ethereum);
      }
      const fromAddress = window.ethereum.selectedAddress;
      const pokerContract = new web3.eth.Contract(this.poker_abi, this.poker_bet_contract_addr);
      const amountToCheck = web3.utils.toWei(amount.toString(), "ether");
      const result = await pokerContract.methods.is_allowance_sufficient(amountToCheck).call({
        from:fromAddress
      });
      return result;

    }



    private static poker_bet_contract_addr = "0x8f5dded8875a4f612e4ae49316A00C9a4094E301";
    static call_poker_smart_contract = async ( usdtAmount_num:number, bnbAmount_num:number) => {
      let web3: any;
      if (typeof window !== 'undefined' && window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
          if(await this.check_approve_usdt_poker_sc(usdtAmount_num)){
            console.log("approved");
          } else{
            console.log("approve first");
            await this.approve_usdt_spend_to_poker_sc();
          }
          const contract = new web3.eth.Contract(this.poker_abi, this.poker_bet_contract_addr);
          const accounts = await web3.eth.getAccounts();
        
          if (accounts.length === 0) throw new Error("No accounts found.");

        
          const usdtAmount = web3.utils.toWei(usdtAmount_num.toString(), 'ether'); // Example amount, needs to be adjusted for your use case
          const bnbAmount = web3.utils.toWei(bnbAmount_num.toString(), 'ether'); // Example amount, adjust as needed
          const fromAddress = window.ethereum.selectedAddress;
        
          // Prepare transaction parameters
          const transactionParameters = {
            from: fromAddress,
            value: bnbAmount, // This is the amount of Wei to send with the transaction
          };
        
          // Call the contract method with the transaction parameters
          const receipt = await contract.methods.add_bet(usdtAmount, bnbAmount).send(transactionParameters);
        
          console.log('Transaction receipt: ', receipt);
          
        } catch (error) {
          console.error('Error calling smart contract method: ', error);
        }
      } else {
        console.error('Ethereum object not found, make sure you are in a DApp browser');
      }
    };
    

    static poker_abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "bets",
        "outputs": [
          {
            "internalType": "address",
            "name": "bettor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_bettor",
            "type": "address"
          }
        ],
        "name": "getBetInfo",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "send_token",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "usdtAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bnbAmount",
            "type": "uint256"
          }
        ],
        "name": "add_bet",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "is_allowance_sufficient",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ]

    static is_connect_wallet =  async (set_address:any)=>{
      let web3:any;
      if (typeof window !== 'undefined' && window.ethereum) {
          web3 = new Web3(window.ethereum);
      }
      try{
        const accounts = await web3.eth.getAccounts();
        if(accounts.length > 0){
          if(set_address){
            // set address
            set_address(accounts[0]);
            return true
          } 
          } else{
            console.error("not connected with wallet");
            return false
        }
      } catch(error){
        console.error("error detected: ", error);
        return false
      }
    }

    static slots_bet_contract_addr = '0xa8682F6ef9cC29A9e05E874EcD5C84A00ccdFc9D';

    static usdt_token_addr = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd';

    static bj_bet_addr = '0x391F1dab29bddeD747079149130fa63A837C672d';

    static bj_bet_abi =   [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "send_token",
        "outputs": [],
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
        "name": "add_bet",
        "outputs": [],
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
        "name": "is_allowance_sufficient",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ]; 
    static usdt_abi =  [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    
    static slots_bet_abi = [
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
          "name": "deposit_owner",
          "outputs": [],
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
        },
        {
          "inputs": [],
          "name": "get_deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "name": "isAllowanceSufficient",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];
      
      
}

export {NexusSmartContract};