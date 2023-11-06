import { Grid, Button, Container, Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import { FadeLoader } from "react-spinners";
import { customTheme } from "../../common/themeConfig/themeconfig";

const ItemList = ({ items }) => {
  return (
    <Container sx={{ minHeight: "73vh" }}>
      {/* <Button variant="contained" onClick={rellenarDb}>
        Rellenar
      </Button> */}

      {items.length === 0 ? (
        <Box
          sx={{
            height: "73vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FadeLoader
            color={customTheme.palette.primary.dark}
            cssOverride={{}}
          />
        </Box>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          sx={{
            my: "1vh",
            px: "20px",
          }}
        >
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </Grid>
      )}
    </Container>
  );
};

export default ItemList;
