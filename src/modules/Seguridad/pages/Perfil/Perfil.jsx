import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "../CrearUsuario/compenetes/PerfilUsario";
const Perfil = () => {
  let indice = 1;
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <PerfilUsario
          disabled={true}
          indice={indice}
          ButtonView={true}
          textButton="GUARGAR"
        />
      </MenuLateral>
    </div>
  );
};

export default Perfil;
