import React from "react";
import Box from "../../components/Box";
import FormActualizarContrasenia from "../../components/FormActualizarContrasenia";

const ActualizarContrasenia = () => {
  return (
  <Box>
    <div>
      <h1>
        ACTUALIZAR CONTRASEÑA
      </h1>
      <p>
        Por favor llenar el siguiente formulario para restablecer su contraseña
      </p>
    </div>
    <FormActualizarContrasenia/>
  </Box>)
};

export default ActualizarContrasenia;

