import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';
// import { json } from 'body-parser';
axios.defaults.withCredentials = true;

class Drinklist extends Component {
    state = {
        drinkList: [
            { id: 201003040010, time: '2010-03-04 08:36:52', method: '自取', phone:'0912345678', storeId: 'A001', address: '台中市公益路二段51號', total: '360', state: '1' },
            { id: 201005060020, time: '2010-05-06 13:12:32', method: '外送', phone:'0912345678', storeId: 'A009', address: '台中市公益路二段51號', total: '400', state: '0' },
            { id: 201005060020, time: '2010-05-06 13:12:32', method: '外送', phone:'0912345678', storeId: 'A009', address: '台中市公益路二段51號', total: '400', state: '0' },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="orderList-item">
                    {this.state.drinkList.map((item) =>
                        <table className="orderList-number">
                            <span type="hidden" id="userItemMtel"
                                name="phone" value={item.phone} />
                            <tr className="orderList-number-t">
                                <p>飲品訂單編碼:{item.id}</p>
                            </tr>
                            <tr className="orderList-number-p">
                                <p>訂單日期</p>
                                <p>{item.time}</p>
                                <p>訂購門市:{item.storeId}</p>
                                <p>訂購金額:{item.total}元</p>
                                <p>訂單狀態:{item.state}</p>
                            </tr>
                            <tr className="orderList-number-b">
                                <a href={`/order/billAll/${item.id}`}><p>訂單明細</p></a>
                            </tr>
                        </table>
                    )}



                    <br/>
                    
                </div>
                <div className="orderlist-page">
                        <button className="orderlist-page-btn">1</button>
                        <button className="orderlist-page-btn">2</button>
                        <button className="orderlist-page-btn">3</button>
                        <button className="orderlist-page-btn">4</button>
                        <button className="orderlist-page-btn">5</button>
                    </div>
            </React.Fragment>
        );
    }
    async componentDidMount() {
        try {
          const result = await axios.get("http://localhost:8000/login");
          const url = `http://localhost:8000/member/orderList/drinklist/${result.data.user}`;
          const fromServer = await axios.get(url);
          const newState = { ...this.state };
          newState.drinkList = fromServer.data;
          this.setState(newState);
        } catch (error) {
          console.error(error);
        }
      }
}

export default Drinklist;