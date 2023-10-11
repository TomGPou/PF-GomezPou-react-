import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        my: "10px",
        px: "20px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default ItemList;
