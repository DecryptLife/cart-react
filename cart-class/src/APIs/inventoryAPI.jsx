const URL = "http://localhost:3000";

export const getInventory = () => {
  return fetch(`${URL}/inventory`).then((res) => res.json());
};

export const addToCart = (inventoryItem) => {
  // define your method to add an item to cart
  return fetch(`${URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inventoryItem),
  }).then((res) => res.json());
};

export const updateCart = (id, newAmount) => {
  // define your method to update an item in cart
  return fetch(`${URL}/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count: newAmount }),
  }).then((res) => res.json());
};
