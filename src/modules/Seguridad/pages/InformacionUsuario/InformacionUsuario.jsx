<<<<<<< HEAD
import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "../CrearUsuario/compenetes/PerfilUsario";
import { faL } from "@fortawesome/free-solid-svg-icons";
const InformacionUsuario = () => {
  const Alumnos = {
    nombre: "JUAN CARLO",
    apellido_paterno: "ALVAN",
    apellido_materno: "RIOS",
    dni: "71456922",
    edad: 20,
    telefono: "901981127",
    direccion: "BOLOGNESI 735",
    correo: "ashande75@gmail.com",
    usuario: "71456922",
    contraseña: "71456922",
    sexo: "Masculino",
    tipo_usuario: "DIRECTOR",
  };
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <PerfilUsario
          disabled={false}
          Alumno={Alumnos}
          ButtonView={true}
          textButton="GUARGAR"
        />
      </MenuLateral>
    </div>
  );
};
=======
import MenuLateral from '@/components/MenuLateral'
import React from 'react'

const InformacionUsuario = () => {
    return (
        <MenuLateral></MenuLateral>
    )
}
>>>>>>> master

export default InformacionUsuario;
