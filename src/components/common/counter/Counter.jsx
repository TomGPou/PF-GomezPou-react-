import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ArrowForwardIos } from "@mui/icons-material";

const Counter = ({ add, subtract, counter, onAdd }) => {
  return (
    <Box sx={{ display: "flex" }} spacing={2}>
      <Button onClick={subtract}>
        <ArrowBackIosIcon />
      </Button>
      <h4>{counter}</h4>
      <Button onClick={add}>
        <ArrowForwardIos />
      </Button>

      <Button
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default Counter;
