import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import HeartIcon from '../images/order/heart.png';
import AniIcon from '../images/order/ani_icon.png';
import closeBtn from '../images/order/cancel.png';


class teamJo extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <div style={this.state}>
                    <h3>線上訂餐</h3>
                    <div className="teamJO" id="teamJO">
                        <div className="teamInfo">
                            <div className="teamTitle"><img src={HeartIcon} className="heart" alt='' />
                                <h1>揪團</h1>
                            </div>
                            <div>
                                <div className="teamName">
                                    <h3><span>小明</span>開團</h3>
                                </div>
                                <div className="teamBox">
                                    <div className="teamSuss">
                                        <h2>成功開團!</h2>
                                        <p>分享團購連結揪好友、家人一起訂購</p>
                                        <img src={AniIcon} alt="" className="aniIcon" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="teamPlus">
                                    <a href="/order/friendJo" className="shareJo">
                                        <button className="teamBtnL btnR"><span>分享團購</span></button>
                                    </a>
                                    <br />
                                    <a href="/order/drinkList">
                                        <button className="teamBtnL2 btnR"><span>開始點餐</span></button>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <a href="/order/goOrder" className="joBtnClose"><img src={closeBtn} alt="" /></a>
                    </div>
                    <br />
                </div>

            </body>
        );
    }
}

export default teamJo;