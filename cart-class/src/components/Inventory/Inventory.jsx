import React, { Component } from "react";
import "../Inventory/inventory.css";
import InventoryItem from "./InventoryItem";

export default class Inventory extends Component {
  render() {
    const { items, handleCountUpdate, handleAddToCart, handleUpdateCart } =
      this.props;
    return (
      <div className="inventory-container">
        <h1 className="text-color">INVENTORY</h1>
        <div className="list-container">
          {items &&
            items.map((item) => {
              return (
                <InventoryItem
                  key={item.id}
                  item={item}
                  handleCountUpdate={(e) => handleCountUpdate(e, item.id)}
                  handleAddToCart={() => handleAddToCart(item.id)}
                  handleUpdateCart={() => handleUpdateCart(item.id)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
