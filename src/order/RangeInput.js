import React, { Component } from 'react';

const valueToText =
{
    0: '無糖',
    2: '微糖',
    4: '半糖',
    6: '少糖',
    8: '全糖',
}

class RangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 8 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { label, min, max, step } = this.props;
        const { value } = this.state;

        return (
            <div>
                <label htmlFor="rangeInput">{label}</label>
                <input
                    type="range"
                    id="rangeInput"
                    name="rangeInput"
                    min={min}
                    max={max}
                    value={this.state.value}
                    step={step}
                    onChange={this.handleChange}
                />
                <span>{valueToText[value] && valueToText[value]}</span>
            </div>
        );
    }
}

export default RangeInput;