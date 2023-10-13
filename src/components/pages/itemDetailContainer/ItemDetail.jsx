import CounterContainer from "../../common/counter/CounterContainer";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Container
      sx={{
        my: "20px",
        minHeight: "65vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          image={productSelected.imgUrl}
          title={productSelected.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productSelected.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {productSelected.price}
          </Typography>
        </CardContent>

        <CardActions>
          <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
        </CardActions>
      </Card>
    </Container>
  );
};

export default ItemDetail;
