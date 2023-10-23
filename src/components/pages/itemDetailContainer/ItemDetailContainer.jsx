import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../../productList";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);
  console.log(totalQuantity);

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

    // setTimeout(() => {
    //   navigate("/cart");
    // }, 500);
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
