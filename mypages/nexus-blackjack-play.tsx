import backgroundImg from '../resources/assets/PNG/background.png';
// import chipRedImg from '../resources/assets/PNG/Chips/chipRedWhite_side.png';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

class NexusPlayBlackJack extends Component {
    render() {
        return (
            <div className='container'>
                <style jsx>{`
                    .zoom-on-hover:hover {
                        transform: scale(1.1);
                    }
                `}</style>
                    <div className='row d-flex justify-content-center mt-md-4'>
                    <div className="col-md-8 d-flex align-items-center justify-content-center position-relative" style={{ height: '100vh' }}>
                        <img className="img-fluid position-absolute w-100 h-100" src={backgroundImg.src} alt="Deskripsi Gambar"/>
                        
                        <div className="position-absolute text-center">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h2 className="text-white">BlackJack</h2>
                                </div>
                                <div className='col-md-12'>
                                    <Link href="blackjack-demo">
                                        <button className="btn btn-primary px-5 py-2" style={{borderRadius:"25px"}}>Play</button>
                                    </Link>
                                    
                                </div>
                                

                            </div>
        
        
                        </div>
                    </div>
                    </div>
            </div>


        );
    }
}

export { NexusPlayBlackJack };

/*
<div className='col-md-6 ms-4 position-relative' style={{ height: '200px' }}>
                                    <img className='img-fluid zoom-on-hover position-absolute' style={{transition: "transform 0.5s ease", left: '0px', top: '0px', zIndex: 1}} src={chipRedImg.src} />
                                    <img className='img-fluid zoom-on-hover position-absolute' style={{transition: "transform 0.5s ease", left: '20px', top: '20px', zIndex: 2}} src={chipRedImg.src} />
                                    <img className='img-fluid zoom-on-hover position-absolute' style={{transition: "transform 0.5s ease", left: '40px', top: '40px', zIndex: 3}} src={chipRedImg.src} />
                                    
                                </div>/
*/
