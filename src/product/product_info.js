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
            selectedValue: ''
        };
    }
    // state = {
    //     // 'padding-top': '100px',
    //     // productTitle: [1, 2, 3],
    //     // banner: [banner1, banner2, banner3],
    //     // slideIndex: 1
    // }
    startStyle = {
        display: "none"
    }




    // 運送方式選擇
    DeliveryChange = (event) => {
        // var address_shop = document.getElementsByTagName("input")[5];
        // address_shop.style.display = "none";
        // address_shop.style.block = "none";
        // var select1 = document.getElementsByTagName("select")[0];
        // var address_home = document.getElementsByTagName("input")[4];
        // address_home.style.display = "none";
        // address_home.style.block = "none";
        // var index1 = select1.selectedIndex;

        // 不可選擇"請選擇運送方式"
        // if (index1 === 0) {
        //     console.log("no choice");
        // } else if (index1 === 1) {
        //     // 宅配到家
        //     // address_shop.style.display = "none";
        //     // address_shop.style.block = "none";

        //     // address_home.style.display = "block";
        //     // address_home.innerHTML += "<br>" + "<br>";

        //     // address_home.style.block = "none";
        //     console.log("2");

        // } else {
        //     // 就近取貨
        //     // address_home.style.display = "none";
        //     // address_home.style.block = "none";
        //     // address_shop.style.display = "block";
        //     // 帶出店家資訊
        //     // address_shop.setAttribute("value", "台中公益店 - 台中市公益路二段51號");
        //     // address_shop.setAttribute("readonly", "true");
        //     console.log("3");
        // }

        this.setState({ selectedValue: event.target.value });
        console.log(this.state.selectedValue);

    }


    render() {



        // 訂購人姓名和電話
        // var oder_name = document.getElementsByTagName("input")[0];
        // var oder_tel = document.getElementsByTagName("input")[1];

        // 收購人姓名和電話
        // var receive_name = document.getElementsByTagName("input")[2];
        // var receive_tel = document.getElementsByTagName("input")[3];


        // // 運送方式選擇
        // DeliveryChange = () => {
        //     // var address_shop = document.getElementsByTagName("input")[5];
        //     // address_shop.style.display = "none";
        //     // address_shop.style.block = "none";
        //     // var select1 = document.getElementsByTagName("select")[0];
        //     // var address_home = document.getElementsByTagName("input")[4];
        //     // address_home.style.display = "none";
        //     // address_home.style.block = "none";
        //     var index1 = select1.selectedIndex;
        //     // 不可選擇"請選擇運送方式"
        //     if (index1 === 0) {
        //         console.log("no choice");
        //     } else if (index1 === 1) {
        //         // 宅配到家
        //         // address_shop.style.display = "none";
        //         // address_shop.style.block = "none";

        //         // address_home.style.display = "block";
        //         // address_home.innerHTML += "<br>" + "<br>";

        //         // address_home.style.block = "none";
        //         console.log("2");

        //     } else {
        //         // 就近取貨
        //         // address_home.style.display = "none";
        //         // address_home.style.block = "none";
        //         // address_shop.style.display = "block";
        //         // 帶出店家資訊
        //         // address_shop.setAttribute("value", "台中公益店 - 台中市公益路二段51號");
        //         // address_shop.setAttribute("readonly", "true");
        //         console.log("3");
        //     }
        // }


        // 付款方式選擇
        // var select2 = document.getElementsByTagName("select")[1];
        // var cash = document.getElementsByTagName("input")[6];
        // var card = document.getElementsByTagName("input")[7];
        // var card_date = document.getElementsByTagName("input")[8];
        // var card_cvv = document.getElementsByTagName("input")[9];
        // cash.style.display = "none";
        // cash.style.block = "none";
        // card.style.display = "none";
        // card.style.block = "none";
        // card_date.style.display = "none";
        // card_date.style.block = "none";
        // card_cvv.style.display = "none";
        // card_cvv.style.block = "none";

        // select2.onchange = function a() {
        //     var index2 = select2.selectedIndex;
        //     // 不可選擇"請選擇付款方式"
        //     if (index2 === 0) {
        //         console.log("no choice");
        //     } else if (index2 === 1) {
        //         // cash
        //         card.style.display = "none";
        //         card.style.block = "none";
        //         cash.style.display = "block";
        //         cash.setAttribute("value", "現金付款");
        //         cash.setAttribute("readonly", "true");

        //     } else {
        //         // card
        //         cash.style.display = "none";
        //         cash.style.block = "none";
        //         card.style.display = "block";
        //         card_date.style.display = "block";
        //         card_cvv.style.display = "block";
        //     }

        // }

        // 開立發票方式選擇
        // var select3 = document.getElementsByTagName("select")[2];
        // var two = document.getElementsByTagName("input")[10];
        // var three = document.getElementsByTagName("input")[11];
        // var phone = document.getElementsByTagName("input")[12];
        // two.style.display = "none";
        // two.style.block = "none";
        // three.style.display = "none";
        // three.style.block = "none";
        // phone.style.display = "none";
        // phone.style.block = "none";
        // select3.onchange = function a() {
        //     var index3 = select3.selectedIndex;
        //     // 不可選擇"請選擇開立發票方式"
        //     if (index3 === 0) {
        //         console.log("no choice");
        //     } else if (index3 === 1) {
        //         // two
        //         two.style.display = "block";
        //         two.setAttribute("value", "二聯式發票");
        //         two.setAttribute("readonly", "true");

        //         three.style.display = "none";
        //         three.style.block = "none";
        //         phone.style.display = "none";
        //         phone.style.block = "none";
        //     } else if (index3 === 2) {
        //         // three
        //         three.style.display = "block";

        //         two.style.display = "none";
        //         two.style.block = "none";
        //         phone.style.display = "none";
        //         phone.style.block = "none";
        //     } else {
        //         // phone
        //         phone.style.display = "block";

        //         two.style.display = "none";
        //         two.style.block = "none";
        //         three.style.display = "none";
        //         three.style.block = "none";
        //     }

        // }

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
                            <select name="ProductInfoDelivery" onChange={this.DeliveryChange} value={this.state.selectedValue}>
                                {/* op0 */}
                                <option value="0">請選擇運送方式</option>
                                {/* op1 */}
                                <option className="home" value="1">宅配到家</option>
                                {/* op2 */}
                                <option value="2">就近取貨</option>
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
                        <button className="ProductInfoNext" onclick="nextStep()">送出訂單</button>
                        {/* 11/7 */}
                        <button className="ProductInfoShopping" onclick="goShop()">繼續購物</button>
                    </div>
                    <Footer />
                </div>
            </body>
        );
    }
}

export default ProductInfo;