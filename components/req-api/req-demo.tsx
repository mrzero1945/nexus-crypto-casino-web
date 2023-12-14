import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RequestState {
    joke: string | null;
    isLoading: boolean;
    error: string | null;
}

class NexusReq extends React.Component<{}, RequestState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            joke: null,
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.sendGetRequest();
    }

    sendGetRequest = () => {
        this.setState({ isLoading: true });

        axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            // Asumsikan response.data memiliki properti 'value' yang berisi lelucon
            this.setState({ joke: response.data.value, isLoading: false });
        })
        .catch(error => {
            this.setState({ error: error.message, isLoading: false });
        });
    }

    render() {
        const { joke, isLoading, error } = this.state;

        return (
            <div className='text-white container'>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {!isLoading && !error && joke && <div>Joke: {joke}</div>}
            </div>
        );
    }
}

export { NexusReq };
