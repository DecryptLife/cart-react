import React, { Component } from "react";
import ItemDelete from "./ItemDelete";

export default class CartItem extends Component {
  render() {
    const { item, handleDelete } = this.props;
    return (
      <div className="list__item-container">
        <span>{item.content}</span>x<span>{item.count}</span>
        <ItemDelete handleDelete={handleDelete} />
      </div>
    );
  }
}
