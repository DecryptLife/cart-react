import React, { Component } from "react";

export default class DSHeader extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ds-header">
        <h1>{item}</h1>
      </div>
    );
  }
}
