import React, { Component } from "react";

import ItemCount from "./ItemCount";

export default class InventoryItem extends Component {
  render() {
    const { item, handleAddToCart, handleCountUpdate } = this.props;
    return (
      <div className="list__item-container">
        <span className="list__item-name">{item.content}</span>
        <ItemCount count={item.count} handleCountUpdate={handleCountUpdate} />
        <button className="item_btn item__add-btn" onClick={handleAddToCart}>
          ADD
        </button>
      </div>
    );
  }
}
