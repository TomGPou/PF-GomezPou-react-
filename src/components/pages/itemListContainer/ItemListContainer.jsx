import { Box, Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box>
      <Typography variant="h4">{greeting}</Typography>
    </Box>
  );
};

export default ItemListContainer;
