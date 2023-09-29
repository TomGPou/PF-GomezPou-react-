import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="error" sx={{ flexGrow: 0 }}>
      <ShoppingCartIcon color="dark"></ShoppingCartIcon>
    </Badge>
  );
};

export default CartWidget;
