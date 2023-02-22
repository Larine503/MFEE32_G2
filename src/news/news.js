import React, { Component } from 'react';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

class News extends Component {
    state = {
        'padding-top' : '100px' ,
    }
    render() {
        return (
            <body>
                <Index />
                <div  style={this.state}>
                    <h3>最新消息</h3>
                </div>
                <Footer />
            </body>
        );
    }
}

export default News;