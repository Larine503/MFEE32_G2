import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';

import img1 from "../images/product/4.png";



class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '', // 選取的option值
            DeliveryBr: false,
            PayBr: false,
            InvoiceBr: false,
            currentPage: 2
        };
        this.DeliveryChange = this.DeliveryChange.bind(this); // 綁定DeliveryChange方法
        this.PayChange = this.PayChange.bind(this); // 綁定PayChange方法
        this.InvoiceChange = this.InvoiceChange.bind(this); // 綁定InvoiceChange方法
    }
    Style = {
        display: "none"
    }


    // 運送方式選擇
    DeliveryChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        var addressHome = document.getElementsByTagName("input")[4];
        var newStyle = { ...this.Style };
        newStyle.display = "block"
        if (event.target.value === "no") {
            alert("請選擇運送方式");
        } else if (event.target.value === "home") {
            // 宅配到家
            addressHome.setAttribute("style", newStyle);
            this.setState({DeliveryBr: true,});
        } else {
            // 就近取貨
            addressHome.setAttribute("style", newStyle);
            addressHome.setAttribute("value", "台中公益店 - 台中市公益路二段51號");
            addressHome.setAttribute("readonly", "true");
            this.setState({DeliveryBr: true,});
        }
        
    }

    // 付款方式選擇
    PayChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        var card = document.getElementsByTagName("input")[7];
        var cardDate = document.getElementsByTagName("input")[8];
        var cardCvv = document.getElementsByTagName("input")[9];
        var newStyle = { ...this.Style };
        newStyle.display = "block";
        if (event.target.value === "no") {
            alert("請選擇付款方式");
        } else if (event.target.value === "cash") {
            // 現金
            // cash.setAttribute("style", newStyle);  
        } else {
            // 信用卡
            card.setAttribute("style", newStyle);
            cardDate.setAttribute("style", newStyle);
            cardCvv.setAttribute("style", newStyle);
            this.setState({PayBr: true,});
        }
    }


    // 發票開立方式選擇
    InvoiceChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        var invoice = document.getElementsByTagName("input")[10];
        var newStyle = { ...this.Style };
        newStyle.display = "block"
        if (event.target.value === "no") {
            alert("請選擇發票開立方式");
        } else if (event.target.value === "two") {
            // 二聯式
            // invoice.setAttribute("style", newStyle);
        } else if (event.target.value === "three") {
            // 三聯式
            invoice.setAttribute("style", newStyle);
            invoice.setAttribute("placeholder", "發票格式: 12345678");
            this.setState({InvoiceBr: true,});
        } else {
            // 手機載具
            invoice.setAttribute("style", newStyle);
            invoice.setAttribute("placeholder", "載具格式: /AB1AB12");
            this.setState({InvoiceBr: true,});
        }
    }



    Step(n) {
        if (n === 1) {
            window.location.href = "/product";
        } else {
            window.location.href = "/product/step3";
        }
    }

    render() {
        const { currentPage } = this.state;
        const step1ClassName = currentPage >= 1 ? 'StepColor' : 'StepColor2';
        const step2ClassName = currentPage >= 2 ? 'StepColor' : 'StepColor2';
        const step3ClassName = currentPage >= 3 ? 'StepColor' : 'StepColor2';
        const step1NameClassName = currentPage >= 1 ? 'StepNameColor' : 'StepNameColor2';
        const step2NameClassName = currentPage >= 2 ? 'StepNameColor' : 'StepNameColor2';
        const step3NameClassName = currentPage >= 3 ? 'StepNameColor' : 'StepNameColor2';


        return (
            <body>
                <Index />
                <Step StepColor1={step1ClassName} StepColor2={step2ClassName} StepColor3={step3ClassName} StepNameColor1={step1NameClassName} StepNameColor2={step2NameClassName} StepNameColor3={step3NameClassName}/>
                <div className="ProductInfoContent">
                    <div className="ProductInfoProduct">
                        <div className="ProductInfo">
                            <img src={img1} alt="" className='ProductInfoImg' />
                            <p className='ProductInfoP'>
                                雙面飲料提袋
                                <br />
                                款式 : 藍色(香吉士、羅賓)
                                <br />
                                數量 : 2
                            </p>
                        </div>
                        <div className="ProductInfoPrice">
                            <h4 className='ProductInfoPriceTitle'>商品總價:</h4>
                            <p className='ProductInfoPriceP'>NT$ 560</p>
                        </div>
                        <hr className='separate3' />
                        <div className="ProductInfoTotal">
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle1'>小計:</h4>
                                <p className='ProductInfoTotalP1'>NT$ 560</p>
                            </div>
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle2'>運費:</h4>
                                <p className='ProductInfoTotalP2'>NT$ 100</p>
                            </div>
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle3'>總計:</h4>
                                <p className='ProductInfoTotalP3'>NT$ 660</p>
                            </div>
                        </div>
                    </div>
                    <form className="ProductInfoInformation">
                        <fieldset className="ProductInfoOrder ProductInfoFieldset">
                            <legend className='ProductInfoLegend'>訂購人資料</legend>
                            {/* 0 */}
                            <text className='ProductInfoInputTitle'>姓名 </text>
                            <input type="text" className='ProductInfoInput' value="王小新" readOnly/>
                            <br />
                            {/* 1 */}
                            <text className='ProductInfoInputTitle'>電話 </text>
                            <input type="tel" pattern="[0-9]{4}-[0-9]{6}" className='ProductInfoInput' value="0912345678" readOnly/>
                        </fieldset>
                        <br />
                        <fieldset className="ProductInfoReceive ProductInfoFieldset">
                            <legend className='ProductInfoLegend'>收購人資料</legend>
                            {/* 2 */}
                            <text className='ProductInfoInputTitle'>姓名 </text>
                            <input type="text" className='ProductInfoInput' />
                            <br />
                            {/* 3 */}
                            <text className='ProductInfoInputTitle'>電話 </text>
                            <input type="tel" pattern="[0-9]{4}-[0-9]{6}" className='ProductInfoInput' />
                            <br />
                            <text className='ProductInfoInputTitle'>運送方式 </text>
                            {/* <br /> */}
                            <select name="ProductInfoDelivery" onChange={this.DeliveryChange} className="ProductInfoSelect">
                                {/* op0 */}
                                <option value="no">請選擇運送方式</option>
                                {/* op1 */}
                                <option className="home" value="home">宅配到家</option>
                                {/* op2 */}
                                <option value="shop">就近取貨</option>
                            </select>
                            <br />
                            {/* 4 */}
                            <input type="text" className="home ProductInfoInput ProductInfoSelectInput" placeholder="請輸入地址" style={this.Style} />
                            {/* 5 */}
                            <input type="text" className="shop ProductInfoInput ProductInfoSelectInput" style={this.Style} />
                            {this.state.DeliveryBr && <br />}
                            <text className='ProductInfoInputTitle'>付款方式 </text>
                            {/* <br /> */}
                            <select name="pay" onChange={this.PayChange} className="ProductInfoSelect">
                                {/* op3 */}
                                <option value="no">請選擇付款方式</option>
                                {/* op4 */}
                                <option value="cash">現金</option>
                                {/* op5 */}
                                <option value="card">信用卡</option>
                            </select>
                            <br />
                            {/* 6 */}
                            <input type="text" className="cash ProductInfoInput ProductInfoSelectInput" style={this.Style} />
                            {/* 7 */}
                            <input type="text" className="card ProductInfoInput ProductInfoSelectInput" placeholder="請輸入卡號" style={this.Style} />
                            {/* 8 */}
                            {this.state.PayBr && <br />}
                            <input type="text" className="CardDate ProductInfoInput" placeholder="請輸入到期日" value="08/2024" style={this.Style} />
                            {/* 9 */}
                            {this.state.PayBr && <br />}
                            <input type="text" className="CardCvv ProductInfoInput" placeholder="請輸入交易3碼" value="123" style={this.Style} />
                            {this.state.PayBr && <br />}
                            <text className='ProductInfoInputTitle'>發票開立方式 </text>
                            <select name="invoice" onChange={this.InvoiceChange} className="ProductInfoSelect">
                                {/* op6 */}
                                <option value="no">請選擇發票開立方式</option>
                                {/* op7 */}
                                <option value="two">二聯式發票</option>
                                {/* op8 */}
                                <option value="three">三聯式發票</option>
                                {/* op9 */}
                                <option value="phone">手機載具</option>
                            </select>
                            <br />
                            {/* 10 */}
                            <input type="text" className="1 ProductInfoInput" style={this.Style} />
                            {/* 11 */}
                            <input type="text" className="2 ProductInfoInput" style={this.Style} />
                            {/* 12 */}
                            <input type="text" className="3 ProductInfoInput" placeholder="載具格式: /AB1AB12" style={this.Style} />
                            {this.state.InvoiceBr && <br />}
                            <text className='ProductInfoInputTitle'>備註</text>
                            <br />
                            {/* 12 */}
                            <input type="text" className="ProductInfoComment ProductInfoInput" />
                        </fieldset>
                    </form>

                    <div className="ProductInfoBtn">
                        {/* 10/6 */}
                        <button className="ProductInfoNext" onClick={this.Step.bind(this, 2)}>送出訂單</button>
                        {/* 11/7 */}
                        <button className="ProductInfoShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
                    </div>
                </div>
                <br /><br />
                <Footer />
            </body>
        );
    }
}

export default ProductInfo;