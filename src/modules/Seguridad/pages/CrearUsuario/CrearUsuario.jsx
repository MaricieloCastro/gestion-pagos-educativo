import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "./compenetes/PerfilUsario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CrearUsuario = () => {
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <PerfilUsario textButton="CREAR" indice={1} load={true} />
      </MenuLateral>
    </div>
  );
};

export default CrearUsuario;
