import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <ShoppingCartIcon color="dark"></ShoppingCartIcon>
      <span>1</span>
    </Box>
  );
};

export default CartWidget;
