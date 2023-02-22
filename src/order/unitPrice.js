import React, { Component } from 'react';

class UnitPrice extends Component {
  state = {
    qty: 0,
    unitPrice: 30,
    totalAmount: 0
    // other state properties
  }
  handlePlusClick = () => {
    this.setState(prevState => ({
      qty: prevState.qty + 1,
    }), this.calculateTotalAmount);
  };

  handleMinusClick = () => {
    if (this.state.qty > 0) {
      this.setState(prevState => ({
        qty: prevState.qty - 1,
      }),this.calculateTotalAmount);
    }
  };
  calculateTotalAmount = () => {
    const totalAmount = this.state.unitPrice * this.state.qty;
    this.setState({ totalAmount });
  }

  handleUnitPriceChange = (event) => {
    this.setState({ unitPrice: event.target.value }, this.calculateTotalAmount);
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value }, this.calculateTotalAmount);
  }
  render() {
    return (
      <div>
        杯數:
        <div className="cupCount">
        <input
          type="button"
          value="-"
          className="minusBtn"
          onClick={this.handleMinusClick}
        />
        <input
          type="text"
          name="quantity"
          value={this.state.qty}
          className="qtyNum"
          readOnly
        />
        <input
          type="button"
          value="+"
          className="plusBtn"
          onClick={this.handlePlusClick}
        />
      </div>
        <p>單價: {this.state.unitPrice}元</p>
        <p>金額: {this.state.totalAmount}元</p>
      </div>
    );
  }
}
export default UnitPrice;