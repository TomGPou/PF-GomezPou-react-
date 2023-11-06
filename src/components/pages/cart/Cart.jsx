import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = ({ cart, cleanCartAlert, deleteProductById, total }) => {
  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "73vh",
      }}
    >
      <Card>
        {cart.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "space-around" },
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={product.imgUrl}
              title={product.name}
              sx={{
                height: "15vh",
                objectFit: "contain",
                width: "auto",
              }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1">{product.name}</Typography>
              <Typography variant="subtitle2">
                Cantidad: {product.quantity}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                py: 1,
              }}
            >
              <Typography variant="subtitle2">
                Valor: {product.quantity} x ${product.price} = $
                {product.quantity * product.price}
              </Typography>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteForeverIcon />
              </IconButton>
            </CardContent>
            <Divider sx={{ width: "100%" }} />
          </Box>
        ))}
      </Card>

      <Card
        sx={{
          mt: 2,
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">El total a pagar es: ${total}</Typography>
        <Link to="/checkout">
          <Button variant="outlined">Finalizar compra</Button>
        </Link>

        <Button sx={{ mt: 1 }} variant="outlined" onClick={cleanCartAlert}>
          Vaciar carrito
        </Button>
      </Card>
    </Container>
  );
};

export default Cart;
