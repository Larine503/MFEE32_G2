import React, { Component } from 'react';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class Store extends Component {
    state = {
        'padding-top' : '100px' ,
    }
    render() {
        return (
            <body>
                <Index />
                <div  style={this.state}>
                    <h3>門市據點</h3>
                </div>
                <Footer />
            </body>
        );
    }
}

export default  Store;