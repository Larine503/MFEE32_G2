import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';



class Menu extends Component {
    state = {
        drinks: []
    }
    
    async componentDidMount() {
        var a = "奶茶系列奶茶推薦";
        var url = `http://localhost:8000/menu/${a}`;
        var fromServer = await axios.get(url);
        // console.log(fromServer.data);
        this.setState({ drinks: fromServer.data });
    }

    render() {
        return (
            <body>
                <Index />
                <div className="allMenuArea">
                    <div className="titleArea">
                        <div className="titlesText">全部飲品</div>
                    </div>
                    <div className="menuArea">
                        <div className='MTmenu'>
                            <div className='MTmenuTitleArea'>
                                <div className='MTmenuTitle'>
                                    奶茶系列<br />奶茶推薦
                                </div>
                            </div>
                            <div>
                                <ul className=''>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className='Tmenu'>
                            <div className='TmenuTitleArea'>
                                <div className='TmenuTitle'>
                                    茗品系列
                                </div>
                            </div>
                        </div>
                        <div className='TTmenu'>
                            <div className='TTmenuTitleArea'>
                                <div className='TTmenuTitle'>
                                    鮮奶系列<br />拿鐵系列
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/menu/TSerious">
                        <button className='SeriousBtn1'>
                            茗品系列
                        </button>
                    </a>
                </div>
                <div>
                    <a href="/menu/TTSerious">
                        <button className='SeriousBtn2'>
                            鮮奶系列<br />拿鐵系列
                        </button>
                    </a>
                </div>
            </body >
        );
    }
}

export default Menu;