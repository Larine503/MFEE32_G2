import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import LocaBox from './locaBox';
import LocaBox1 from './locaBox1';
import Drinktab from './drinktab';


class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            takeOut:<LocaBox />,
            sendTO:<LocaBox1 />
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    handleClick(e){
        alert(this.props.value);
       
    }
    render() {
        return (
            <body>
                <Index />
                <br />
                <div style={this.state}>
                    <h3>線上訂餐</h3>
                    <section>
                        <br />
                        <div className="contentBox1">
                            <div className="contentBox">
                                <div className="contentIn">
                                    <a href="/" id="outMe">
                                        <button className="btnM btnR getBtn" onClick={this.handleClick}>
                                            <span>外送</span>
                                            <div className="border btnR"></div>
                                        </button>
                                    </a>
                                    <a href="#inMe">
                                        <button className="btnM btnR" id="inMe">
                                            <span>自取</span>
                                            <div className="border btnR getBtn"></div>
                                        </button>
                                    </a>
                                </div>
                                <div className="locaBox">
                                    <LocaBox />
                                </div>
                            </div>
                        </div>
                        <Drinktab />
                    </section>
                    <br />
                </div>
                <Footer />
            </body>
        );
    }
    // okClick = async() => {
    //     // console.log(this.state.todoItem);
    //     var fromServer = await axios.put(
    //     "http://localhost:8800/order/goOder",
    //     this.state.orderInfo
    //     )
    // window.location = "/"
    // console.log(this.state.todoItem);
    // return;
    // }
}

export default Order;