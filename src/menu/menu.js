import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import 仙草凍奶茶 from '../images/drink/MT01/仙草凍奶茶.png';


class Menu extends Component {
    state = {
        'padding-top': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <main>
                    <div className='drinksPicture'>
                        <img src={仙草凍奶茶} alt='' />
                        <div className="topping_content">
                            <div className="topping_title">
                                加料
                            </div>
                            <ul className='toppingText'>
                                <li>珍珠</li>
                                <li>粉圓</li>
                                <li>QQ</li>
                                <li>布丁</li>
                                <li>仙草凍</li>
                                <li>暗黑水晶</li>
                                <li>蘆薈</li>
                                <li>冰淇淋</li>
                                <li>茉莉茶凍</li>
                                <li>粉條</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu_area">
                        <div className="milkTea_title_area">
                            <div className="milkTea_title">奶茶系列/奶茶推薦</div>
                        </div>
                        <div className="drinks_menu">
                            <ul className="cell_drinkList">
                                <li className="cell_1">
                                    <div className="cell_drink_title">
                                        粉條奶茶
                                    </div>
                                    <div className="cell_line"></div>
                                    <div className="cell_drink_note">
                                        醲醇芳香的「錫蘭奶紅」，加入爽口滑順的粉條。
                                    </div>
                                </li>
                                <li className="cell_2">
                                    <div className="cell_drink_title">
                                    茶凍奶綠
                                    </div>
                                    <div className="cell_line"></div>
                                    <div className="cell_drink_note">
                                    濃醇的「特級奶綠」，加入滑嫩Q彈的茉莉香綠茶凍。
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button>
                                茗茶系列
                            </button>
                        </div>
                    </div>
                </main>

                <Footer />
            </body>
        );
    }
}

export default Menu;