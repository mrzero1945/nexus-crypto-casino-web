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
    
}

