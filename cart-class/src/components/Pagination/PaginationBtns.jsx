import React, { Component } from "react";

export default class PaginationBtns extends Component {
  render() {
    const { items, handleDisplayPage, itemsPerPage, currentPage } = this.props;

    const numOfPages = Math.ceil(items.length / itemsPerPage);

    const buttons = [];
    for (let i = 1; i <= numOfPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handleDisplayPage(i - 1)}>
          {i}
        </button>
      );
    }

    const handleButtonClicked = (e) => {
      const classname = e.target.className;

      if (classname === "pagination__prev-btn") {
        handleDisplayPage(currentPage - 1);
      } else if (classname === "pagination__next-btn") {
        handleDisplayPage(currentPage + 1);
      }
    };

    return (
      <div className="pagination__btns-container">
        <button
          className="pagination__prev-btn"
          onClick={(e) => handleButtonClicked(e)}
        >
          Prev
        </button>
        {buttons}
        <button
          className="pagination__next-btn"
          onClick={(e) => handleButtonClicked(e)}
        >
          Next
        </button>
      </div>
    );
  }
}
