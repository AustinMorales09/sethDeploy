import React from 'react';
import '../css/Footer.css';
import Logo from '../images/logo.png';



const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-6">
                        <h1>hello</h1>
                    </div>
                    <div className="col-6">
                        <h1>world</h1>
                    </div>
                </div>
                    
                </div>
                <div className="col-md-3 col-sm-12">
                <img src={Logo} alt="logo"/>

                </div>
            </div>
        </div>
    )
}

export default Footer
