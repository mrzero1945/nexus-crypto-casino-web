import React from "react";
import Web3 from "web3";




interface INexusChatState {
    message: string;
    messages: string[];
}

interface INexusChatProps{
    username:string;
    address:string
}

class NexusChat extends React.Component<INexusChatProps, INexusChatState> {
    private scrollRef = React.createRef<HTMLDivElement>(); // Membuat ref untuk elemen scroll

    constructor(props: INexusChatProps) {
        super(props);
        this.state = {
            message: '',
            messages: [],
        };
        
        this.ws = this.connectToWebSocket();
        
    }

    private ws:WebSocket;


    connectToWebSocket(){
        // Membuat URL untuk WebSocket
        const wsUrl = 'ws://192.168.1.100:8080';

        // data json
        const data = {
            address: this.props.address,
            command: "connect_chat"
        }

        // convert obj js to json string
        const dataString = JSON.stringify(data);

        
        // Membuat instance WebSocket
        const ws = new WebSocket(wsUrl);

        // Mendengarkan event ketika koneksi berhasil terbuka
        ws.onopen = function(event) {
            console.log('Connected to the WebSocket server');
            ws.send(dataString);
        };

        // Mendengarkan pesan dari server
        ws.onmessage = (event:any) => {
            console.log('Message from server:', event.data);
            this.setState(prevState =>({
                messages: [...prevState.messages, event.data]
            }));
        }

        // Mendengarkan error
        ws.onerror = function(event) {
            console.error('WebSocket error:', event);
        };

        // Mendengarkan ketika koneksi ditutup
        ws.onclose = function(event) {
            console.log('WebSocket connection closed', event);
        };
        
        // Fungsi ini dapat diperluas dengan menambahkan kemampuan untuk mengirim pesan ke server,
        // menangani lebih banyak jenis event, dan melakukan koneksi ulang jika perlu.
        
        return ws; // Mengembalikan instance WebSocket
    }


    componentDidUpdate() {
        // Scroll ke bagian bawah setiap kali komponen diperbarui
        const scroll = this.scrollRef.current;
        if (scroll) {
            scroll.scrollTop = scroll.scrollHeight;
        }
    }

    handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ message: event.target.value });
       
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!this.state.message.trim()) return;

        this.ws.send(this.state.message);

        this.setState({
            //messages: [...prevState.messages, prevState.message],
            message: ''
        });
    };

    render() {
        return (
            <div className="container d-flex flex-column p-3 text-white position-relative" style={{ backgroundColor: 'rgb(25,31,45)', height: '50vh' }}>
                <div className="text-center text-white mb-md-3" style={{fontWeight:"bold"}}>Nexus Chat {this.props.username}</div>
                {/* Menambahkan ref ke div scrollview */}
                <div className="overflow-auto mb-3 pe-3" style={{ maxHeight: 'calc(50vh - 60px)' }} ref={this.scrollRef}>
                    {this.state.messages.map((msg, index) => (
                        <div key={index} className="d-flex justify-content-end mb-2">
                            <div className="text-white p-2 rounded" style={{ backgroundColor: 'rgb(18,23,36)', maxWidth: 'fit-content' }}>
                                {msg}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={this.handleSubmit} className="mt-auto">
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.message} onChange={this.handleMessageChange} placeholder="Ketik pesan..." />
                        <button type="submit" className="btn text-white" style={{backgroundColor: 'rgb(89,190,67)'}}>Kirim</button>
                    </div>
                </form>
            </div>
        );
    }
}

export { NexusChat };
