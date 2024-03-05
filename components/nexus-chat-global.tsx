import React from "react";

interface INexusChatState {
    message: string;
    messages: string[];
}

class NexusChat extends React.Component<{}, INexusChatState> {
    private scrollRef = React.createRef<HTMLDivElement>(); // Membuat ref untuk elemen scroll

    constructor(props: {}) {
        super(props);
        this.state = {
            message: '',
            messages: []
        };
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

        this.setState(prevState => ({
            messages: [...prevState.messages, prevState.message],
            message: ''
        }));
    };

    render() {
        return (
            <div className="container d-flex flex-column p-3 text-white position-relative" style={{ backgroundColor: 'rgb(25,31,45)', height: '50vh' }}>
                <div className="text-center text-white mb-md-3" style={{fontWeight:"bold"}}>Nexus Chat</div>
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
