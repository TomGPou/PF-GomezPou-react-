import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        my: "1vh",
        px: "20px",
        minHeight: "70vh",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default ItemList;
