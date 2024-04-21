import React from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "../CrearUsuario/compenetes/PerfilUsario";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
const InformacionUsuario = () => {
  const params = useParams();
  let indice = params.id;
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <PerfilUsario
          disabled={false}
          indice={indice}
          ButtonView={false}
          textButton="GUARGAR"
        />
      </MenuLateral>
    </div>
  );
};

export default InformacionUsuario;
