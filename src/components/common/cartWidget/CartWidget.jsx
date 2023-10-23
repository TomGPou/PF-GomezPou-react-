import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Badge badgeContent={cart.length} color="error" sx={{ flexGrow: 0 }}>
      <ShoppingCartIcon color="dark"></ShoppingCartIcon>
    </Badge>
  );
};

export default CartWidget;
