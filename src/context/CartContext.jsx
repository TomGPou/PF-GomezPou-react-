import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

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
      setLS("cart", newCart);
    } else {
      setCart([...cart, item]);
      setLS("cart", [...cart, item]);
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

  const cleanCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteProductById = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    setLS("cart", newArr);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    cleanCart,
    deleteProductById,
    getQuantityById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
