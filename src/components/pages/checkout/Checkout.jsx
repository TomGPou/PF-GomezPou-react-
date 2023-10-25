import { Button, TextField } from "@mui/material";

const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <h1>Estoy en el checkout</h1>

      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained">
          Aceptar
        </Button>
        <Button type="button" variant="outlined">
          Cancelar
        </Button>

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
    </div>
  );
};

export default Checkout;
