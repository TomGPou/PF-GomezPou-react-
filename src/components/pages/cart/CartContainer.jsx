import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Sguro quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "", "success");
      }
    });
  };

  return (
    <Cart
      cart={cart}
      clearCartAlert={clearCartAlert}
      deleteProductById={deleteProductById}
      total={total}
    />
  );
};

export default CartContainer;
