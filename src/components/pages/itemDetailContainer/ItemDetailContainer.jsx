import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../../productList";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState(true);
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(product);
      // reject("error")
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });

    setShowCounter(false);
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
      showCounter={showCounter}
    />
  );
};

export default ItemDetailContainer;
