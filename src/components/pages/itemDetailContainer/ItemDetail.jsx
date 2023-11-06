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
  Box,
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
        py: 2,
        minHeight: "73vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ height: "100%", display: { xs: "block", sm: "flex" } }}>
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          image={productSelected.imgUrl}
          title={productSelected.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productSelected.name}
            </Typography>
            <Typography variant="subtitle2">
              {productSelected.description}
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
        </Box>
      </Card>
    </Container>
  );
};

export default ItemDetail;
