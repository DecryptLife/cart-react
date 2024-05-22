import React, { Component } from "react";

export default class ItemDelete extends Component {
  render() {
    const { handleDelete } = this.props;
    return (
      <button className="item_btn cart__delete-btn" onClick={handleDelete}>
        DELETE
      </button>
    );
  }
}
