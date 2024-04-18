import React from "react";
import MenuLateral from "@/components/MenuLateral";

import SimpleTable from "@/components/SimpleTable/SimpleTable";

const ListaUsuarios = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido">
          <SimpleTable />
        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
