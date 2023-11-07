import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Checkout = ({ handleChange, handleSubmit, errors, cart, total }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: 2, minHeight: "73vh" }}
    >
      <Card>
        {/* Mapeo de productos del cart */}
        {cart.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "space-around" },
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={product.imgUrl}
              title={product.name}
              sx={{
                height: "15vh",
                objectFit: "contain",
                width: "auto",
              }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1">{product.name}</Typography>
              <Typography variant="subtitle2">
                Cantidad: {product.quantity}
              </Typography>
            </CardContent>
            <Divider sx={{ width: "100%" }} />
          </Box>
        ))}
        <Typography sx={{ textAlign: "center" }} variant="h6">
          El total a pagar es: ${total}
        </Typography>
      </Card>

      <Typography variant="h5">Completa el formulario:</Typography>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="apellido"
            onChange={handleChange}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
          />
          <Stack direction="row" spacing={1}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              label="Repetir email"
              variant="outlined"
              name="emailRepeat"
              onChange={handleChange}
              error={errors.emailRepeat ? true : false}
              helperText={errors.emailRepeat}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button type="submit" variant="outlined">
              Aceptar
            </Button>
            <Button type="button" variant="outlined">
              Cancelar
            </Button>
          </Stack>
        </Stack>

        {/* <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        <TextField
          label="Repetir contraseña"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        /> */}
      </form>
    </Stack>
  );
};

export default Checkout;
