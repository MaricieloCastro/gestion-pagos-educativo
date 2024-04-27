import { useContext } from "react";
import MenuLateral from "@/components/MenuLateral";
import PerfilUsario from "../CrearUsuario/compenetes/PerfilUsario";
import AuthContext from "@/contexts/AuthContext";
const Perfil = () => {
  let { user } = useContext(AuthContext);
  const { user_id } = user
  let indice = user_id;
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
