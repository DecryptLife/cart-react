import React, { Component } from "react";
import DSContent from "./DSContent";
import DSHeader from "./DSHeader";
import items from "../../db/items";

export default class DoubleSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      category: "",
      items: {},
    };
  }

  componentDidMount() {
    console.log("In component did mount");
    const select_items = items.reduce((acc, curr) => {
      const { name, category } = curr;

      // check if category exist
      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(name);

      return acc;
    }, {});

    const initialCategory = Object.keys(select_items)[0];
    const initialItem = select_items[initialCategory][0];

    this.setState({
      items: select_items,
      category: initialCategory,
      item: initialItem,
    });
  }

  handleCategoryChange = (e) => {
    const newCategory = e.target.value;

    if (this.state.category !== newCategory) {
      this.setState({
        ...this.state,
        category: newCategory,
        item: this.state.items[newCategory][0],
      });
    }
  };

  handleItemChange = (e) => {
    const newItem = e.target.value;

    if (this.state.item !== newItem) {
      this.setState({
        ...this.state,
        item: newItem,
      });
    }
  };
  render() {
    console.log("Test: ", this.state.items);
    return (
      <div className="ds-container">
        <DSHeader item={this.state.item} />
        {Object.keys(this.state.items).length > 0 && (
          <DSContent
            items={this.state.items}
            handleCategoryChange={this.handleCategoryChange}
            handleItemChange={this.handleItemChange}
            selected_category={this.state.category}
            selected_item={this.state.item}
          />
        )}
      </div>
    );
  }
}
