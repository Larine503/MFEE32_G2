import React, { Component } from 'react';
import '../css/index.css';

class PassWord extends Component {
    state = {  } 
    render() { 
        return (
            <div className="dataImg">
                <div className="dataImg-d">
                    <div className="passwordForm">
                        <form className="passwordForm-T" action="">
                            <label for="">原本密碼:<br/>
                                <input type="text"/></label><br/>
                            <label for="">變更密碼:<br/>
                                <input type="text"/></label><br/>
                            <label for="">新密碼:<br/>
                                <input type="text"/></label><br/>
                            <div className="passwordForm-D">
                                <button className="button ">
                                    確認
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default PassWord;