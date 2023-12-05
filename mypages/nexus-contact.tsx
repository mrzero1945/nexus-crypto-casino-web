import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class NexusContact extends Component{
    render(){
        return(
            <div className="container text-white mt-md-5" >
                 <style jsx>{`
                    .col-md-4 {
                        background: #191F2D;
                    }
                    .col-md-11 {
                        background: #191F2D;
                    }
                `}</style>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 me-5 d-flex flex-column align-items-center justify-content-center px-md-3 py-md-3" style={{ height: "100%" }}>
                        <button className="btn text-white my-md-2  d-flex align-items-center justify-content-start" style={{ background: "#59BE43", borderRadius: "15px", width: '100%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 18H18V9.25L12 13L6 9.25V18H4V6H5.2L12 10.25L18.8 6H20M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="black"/>
                                </svg>
                            Senozacky2006@gmail.com
                        </button>
                        <button className="btn text-white my-md-2  d-flex align-items-center justify-content-start" style={{ background: "#59BE43", borderRadius: "15px", width: '100%' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="black"/>
                            </svg>
                            t.me/Gregory2005_n
                        </button>
                    </div>
                    <div className="col-md-11 mt-md-4 px-md-4 py-md-4">
                        <p>Get in touch with Nexus, your premier destination for crypto casino innovation. Our support team is on standby to assist with any inquiries or feedback regarding your online casino experience. Need help with a transaction, curious about our game selection, or have questions about securing your crypto assets? Send us an email or message us on Telegram, and discover why Nexus is the top choice for crypto casino enthusiasts.</p>
                    </div>

                    

                    <div className="col-md-11 mt-md-3 px-md-4 py-md-4">
                        <p>Step into the future of gaming with Nexus, where the revolution of the gambling world unfolds at your fingertips. We're transcending the boundaries of the traditional casino experience, leveraging the power of cryptocurrency to offer you unparalleled privacy, lightning-fast transactions, and a global platform where fortune favors the bold. Join the vanguard of players who are reshaping the gambling landscape, as we unlock the full potential of blockchain technology to guarantee a fair, transparent, and truly thrilling gaming journey. Don't just gamble, be part of the revolution with Nexus – where every play is a step towards the future.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export {NexusContact}