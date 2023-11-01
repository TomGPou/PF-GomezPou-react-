import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = ({ cart, cleanCartAlert, deleteProductById, total }) => {
  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h3>Cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </div>
      ))}

      <div>
        <h2>El total a pagar es: ${total}</h2>
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>

        <Button variant="contained" onClick={cleanCartAlert}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
};

export default Cart;
