import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
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
              Ya tienes {initial} unidades en el carrito
            </Typography>
          )}
        </CardContent>

        <CardActions>
          {showCounter ? (
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              initial={initial}
            />
          ) : (
            <Link to="/cart">
              <Button>Terminar Compra</Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default ItemDetail;
