import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import '../css/product_list2.css';
import '../css/index.css';
// import Index from '../components/index.js';
// import Footer from '../components/footer.js';


class Step extends Component {
    state = {
        // 'padding-top': '100px',
        // productTitle: [1, 2, 3],
        // banner: [banner1, banner2, banner3],
        // slideIndex: 1
    }
    // startStyle = {
    //     display: "block"
    // }
    style = {
        paddingTop: '100px'
    }

    render() {

        return (
            <body className='BodyProduct' style={this.style}>
                {/* <Index /> */}
                <div className="Step">
                    <div>
                        <div className="Step1">
                            <p>1</p>
                        </div>
                        <p className="Step1Name">購物車清單</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <div className="Step2">
                            <p>2</p>
                        </div>
                        <p className="Step2Name">填寫資料</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <div className="Step3">
                            <p>3</p>
                        </div>
                        <p className="Step3Name">訂單已送出</p>
                    </div>
                </div>
                {/* <Footer /> */}
            </body>
        );
    }
}

export default Step;