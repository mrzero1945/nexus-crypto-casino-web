import React from "react"

class NexusConnectChat extends React.Component<{}, []>{
    render(){
        return(
            <div>
                <div className="container mtt-5" style={{backgroundColor: 'rgb(25, 31, 45)', borderRadius:'8px'}}>
                    <h3 className="text-white text-center">Nexus Chat</h3>
                    <button className="btn btn-primary mb-md-3" style={{borderRadius:15}}>Connect</button>
                </div>
            </div>
        )
    }
}

export{NexusConnectChat}