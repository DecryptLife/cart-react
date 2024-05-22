import React, { Component } from "react";
import "../Inventory/inventory.css";
import InventoryItem from "./InventoryItem";
import PaginationBtns from "../Pagination/PaginationBtns";

export default class Inventory extends Component {
  render() {
    const {
      items,
      handleCountUpdate,
      handleAddToCart,
      handleUpdateCart,
      inventoryPaginated,
      handleDisplayPage,
      currentPage,
    } = this.props;

    console.log("Paginated: ", inventoryPaginated);
    return (
      <div className="inventory-container">
        <h1 className="text-color">INVENTORY</h1>
        <div className="list-container">
          {inventoryPaginated &&
            inventoryPaginated.map((item) => {
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
        {items && (
          <PaginationBtns
            items={items}
            itemsPerPage={3}
            handleDisplayPage={handleDisplayPage}
            currentPage={currentPage}
          />
        )}
      </div>
    );
  }
}
