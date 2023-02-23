import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import drinkA from '../images/order/A.png';
import BackTo from '../images/order/back.png';
import DrinkMenu from './drinkMenu';
import FollowList from './followList';


class DrinkList extends Component {
    state = {
    }
    render() {
        return (
            <body>
                <Index />
                <div style={this.state}>
                    <section>
                    <FollowList />
                        <div className="dkcontentBox">
                            <div className="dkcontentBox1">
                                <img src={drinkA} alt="" className="hereDrink" />
                                <div className="contentInD">
                                    <h2>茗品系列</h2>
                                    <p>鮮熱茶汁，濃郁醇厚，搭配半月型自製衛生冰塊，堅持以調酒杯現場手工沖泡、調製。</p>
                                    <a href="/order/goOrder">
                                        <button className="dkbtnM btnR">
                                            <img src={BackTo} alt="" />
                                            &nbsp;
                                            <span>返回</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />
                    </section>
                    <DrinkMenu />
                    
                </div>
                <Footer />
            </body>
        );
    }
}

export default DrinkList;