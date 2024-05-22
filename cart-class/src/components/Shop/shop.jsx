import React, { Component } from "react";
import Inventory from "../Inventory/Inventory";
import Cart from "../Cart/Cart";
import "../Shop/shop.css";
import { addToCart, getInventory, updateCart } from "../../APIs/inventoryAPI";
import { checkout, deleteFromCart, getCart } from "../../APIs/cartAPI";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      cart: [],
    };
  }

  async componentDidMount() {
    try {
      const inventoryData = await getInventory();

      const cartData = await getCart();
      this.setState({
        inventory: inventoryData.map((inv_item) => {
          return {
            ...inv_item,
            count: 0,
          };
        }),
        cart: cartData,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleCountUpdate = (e, id) => {
    const classname = e.target.className;
    console.log(classname);
    if (classname === "item__btn-add") {
      console.log("add btn clicked");
      this.setState({
        ...this.state,
        inventory: this.state.inventory.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else return item;
        }),
      });
    } else if (classname === "item__btn-remove") {
      this.setState({
        ...this.state,
        inventory: this.state.inventory.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: Math.max(0, item.count - 1),
            };
          } else return item;
        }),
      });
    }
  };

  handleAddToCart = async (id) => {
    const itemExists = this.state.cart.find(
      (item) => Number(item.id) === Number(id)
    );

    try {
      // item already in cart? - update
      // new item

      if (itemExists) {
        const prevCount = this.state.cart.find(
          (item) => Number(id) === Number(item.id)
        ).count;

        const toAdd = this.state.inventory.find(
          (item) => Number(id) === Number(item.id)
        ).count;

        if (Number(toAdd) > 0) {
          try {
            const resp = await updateCart(id, prevCount + toAdd);

            console.log(resp);

            this.setState({
              ...this.state,
              cart: this.state.cart.map((item) => {
                if (Number(item.id) === Number(resp.id)) {
                  return {
                    ...item,
                    count: resp.count,
                  };
                } else {
                  return item;
                }
              }),
            });
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        // count > 0
        const newItem = this.state.inventory.find(
          (item) => Number(item.id) === Number(id)
        );

        if (newItem.count > 0) {
          const resp = await addToCart(newItem);

          this.setState({
            ...this.state,
            cart: [...this.state.cart, resp],
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleDelete = async (id) => {
    try {
      await deleteFromCart(id);

      this.setState({
        ...this.state,
        cart: this.state.cart.filter((item) => {
          return item.id !== id;
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleCheckout = async () => {
    try {
      await checkout();

      this.setState({
        ...this.state,
        cart: [],
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="container">
        <div className="text-color container-header">
          <h1>BENSON'S MART</h1>
        </div>
        <div className="shop-container">
          {this.state.inventory && (
            <Inventory
              items={this.state.inventory}
              handleCountUpdate={this.handleCountUpdate}
              handleAddToCart={this.handleAddToCart}
              handleUpdateCart={this.handleUpdateCart}
            />
          )}

          <Cart items={this.state.cart} handleDelete={this.handleDelete} />
        </div>
        <button className="cart__checkout-btn" onClick={this.handleCheckout}>
          CHECKOUT
        </button>
      </div>
    );
  }
}
