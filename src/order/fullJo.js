import React, { Component } from 'react';
import '../css/order.css';
import EditIcon from '../images/order/edit.png';
import HeartIcon from '../images/order/heart.png';
import AniIcon from '../images/order/ani_icon.png';


class fullJo extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state} >
                    <div className="fullJO" id="fullJO">
                        <div className="joInfo">
                            <div className="joME"><img src={HeartIcon} className="FJheart" alt='' />
                                <h1>揪團</h1>
                            </div>
                            <div>
                                <div className="joTeamName">
                                    <h4>主揪大名</h4>
                                    <input type="text" placeholder="請輸入大名" />
                                </div>
                                <div className="imgBox"><img src={AniIcon} alt="" className="FJaniIcon" /></div>
                            </div>
                            <div className="joBtnEdit">
                                <button className="joBtnM">
                                    <span>自取:</span>&nbsp;&nbsp;<span>東興店</span>&nbsp;&nbsp;<span> 台中市南屯區東興路二段276號</span>
                                    <img src={EditIcon} alt='' />
                                    <div className="border btnR"></div>
                                </button>
                                <button className="joBtnM">
                                    <span>取餐時間:</span>&nbsp;&nbsp;<span>2023/02/02 下午08:00</span>
                                    <img src={EditIcon} alt='' />
                                    <div className="border btnR"></div>
                                </button>
                            </div>
                            <br />
                            <div>
                                <div className="joPlus">
                                    <a href="/order/goOrder" className="backJo">
                                        <button className="joBtnL btnR">
                                            <span>取消開團</span>
                                            <div className="FJborder BLbtnR"></div>
                                            </button>
                                    </a>
                                    <br />
                                    <br />
                                    <a href="/order/teamJo" className="opJo">
                                        <button className="joBtnL2 btnR">
                                            <span>+開新團</span>
                                            <div className="FJborder1 BLbtnR"></div>
                                            </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br />
                </div>
                
            </div>
        );
    }
}

export default fullJo;