import React, { Component } from 'react';
import '../css/index.css';


class Productlist extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="orderList-item">
                    <div className="orderList-number">
                        <div className="orderList-number-t">
                            <p>周邊訂單編碼:A0215302026</p>
                        </div>
                        <div className="orderList-number-p">
                            <p>訂單日期:2023/01/01</p>
                            <p>訂購門市:公益店</p>
                            <p>訂購金額:$500元</p>
                            <p>訂單狀態:已完成</p>
                        </div>
                        <div className="orderList-number-b">
                            <p>查看更多</p>
                        </div>
                    </div>
                    <div className="orderList-number">
                        <div className="orderList-number-t">
                            <p>訂單編碼:A0215302026</p>
                        </div>
                        <div className="orderList-number-p">
                            <p>訂單日期:2023/01/01</p>
                            <p>訂購門市:公益店</p>
                            <p>訂購金額:$500元</p>
                            <p>訂單狀態:已完成</p>
                        </div>
                        <div className="orderList-number-b">
                            <p>查看更多</p>
                        </div>
                    </div>
                    <div className="orderList-number">
                        <div className="orderList-number-t">
                            <p>訂單編碼:A0215302026</p>
                        </div>
                        <div className="orderList-number-p">
                            <p>訂單日期:2023/01/01</p>
                            <p>訂購門市:公益店</p>
                            <p>訂購金額:$500元</p>
                            <p>訂單狀態:已完成</p>
                        </div>
                        <div className="orderList-number-b">
                            <p>查看更多</p>
                        </div>
                    </div>


                </div>
                <div className="orderlist-page">
                    <button className="orderlist-page-btn">1</button>
                    <button className="orderlist-page-btn">2</button>
                    <button className="orderlist-page-btn">3</button>
                    <button className="orderlist-page-btn">4</button>
                    <button className="orderlist-page-btn">5</button>
                </div>
            </div>
        );
    }
}

export default Productlist;