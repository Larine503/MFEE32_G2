import React, { Component } from 'react';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class product extends Component {
    state = {
        'padding-top' : '100px' ,
    }
    render() {
        return (
            <body>
                <Index />
                <div  style={this.state}>
                    <h3>周邊產品</h3>
                </div>
                <Footer />
            </body>
        );
    }
}

export default product;