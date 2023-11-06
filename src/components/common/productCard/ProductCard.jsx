import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Grid item xs={11} sm={5} md={4} lg={3} xl={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia sx={{ height: 140 }} image={item.imgUrl} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {item.price}
          </Typography>
        </CardContent>

        <CardActions>
          {item.stock > 0 ? (
            <Link to={`/itemDetail/${item.id}`}>
              <Button size="small">Ver detalle</Button>
            </Link>
          ) : (
            <Button variant="contained" disabled>
              Sin Stock
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
