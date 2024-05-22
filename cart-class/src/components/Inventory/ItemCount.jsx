import React, { Component } from "react";

export default class ItemCount extends Component {
  render() {
    const { handleCountUpdate, count } = this.props;
    return (
      <div className="item__action-btns">
        <button className="item__btn-remove" onClick={handleCountUpdate}>
          -
        </button>
        <span>{count}</span>
        <button className="item__btn-add" onClick={handleCountUpdate}>
          +
        </button>
      </div>
    );
  }
}
