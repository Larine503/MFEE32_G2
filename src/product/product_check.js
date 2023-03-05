import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';


import img1 from '../images/product/4.png';


class productCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 3
        };
    }
    state = {
        length: document.getElementsByClassName("product").length
    }
    style = {
        display: 'grid'
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
                <div className="ProductCheckContent">
                    <div className="ProductCheckProduct">
                        <div className="ProductCheckInfo">
                            <img src={img1} className="ProductCheckImg" alt=''/>
                            <p className='ProductCheckInfoP'>
                                雙面飲料提袋
                                <br />
                                款式 : 藍色(香吉士、羅賓)
                                <br />
                                數量 : 2
                            </p>
                            <div className="ProductCheckPrice">
                                <p className='ProductCheckPriceP'>NT$ 560</p>
                            </div>
                        </div>
                        <hr className='separate4' />
                        <div className="ProductCheckTotal">
                            <div className='ProductCheckTotalDiv ProductCheckTotal1'>
                                <h4 className='ProductCheckTotalTitle'>小計:</h4>
                                <p>NT$ 560</p>
                            </div>
                            <div className='ProductCheckTotalDiv ProductCheckTotal2'>
                                <h4 className='ProductCheckTotalTitle'>運費:</h4>
                                <p>NT$ 100</p>
                            </div>
                            <div className='ProductCheckTotalDiv ProductCheckTotal3'>
                                <h4 className='ProductCheckTotalTitle'>總計:</h4>
                                <p>NT$ 660</p>
                            </div>
                        </div>
                    </div>

                    <form className="ProductCheckInformation">
                        <fieldset className='ProductCheckFieldset'>
                            <legend className='ProductCheckLegend'>訂單資料</legend>
                            <div className='ProductCheckData1'>
                                <h4 className='ProductCheckH4'>訂單編號</h4>
                                <p className='ProductCheckP'>20230101123543</p>
                            </div>
                            <div className='ProductCheckData2'>
                                <h4 className='ProductCheckH4'>訂單完成時間</h4>
                                <p className='ProductCheckP'>2023/01/01 12:35:43</p>
                            </div>
                            <div className='ProductCheckData3'>
                                <h4 className='ProductCheckH4'>訂購人姓名</h4>
                                <p className='ProductCheckP'>王小新</p>
                            </div>
                            <div className='ProductCheckData4'>
                                <h4 className='ProductCheckH4'>訂購人電話</h4>
                                <p className='ProductCheckP'>0912345678</p>
                            </div>
                            <div className='ProductCheckData5'>
                                <h4 className='ProductCheckH4'>收購人姓名</h4>
                                <p className='ProductCheckP'>王小新</p>
                            </div>
                            <div className='ProductCheckData6'>
                                <h4 className='ProductCheckH4'>收購人電話</h4>
                                <p className='ProductCheckP'>0912345678</p>
                            </div>
                            <div className='ProductCheckData7'>
                                <h4 className='ProductCheckH4'>運送方式</h4>
                                <p className='ProductCheckP'>宅配到家</p>
                            </div>
                            <div className='ProductCheckData8'>
                                <h4 className='ProductCheckH4'>地址</h4>
                                <p className='ProductCheckP'>台中市台灣大道100號</p>
                            </div>
                            <div className='ProductCheckData9'>
                                <h4 className='ProductCheckH4'>付款方式</h4>
                                <p className='ProductCheckP'>現金</p>
                            </div>
                            <div className='ProductCheckData10'>
                                <h4 className='ProductCheckH4'>發票開立方式</h4>
                                <p className='ProductCheckP'>二聯式發票</p>
                            </div>
                            <div className='ProductCheckData11'>
                                <h4 className='ProductCheckH4'>備註</h4>
                                <p className='ProductCheckP'>放在警衛室</p>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <br />
                <Footer />
            </body>
        );
    }
}


export default productCheck;