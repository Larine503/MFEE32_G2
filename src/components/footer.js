import React, { Component } from 'react';
import '../css/index.css';
import footerLogo from '../images/home/logo.png';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="footer">
                    <div className="footerLogo"><img src={footerLogo} alt="" /></div>
                    <div className="footerMain">
                        <div className="footerFb">FB</div>
                        <div className="footerIg">IG</div>
                    </div>
                    <div className="footerAddress">
                        <p>地址:台中市公益路二段51號
                            <br />
                            Tel:04-12345678
                        </p>
                    </div>
                </footer>
        );
    }
}
 
export default Footer;