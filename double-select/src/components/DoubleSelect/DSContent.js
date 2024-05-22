import React, { Component } from "react";

export default class DSContent extends Component {
  render() {
    const {
      items,
      selected_category,
      handleItemChange,
      handleCategoryChange,
      selected_item,
    } = this.props;

    console.log(items);
    return (
      <div className="ds-content-container">
        <div className="select-container">
          <span>Category</span>
          <select value={selected_category} onChange={handleCategoryChange}>
            {Object.keys(items).map((key) => {
              return (
                <option value={key} key={key}>
                  {key}
                </option>
              );
            })}
          </select>
        </div>
        <div className="select-container">
          <span>Items</span>
          <select value={selected_item} onChange={handleItemChange}>
            {items[selected_category].map((element) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
