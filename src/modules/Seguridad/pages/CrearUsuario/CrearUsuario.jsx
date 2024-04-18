import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "./compenetes/PerfilUsario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CrearUsuario = () => {
  const Alumnos = {
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    dni: "",
    edad: "",
    telefono: "",
    direccion: "",
    correo: "",
    usuario: "",
    contraseña: "",
  };
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <PerfilUsario Alumno={Alumnos} textButton="CREAR" />
      </MenuLateral>
    </div>
  );
};

export default CrearUsuario;
