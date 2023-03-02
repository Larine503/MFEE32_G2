import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from '../components/product_step.js';


import img1 from '../images/product/20221115event01.jpg';



class productCheck extends Component {
    state = {
        length: document.getElementsByClassName("product").length
    }
    style = {
        display: 'grid'
    }


    render() {
        return (
            <body className='bodyProduct'>
                <Index />
                <Step />
                <div className="content">
                    <div className="product">
                        <div className="product_info">
                            <img src={img1} />
                            <p>
                                雙面飲料提袋
                                <br />
                                款式 : 紅色(魯夫、娜美)
                                <br />
                                數量 : 2
                            </p>
                            <div className="price">
                                <p>NT$ 560</p>
                            </div>
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

                    <form className="information">
                        <fieldset>
                            <legend>訂單資料</legend>
                            <h4>訂單編號</h4>
                            <p>20230123132537</p>
                            <h4>訂單完成時間</h4>
                            <p>2023/01/23 13:25:37</p>
                            <h4>訂購人姓名</h4>
                            <p>王大明</p>
                            <h4>訂購人電話</h4>
                            <p>0912-345678</p>
                            <h4>收購人姓名</h4>
                            <p>王小美</p>
                            <h4>收購人電話</h4>
                            <p>0909-111222</p>
                            <h4>運送方式</h4>
                            <p>宅配到家</p>
                            <h4>地址</h4>
                            <p>台中市公益路二段51號</p>
                            <h4>付款方式</h4>
                            <p>現金</p>
                            <h4>發票開立方式</h4>
                            <p>二聯式發票</p>
                            <h4>備註</h4>
                            <p>放在警衛室</p>
                        </fieldset>
                    </form>
                </div>
                <center><button className="delete" onclick="deleteOrder()">取消訂單</button></center>
                <Footer />
            </body>
        );
    }
}


export default productCheck;