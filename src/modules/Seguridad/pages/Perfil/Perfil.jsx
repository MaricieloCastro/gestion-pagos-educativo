import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "../CrearUsuario/compenetes/PerfilUsario";
const Perfil = () => {
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
          disabled={true}
          Alumno={Alumnos}
          ButtonView={false}
          textButton="GUARGAR"
        />
      </MenuLateral>
    </div>
  );
};

export default Perfil;
