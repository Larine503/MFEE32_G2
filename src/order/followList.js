import React, { Component } from 'react';
import AniIcon from '../images/order/ani_icon.png';
import '../css/order.css';


class FollowList extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <body>
                <div style={this.state}>
                    <h3>線上訂餐</h3>
                    <a href="/order/billAll" class="followMe">
                        <div class="followMylist" >
                            <img src={AniIcon} alt="" />
                            <p class="followText">訂購清單</p>
                        </div>
                    </a>
                </div>
            </body>
        );
    }
}

export default FollowList;