import backgroundImg from '../resources/assets/PNG/background.png';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class NexusPlayBlackJack extends Component{
    render(){
        return(
            <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh", position: "relative" }}>
                <div className='row'>
                    <div className='col-md-12'>
                        <img className='img-fluid' src={backgroundImg.src}/>

                        {/* Overlay untuk teks dan tombol */}
                        <div className='position-absolute top-50 start-50 translate-middle text-center'>
                            <button className='btn btn-primary mt-3'>Play</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export {NexusPlayBlackJack};