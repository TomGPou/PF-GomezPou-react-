import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let exist = isInCart(item.id);
    if (exist) {
      let newCart = cart.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, quantity: item.quantity };
        } else {
          return elem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const getQuantityById = (id) => {
    let product = cart.find((elem) => elem.id === id);
    return product?.quantity;
  };

  const isInCart = (id) => {
    let exist = cart.some((elem) => elem.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = () => {};

  let data = { cart, addToCart, clearCart, deleteProduct, getQuantityById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
