import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';


class Productlist extends Component {
    state = {
        productList:[
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
        ]
    }
    render() {
        return (
            <React.Fragment>
            <div className="orderList-item">
                {this.state.productList.map((item) =>
                    <table className="orderList-number">
                        <input type="hidden" id="userItemMtel"
                            name="o_order_tel" value={item.o_order_tel} />
                        <tr className="orderList-number-t">
                            <p>周邊訂單編碼:{item.o_id}</p>
                        </tr>
                        <tr className="orderList-number-p">
                            <p>訂單日期:{item.o_date}</p>
                            <p>訂購金額:{item.o_total}</p>
                            <p>寄送方式:{item.o_delivery}</p>
                            <p>付款方式:{item.o_pay}</p>
                        </tr>
                        <tr className="orderList-number-b">
                            <a href={`/member/orderList/productlist/0912345678/${item.o_id}`}><p>查看更多</p></a>
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
          const url = `http://localhost:8000/member/orderList/productlist/${result.data.user}`;
          const fromServer = await axios.get(url);
          const newState = { ...this.state };
          newState.productList= fromServer.data;
          this.setState(newState);
        } catch (error) {
          console.error(error);
        }
      }
}

export default Productlist;