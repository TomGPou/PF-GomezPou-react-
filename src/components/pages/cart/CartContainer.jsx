import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, cleanCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const cleanCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        cleanCart();
        Swal.fire("Carrito vaciado", "", "success");
      }
    });
  };

  return (
    <Cart
      cart={cart}
      cleanCartAlert={cleanCartAlert}
      deleteProductById={deleteProductById}
      total={total}
    />
  );
};

export default CartContainer;
