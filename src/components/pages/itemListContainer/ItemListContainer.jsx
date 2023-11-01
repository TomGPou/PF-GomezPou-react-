import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../../productList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const rellenarDb = () => {
  //   const productsCollection = collection(db, "products");

  //   products.forEach((elem) => {
  //     addDoc(productsCollection, elem);
  //   });
  // };

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let products = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(products);
    }),
      [categoryName];
  });

  return <ItemList items={items} />;
};

export default ItemListContainer;
