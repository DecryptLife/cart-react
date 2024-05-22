const URL = "http://localhost:3000";

export const getCart = () => {
  // define your method to get cart data

  return fetch(`${URL}/cart`).then((res) => res.json());
};

export const deleteFromCart = (id) => {
  // define your method to delete an item in cart
  return fetch(`${URL}/cart/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const checkout = () => {
  // you don't need to add anything here
  return getCart().then((data) =>
    Promise.all(data.map((item) => deleteFromCart(item.id)))
  );
};
