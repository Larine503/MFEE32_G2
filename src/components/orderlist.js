import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import Productlist from './productlist';
import Drinklist from './drinklist';

class OderList extends Component {
    state = {}
    render() {
        return (
            <div className="orderList-main">
                <div className="orderList-top">
                    <a href="/member/orderList/drinklist"><button className="orderList-c">線上訂餐清單</button></a>
                    <a href="/member/orderList/productlist"><button className="orderList-c">周邊選購清單</button></a>
                </div>
                <BrowserRouter>
                    <div >
                        <Switch>
                            <Route path="/member/orderList/drinklist" component={Drinklist} exact />
                            <Route path="/member/orderList/productlist" component={Productlist}  />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default OderList;