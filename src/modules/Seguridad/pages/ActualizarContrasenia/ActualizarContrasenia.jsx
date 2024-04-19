import React from "react";
import Box from "../../components/Box";
import FormActualizarContrasenia from "../../components/FormActualizarContrasenia";

const ActualizarContrasenia = () => {
  return (
  <Box>
    <div className="my-4 flex flex-col gap-4">
      <h1 className="text-center font-medium text-lg text-white-texto">
        ACTUALIZAR CONTRASEÑA 
      </h1>
      <p className="text-white-texto font-medium">
        Por favor llenar el siguiente formulario para restablecer su contraseña
      </p>
    </div>
    <FormActualizarContrasenia/>
  </Box>
  )
};

export default ActualizarContrasenia;

