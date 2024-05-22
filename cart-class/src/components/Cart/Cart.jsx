import React, { Component } from "react";
import "../Cart/cart.css";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    const { items, handleDelete } = this.props;

    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="text-color">CART</h1>
        </div>
        <div className="list-container">
          {items &&
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleDelete={() => handleDelete(item.id)}
              />
            ))}
        </div>
      </div>
    );
  }
}
