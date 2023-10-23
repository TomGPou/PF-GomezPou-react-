import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import { ClipLoader } from "react-spinners";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <ClipLoader cssOverride={{}} />
      ) : (
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
      )}
    </>
  );
};

export default ItemList;
