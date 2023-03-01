import React, { Component } from 'react';
import '../css/order.css';
import HeartIcon from '../images/order/heart.png';
import AniIcon from '../images/order/ani_icon.png';



class friendJo extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state}>
                    <div className="friendJO" id="friendJO">
                        <div className="friendInfo">
                            <div>
                                <img src={HeartIcon} className="FJheart"  alt='' />
                                <h1>揪團</h1>
                            </div>
                            <div>
                                <div className="friendName">
                                    <h4><span>小明</span>團購</h4>

                                    <h5>團員</h5><p>來自小明的團購邀請</p>
                                    <br />
                                        <input type="text" placeholder="請輸入大名" />
                                        </div>
                                        <div className="friendBox"><img src={AniIcon} alt="" className="FJJaniIcon" /></div>
                                </div>
                                <div className="friendBtnEdit">
                                    <button className="friendBtnM">
                                        <span className="getloc">自取:</span>&nbsp;&nbsp;<span>東興店</span><br/><span className='addrGo'></span>
                                        <div className="border btnR"></div>
                                        <span className="getTime">取餐時間:</span>&nbsp;&nbsp;<span>2023/02/02 下午08:00</span>
                                        <div className="border btnR"></div>
                                    </button>
                                </div>
                                <br />
                                    <div>
                                        <div className="friendPlus">
                                            <a href="/order" className="backJo">
                                                <button className="friendBtnL btnR"><span>取消團購</span></button>
                                            </a>
                                            <br />
                                            <br />
                                                <a href="/order/drinkList">
                                                    <button className="friendBtnL2 btnR"><span>開始點餐</span></button>
                                                </a>

                                        </div>
                                    </div>
                            </div>
                           
                        </div>
                    </div>
            </div>
        );
    }
}

export default friendJo;