import CounterContainer from "../../common/counter/CounterContainer";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
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
          <Typography variant="body1" color="text.secondary">
            $ {productSelected.price}
          </Typography>
          {initial && (
            <Typography variant="body2" color="text.secondary">
              Ya tienes {initial} de este producto en el carrito
            </Typography>
          )}
        </CardContent>

        <CardActions>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </CardActions>
      </Card>
    </Container>
  );
};

export default ItemDetail;
