import React from "react";

import "./IniciarSesion.scss";
import Box from "../../components/Box";
import FormIniciarSesion from "../../components/FormIniciarSesion";

const IniciarSesion = () => {
  return (
    /* 
    Box: CONTIENE LA CAJA EN DONDE ESTÁ
    EL LOGIN Y LA CAJA DE LA FOTOGRAFIA
    
    FormIniciarSesion: CONTIENE EL FORMULARIO
    QUE CONSTA DEL INPUT USUARIO, INPUT CONTRASEÑA,
    BOTON DE OLVIDASTE CONTRASEÑA Y EL BOTON DE 
    INICIAR SESION
    */
    <Box>
      <FormIniciarSesion />
    </Box>
  );
};

export default IniciarSesion;
