import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../../productList";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const id = 3;

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(product);
      // reject("error")
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log("este es el producto agregado: ", obj);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
