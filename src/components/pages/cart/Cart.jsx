import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart }) => {
  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>Cantidad: {product.quantity}</h2>
        </div>
      ))}

      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>

      <Button variant="contained" onClick={clearCart}>
        Vaciar carrito
      </Button>
    </div>
  );
};

export default Cart;
