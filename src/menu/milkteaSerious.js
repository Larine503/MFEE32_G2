import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import 紅茶拿鐵 from '../images/drink/TT/紅茶拿鐵.png';
// import 茶凍奶茶 from '../images/drink/MT/茶凍奶茶.png';
// import 珍珠奶茶 from '../images/drink/MT/珍珠奶茶.png';
// import 烏龍奶茶 from '../images/drink/MT/烏龍奶茶.png';
// import 特級奶綠 from '../images/drink/MT/特級奶綠.png';
// import 仙草凍奶茶 from '../images/drink/MT/仙草凍奶茶.png';
// import 椰果奶茶 from '../images/drink/MT/椰果奶茶.png';
// import 布丁奶茶 from '../images/drink/MT/布丁奶茶.png';
// import 暗黑水晶奶茶 from '../images/drink/MT/暗黑水晶奶茶.png';
// import 蜂蜜奶茶 from '../images/drink/MT/蜂蜜奶茶.png';
// import 芝麻奶茶 from '../images/drink/MT/芝麻奶茶.png';
import AllDriksButton from '../menu/allDriksButton.js';


class MilkteaSerious extends Component {
    state = {
        'padding-top': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <div>
                    <div className='drinksPicture'>
                        <img src={紅茶拿鐵} alt='' />
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
                            <div className="milkTea_title">鮮奶/拿鐵系列</div>
                        </div>
                        <div className="drinks_menu">
                            <ul className="cell_drinkList">
                                <li className="cell_1">
                                    <div className="cell_drink_title">
                                        原鄉四季
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
                    </div>
                    <div>
                        <a href="/menu/teaSerious">
                            <button className='teaSerious'>
                                茗品系列
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="/menu/milkteaSerious">
                            <button className='milkteaSerious'>
                            奶茶系列/奶茶推薦
                            </button>
                        </a>
                    </div>
                </div >
                <AllDriksButton />
            </body >
        );
    }
}

export default MilkteaSerious;