import React, { Component } from 'react';
import '../css/order.css';
import AniIcon from '../images/order/ani_icon.png';
import axios from 'axios';

class BillAll extends Component {
    state = {
        drink_history: [
            { pid: "MT01", people: "小明", size: "M", sugar: "微糖", plus: "珍珠", cup: 3, extra: "附吸管", price: 150 },
            // { pid: "MT01", people: "小王", size: "M", sugar: "微糖", plus: "珍珠", cup: 3, extra: "附吸管", price: 150 },
            // { pid: "MT01", people: "小雨", size: "M", sugar: "微糖", plus: "珍珠", cup: 3, extra: "附吸管", price: 150 },
        ]
    }
    render() {
        return (
            <body>

                <div className="billScreen">
                    <div className="billBox">
                        <div className="BAaniCon">
                            <img src={AniIcon} alt="" />
                            <h1>訂購明細</h1>
                            <p>訂單編號:</p>
                        </div>
                        <div className="billBg">
                            <div>
                                <div><h1>小明的團購</h1></div>
                                {this.state.drink_history.map((item) =>
                                    <div className="outHere">
                                        <div className="billB">
                                            <div><h3>{item.people}</h3></div>
                                            <div className="choiceName">
                                                <h4>布丁奶茶</h4>
                                                <p> {item.size}/{item.sugar}/{item.ice}/{item.plus}</p>
                                                <p>{item.cup}杯</p>
                                                <p>${item.price}</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="comeLeft">
                            <div>
                                <h4>已付金額</h4>
                                <p>現金付款</p>
                                <p>$280</p>
                            </div>
                            <div className="billHr"></div>
                            <div className="getPoint">
                                <h4>自取/東興店</h4>
                                <span>2023/01/16 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17:00</span>
                            </div>
                        </div>
                        <div className="billBtn ">
                            <a href="/order/drinkList" className="BAbtnR BtnA">
                                <button className="BAbtnM BAbtnR BtnA">
                                    <p>再次訂購</p>
                                    <div className="BAborder BAbtnR"></div>
                                </button>
                            </a>
                            <a href="/order/goOrder" className="BAbtnR">
                                <button className="BAbtnR BAbtnM">
                                    <p>關閉</p>
                                    <div className="BAborder BAbtnR"></div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
    async componentDidMount() {
        try {
            const result = await axios.get("http://localhost:8000/order/billall");
            // const url = `http://localhost:8000/order/billAll/${result.data.user}`;
            // const fromServer = await axios.get(url);
            const newState = { ...this.state };
            newState.drink_history = result.data;
            this.setState(newState);
        }   catch (error) {
            console.error(error);
        }

    }
}

export default BillAll;