import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from '../components/product_step.js';

import img1 from "../images/product/20221115event01.jpg";



class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '' // 選取的option值
        };
        this.handleChange = this.handleChange.bind(this); // 綁定handleChange方法
    }
    startStyle = {
        display: "none"
    }

    handleChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
    }





    // 運送方式選擇
    // DeliveryChange = (index) => {
        

    // }

    Step(n) {
        if (n === 1) {
            window.location.href = "/product";
        } else {
            window.location.href = "/product/step3";
        }
    }

    render() {


        return (
            <body className='BodyProduct'>
                <Index />
                <Step />
                <div className="ProductInfoContent">
                    <div className="ProductInfoProduct">
                        <div className="product_info">
                            <img src={img1} alt="" className='ProductInfoImg' />
                            <p>
                                雙面飲料提袋
                                <br />
                                款式 : 紅色(魯夫、娜美)
                                <br />
                                數量 : 2
                            </p>
                        </div>
                        <div className="price">
                            <h4>商品總價:</h4>
                            <p>NT$ 560</p>
                        </div>
                        <hr />
                        <div className="total">
                            <div>
                                <h4>小計:</h4>
                                <p>NT$ 560</p>
                            </div>
                            <div>
                                <h4>運費:</h4>
                                <p>NT$ 100</p>
                            </div>
                            <div>
                                <h4>總計:</h4>
                                <p>NT$ 660</p>
                            </div>
                        </div>
                    </div>
                    <form className="ProductInfoInformation">
                        <fieldset className="ProductInfoOrder">
                            <legend>訂購人資料</legend>
                            {/* 0 */}
                            姓名<input type="text" />
                            <br />
                            {/* 1 */}
                            電話<input type="tel" pattern="[0-9]{4}-[0-9]{6}" />
                        </fieldset>
                        <br />
                        <fieldset className="ProductInfoReceive">
                            <legend>收購人資料</legend>
                            {/* 2 */}
                            姓名<input type="text" />
                            <br />
                            {/* 3 */}
                            電話<input type="tel" pattern="[0-9]{4}-[0-9]{6}" placeholder='格式為xxxx-xxxxxx' />
                            <br />
                            運送方式
                            <br />
                            <select name="ProductInfoDelivery" onChange={this.handleChange}>
                                {/* op0 */}
                                <option value="no">請選擇運送方式</option>
                                {/* op1 */}
                                <option className="home" value="home">宅配到家</option>
                                {/* op2 */}
                                <option value="shop">就近取貨</option>
                            </select>
                            <br />
                            {/* 4 */}
                            <input type="text" className="home" placeholder="請輸入地址" style={this.startStyle} />
                            {/* 5 */}
                            <input type="text" className="shop" style={this.startStyle} />
                            {/* <br /><br />  */}
                            付款方式
                            <br />
                            <select name="pay" id="">
                                {/* op3 */}
                                <option>請選擇付款方式</option>
                                {/* op4 */}
                                <option>現金</option>
                                {/* op5 */}
                                <option>信用卡</option>
                            </select>
                            <br />
                            {/* 6 */}
                            <input type="text" className="cash" style={this.startStyle} />
                            {/* 7 */}
                            <input type="text" className="card" placeholder="請輸入卡號" style={this.startStyle} />
                            {/* 8 */}
                            <input type="text" className="card_date" value="08/2024" style={this.startStyle} />
                            {/* 9 */}
                            <input type="text" className="card_cvv" value="123" style={this.startStyle} />
                            發票開立方式
                            <br />
                            <select name="invoice" id="">
                                {/* op6 */}
                                <option>請選擇發票開立方式</option>
                                {/* op7 */}
                                <option>二聯式發票</option>
                                {/* op8 */}
                                <option>三聯式發票</option>
                                {/* op9 */}
                                <option>手機載具</option>
                            </select>
                            <br />
                            {/* 10 */}
                            <input type="text" className="1" style={this.startStyle} />
                            {/* 11 */}
                            <input type="text" className="2" style={this.startStyle} />
                            {/* 12 */}
                            <input type="text" className="3" placeholder="載具格式: /AB1AB12" style={this.startStyle} />
                            備註
                            <br />
                            {/* 12 */}
                            <input type="text" className="ProductInfoComment" />
                        </fieldset>
                    </form>

                    <div className="ProductInfoBtn">
                        {/* 10/6 */}
                        <button className="ProductInfoNext" onClick={this.Step.bind(this, 2)}>送出訂單</button>
                        {/* 11/7 */}
                        <button className="ProductInfoShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
                    </div>
                </div>
                <Footer />
            </body>
        );
    }
}

export default ProductInfo;