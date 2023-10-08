import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.imgUrl} title={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
