import {Component, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomConnectButton } from './btn-wallet-connect';



class NexusNavbar extends Component {
    componentDidMount() {
        if (typeof window !== 'undefined') {
          import('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
      }
    
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#191F2D'}}>
                
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>Nexus</a>

                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse justify-content-end' id="navbarNav" >
                        <ul className='navbar-nav'>
                            {/* Tambahkan lebih banyak nav-item di sini jika diperlukan */}
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current="page" href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current="location" href='#'>Play</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current="location" href='/stake'>Stake</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current="location" href='#'>Contact</a>
                            </li>
                            <CustomConnectButton />
                        </ul>
                    </div>
                </div>

            </nav>
        );
    }
}

export { NexusNavbar };
