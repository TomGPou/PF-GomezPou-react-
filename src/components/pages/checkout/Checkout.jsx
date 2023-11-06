import { Button, Stack, TextField, Typography } from "@mui/material";

const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: 2, minHeight: "73vh" }}
    >
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
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />

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
