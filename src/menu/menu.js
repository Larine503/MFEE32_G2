import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
// import '../css/_css/bootstrap.css';
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
                <div style={this.state}>
                    <h3>飲品菜單</h3>
                </div>
                <main>
                    <div class="row">
                        <div class="col-3 drinksPicture">
                            <div>
                                <img src={仙草凍奶茶} alt=''/>
                            </div>
                            <div class="topping_content">
                                <div class="topping_title">
                                    加料
                                </div>
                                <div>
                                    <p>珍珠</p>
                                    <div>粉圓</div>
                                    <div>QQ</div>
                                    <div>布丁</div>
                                    <div>仙草凍</div>
                                    <div>暗黑水晶</div>
                                    <div>蘆薈</div>
                                    <div>冰淇淋</div>
                                    <div>茉莉茶凍</div>
                                    <div>粉條</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 menu_area">
                            <div class="milkTea_title_area">
                                <div class="milkTea_title">奶茶系列/奶茶推薦</div>
                            </div>
                            <div class="drinks_menu">
                                <ul class="cell_drinkList">
                                    <li class="cell">
                                        <div class="cell_drink_title">
                                            粉條奶茶
                                        </div>
                                        <div class="cell_line"></div>
                                        <div class="cell_drink_note">
                                            醲醇芳香的「錫蘭奶紅」，加入爽口滑順的粉條，爽口對味。
                                        </div>
                                    </li>
                                    <li class="cell">
                                        <div class="cell_drink_title">
                                            粉條奶茶
                                        </div>
                                        <div class="cell_line"></div>
                                        <div class="cell_drink_note">
                                            醲醇芳香的「錫蘭奶紅」，加入爽口滑順的粉條，爽口對味。
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        );
    }
}

export default Menu;