import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Badge badgeContent={total} color="error" sx={{ flexGrow: 0 }}>
      <ShoppingCartIcon color="dark"></ShoppingCartIcon>
    </Badge>
  );
};

export default CartWidget;
