import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import EditIcon from '../images/order/edit.png';
import HeartIcon from '../images/order/heart.png';
// import LocaBox from '../components/locaBox';
import Drinktab from './drinktab';
import AniIcon from '../images/order/ani_icon.png';

class GoOrder extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <div style={this.state}>
                    <h3>線上訂餐</h3>
                    <section>
                        <br />
                        <a href="/order/fullJo" className="joGroup">
                            <button className="gobtnXL btnR">
                                <span><img src={HeartIcon} alt=""/>揪團</span>
                                <div className="border btnR"></div>
                            </button>
                        </a>
                        <br />
                        <div className="contentBox1">
                            <div className="goContentBox">
                                <div className="contentIn">
                                    <button className="gobtnM ">
                                        <span>外送:</span>&nbsp;&nbsp;<span>台中市南屯區公益路二段51號</span>
                                        <img src={EditIcon} alt="" />
                                        <div className="border btnR"></div>
                                    </button>
                                    <button className="gobtnM ">
                                        <span>取餐時間:</span>&nbsp;&nbsp;<span>2023/02/02 下午08:00</span>
                                        <img src={EditIcon} alt="" />
                                        <div className="border btnR"></div>
                                    </button>
                                </div>
                                <br />
                                <div className="list">
                                    <br />
                                    <a href="/order/billList">
                                        <button className="gobtnL btnR">
                                        <img src={AniIcon} alt=""  className="ani_icon" />
                                        <span>訂購清單</span>
                                        <div className="border btnR"></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Drinktab />
                    </section>
                    <br />
                </div>
                <Footer />
            </body>
        );
    }
}

export default GoOrder;