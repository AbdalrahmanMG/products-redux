import { ICart } from "../interfaces";

export const addItemToShoppingCart = (cartItems: ICart[], product: ICart) => {
  const exists = cartItems.find((item) => item.id === product.id);

  if (exists) {
    return cartItems.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
  }
  return [...cartItems, {...product, qty: 1}]
};
