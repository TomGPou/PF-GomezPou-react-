import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ArrowForwardIos } from "@mui/icons-material";

const Counter = ({ add, subtract, counter, onAdd }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} spacing={2}>
      <Box sx={{ display: "flex" }}>
        <Button onClick={subtract}>
          <ArrowBackIosIcon />
        </Button>
        <Typography variant="h5">{counter}</Typography>
        <Button onClick={add}>
          <ArrowForwardIos />
        </Button>
      </Box>

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
