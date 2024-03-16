import React from "react";
import Web3 from 'web3';

// Asumsi Anda memiliki komponen NexusChat di path yang sama
import { NexusChat } from "./nexus-chat";

let web3:any;
if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
}

interface INexusFormChatState {
    status_form: boolean;
    username: string;
    address: string;
    statusMessage: string; // Menyimpan pesan status
    ws: WebSocket | null; // Menyimpan instance WebSocket
}

class NexusFormChat extends React.Component<{}, INexusFormChatState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            status_form: false,
            username: '',
            address: '',
            statusMessage: '',
            ws: null
        };
    }

    async componentDidMount() {
        if(await this.getAddressFromWeb3()){
            this.initiateWebSocketConnection();
            this.checkAccount();
        }
       
       
    }

    // Misalnya, ini adalah fungsi untuk mendapatkan alamat pengguna dari Web3
    getAddressFromWeb3 = async () => {
        try {
            // Pastikan web3 diinisialisasi dan siap
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                const address = accounts[0];
                this.setState({ address }); // Memperbarui state address
                return true;
            } else {
                console.error('No accounts found. Make sure Ethereum client is connected.');
                return false;
            }
        } catch (error) {
            // Menangkap dan menangani kesalahan
            console.error('An error occurred while fetching accounts:', error);
            return false;
        }
    };
    
  // Pastikan memanggil getAddressFromWeb3 pada lifecycle method yang sesuai, misal componentDidMount atau sebagai respons terhadap aksi pengguna
  

    // Fungsi untuk mencoba reconnect
    attemptReconnect = () => {
        console.log('Attempting to reconnect...');
        setTimeout(() => {
        this.initiateWebSocketConnection();
        }, 5000); // Mencoba koneksi ulang setelah 5 detik
    };

    initiateWebSocketConnection = () => {
        const ws_url = "ws://192.168.1.100:8080";
        const ws = new WebSocket(ws_url);
        
        ws.onopen = () => {
            console.log("Connected to server");
            this.setState({ ws });
        };

        ws.onmessage = (event) => {
            console.log("message from server: ", event.data);
            if(event.data !== "Account not found. Please register.") {
                this.setState({ status_form: true, username: this.state.username }, ()=>{
                    
                });
            } else {
                this.setState({ statusMessage: 'Username Not Registered' });
            }
            console.log(event.data);
        };

        ws.onerror = (event) => {
            console.error('WebSocket error:', event);
        };

        ws.onclose = (event) => {
            console.log('WebSocket connection closed', event);
            this.attemptReconnect();
        };
    }

    checkAccount = () => {
        if(this.state.address) {
            const dataset = { command: "check_account", address: this.state.address };
            this.sendWebSocketMessage(JSON.stringify(dataset));
            console.log("dieksekusi");
        }
    };

    sendWebSocketMessage = (message:string) => {
        if(this.state.ws && this.state.ws.readyState === WebSocket.OPEN) {
            console.log("buffer dikirim")
            this.state.ws.send(message);
        } else {
            console.error('WebSocket is not connected.');
        }
    };

    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const { username, address } = this.state;
        if (username && address) {
            const dataset = { command: "add_account", address: address, username: username};
            this.sendWebSocketMessage(JSON.stringify(dataset));
            this.setState({ statusMessage: '' });
        } else {
            this.setState({ statusMessage: 'Please enter a username and make sure your wallet is connected.' });
        }
    };

    handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: event.target.value
        });
    };

    render() {
        const { status_form, username, address, statusMessage } = this.state;

        return (
            <div>
                {status_form ? (
                    <NexusChat username={username} address={address}/>
                ) : (
                    <div className="container mt-5" style={{backgroundColor: 'rgb(25, 31, 45)', borderRadius: '8px'}}>
                        <h3 className="text-white text-center">Nexus Chat Registration</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label text-white">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={this.handleChangeUsername} value={username}/>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-primary mb-md-3" style={{borderRadius:15}}>Register</button>
                            <div className="text-white text-center pb-md-2" style={{minHeight:20}}>
                                {statusMessage}
                            </div>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export { NexusFormChat };
