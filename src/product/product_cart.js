import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';



import img1 from '../images/product/3.png';
import img2 from '../images/product/4.png';





class productCart extends Component {
    state = {
        length: document.getElementsByClassName("product").length
    }
    style = {
        display: 'grid'
    }



    CountNumber = (n) => {
        var text = document.getElementsByTagName("input")[0];
        var count = parseInt(text.value);
        count += n;
        text.value = count;
        text.innerText = text.value;



        var btn = document.getElementsByClassName("CountBtn");
        // for (var i = 0; i < btn.length; i++) {


        // }
        var a;

            if (n === 1) {
                a = btn.length - 1;
                console.log(a);
            } else {
                a = btn.length - 2;
                console.log(a);
            }

    }


    ProductDelete = (n) => {
        this.ProductDelete2(n);
    }
    ProductDelete2(n) {
        var del = document.getElementsByClassName("product");
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
        return (
            <body className='bodyProduct'>
                <Index />
                <Step />
                <div className="ProductCartContent">
                    <div className="product" style={this.style}>
                        <img src={img1} className="product_img" alt='雙面飲料提袋' />
                        {/* p0 */}
                        <p className='product_cart_p'>
                            雙面飲料提袋
                            <br />
                            款式 : 紅色(魯夫、娜美)
                        </p>
                        <div className="num">
                            <h4 className="num_title">數量</h4>
                            <div className="num_choose">
                                <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
                                {/* i0 */}
                                <input type="text" value="1" className='ProductIntroText' />
                                <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
                            </div>
                        </div>
                        <div className="ProductCartMoney">
                            <h4 className="money_title">小計</h4>
                            {/* p1 */}
                            <p className="p1">33</p>
                        </div>
                        <button className='btn_delete' onClick={this.ProductDelete.bind(this, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>
                    <br /><br />


                    <div className="product" style={this.style}>
                        <img src={img2} className="product_img" alt='托特包' />
                        {/* p2 */}
                        <p className='product_cart_p'>
                            托特包
                        </p>
                        <div className="num">
                            <h4 className="num_title">數量</h4>
                            <div className="num_choose">
                                <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
                                {/* i1 */}
                                <input type="text" value="1" className='ProductIntroText' />
                                <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
                            </div>
                        </div>
                        <div className="ProductCartMoney">
                            <h4 className="money_title">小計</h4>
                            {/* p3 */}
                            <p>00</p>
                        </div>
                        <button className='btn_delete' onClick={this.ProductDelete.bind(this, 2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>

                </div>


                <div className="ProductCartPrice">
                    <div>
                        <h4>訂單總計(未含運)</h4>
                        <hr />
                        {/* p4 */}
                        <p>99</p>
                        <div className="ProductCartBtn">
                            <button className="ProductCartShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
                            <button className="ProductCartNext" onClick={this.Step.bind(this, 2)}>下一步</button>
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