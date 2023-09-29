import { Container } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <Container>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default ItemList;
