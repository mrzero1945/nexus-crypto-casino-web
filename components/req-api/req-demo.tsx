import { Component } from "react";

interface RequestState{
    response: string;
    isLoading: boolean;
    error: string | null;
}

class NexusReq extends Component<{}, RequestState> {
    constructor(props: {}){
        super(props);
        this.state = {
            response: '',
            isLoading: false,
            error: null
        };
    }

    sendPostRequest = async () => {
        this.setState({isLoading: true});
        try {
            const response = await fetch('http://192.168.1.100:8080/command', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({command: 'some_command'}),
            });
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.text();
            this.setState({response: data, isLoading:false});
        } catch(error:any){
            this.setState({error: error.message, isLoading:false });
        }
    }
    render() {
        const { response, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                Response: {response}
            </div>
        );
    }
    
}

export {NexusReq};

