import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return <Cart cart={cart} clearCart={clearCart} />;
};

export default CartContainer;
