import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';

import img1 from '../images/product/4.png';


class productCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }
    state = {
        length: document.getElementsByClassName("product").length
    }
    style = {
        display: 'grid'
    }



    CountNumber = (n) => {
        var a = 280;
        var text = document.getElementsByTagName("input")[0];
        var total = document.getElementsByTagName("p")[7];
        var sum = document.getElementsByTagName("p")[8];

        var count = parseInt(text.value);
        count += n;
        text.value = count;
        text.innerText = text.value;

        var price = parseInt(total.innerHTML);
        price = count * a;
        total.innerText = "NT$ " + price;
        sum.innerText = total.innerText;
        var btn = document.getElementsByClassName("CountBtn");
        var b;

        if (n === 1) {
            b = btn.length - 1;
            console.log(b);
        } else {
            b = btn.length - 2;
            console.log(b);
        }
    }


    ProductDelete = (n) => {
        this.ProductDelete2(n);
    }
    ProductDelete2(n) {
        var del = document.getElementsByClassName("ProductCartProduct");
        var newState = { ...this.state };
        del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
        newState.length -= 1;
        this.setState(newState);


        if (newState.length === 0) {
            this.Step(1);
        }
    }

    Step(n) {
        if (n === 1) {
            window.location.href = "/product";
        } else {
            window.location.href = "/product/step2";
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
            <body className='BodyProduct'>
                <Index />
                <Step StepColor1={step1ClassName} StepColor2={step2ClassName} StepColor3={step3ClassName} StepNameColor1={step1NameClassName} StepNameColor2={step2NameClassName} StepNameColor3={step3NameClassName}/>
                <div className="ProductCartContent">
                    <div className="ProductCartProduct" style={this.style}>
                        <img src={img1} className="ProductCartImg" alt='??????????????????' />
                        {/* p0 */}
                        <p className='ProductCartP'>
                            ??????????????????
                            <br />
                            ?????? : ??????(??????????????????)
                        </p>
                        <div className="ProductCartNum">
                            <h4 className="ProductCartNumTitle">??????</h4>
                            <div className="ProductCartNumChoose">
                                <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
                                {/* i0 */}
                                <input type="text" value="1" className='ProductCartText' />
                                <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
                            </div>
                        </div>
                        <div className="ProductCartMoney">
                            <h4 className="ProductCartMoneyTitle">??????</h4>
                            {/* p1 */}
                            <p className="ProductCartMoneyP">NT$ 280</p>
                        </div>
                        <button className='DeleteBtn' onClick={this.ProductDelete.bind(this, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill DeleteBtnSvg" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>
                    <br /><br />
                </div>


                <div className="ProductCartPrice">
                    <div className="ProductCartPriceDiv">
                        <h4 className="ProductCartPriceTitle">????????????(?????????)</h4>
                        <hr className='ProductCartPriceHr' />
                        {/* p4 */}
                        <p className='ProductCartPriceP'>NT$ 280</p>
                        <div className="ProductCartBtn">
                            <button className="ProductCartShopping" onClick={this.Step.bind(this, 1)}>????????????</button>
                            <button className="ProductCartNext" onClick={this.Step.bind(this, 2)}>?????????</button>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </body>
        );
    }
}


export default productCart;