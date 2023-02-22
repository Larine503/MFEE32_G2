import React, { Component } from 'react';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class Menu extends Component {
    state = {
        'padding-top' : '100px' ,
    }
    render() {
        return (
            <body>
                <Index />
                <div  style={this.state}>
                    <h3>飲品菜單</h3>
                </div>
                <Footer />
            </body>
        );
    }
}

export default Menu;