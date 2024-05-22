import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosEstudiantesDelete } from "./FiltrosEstudiantesDelete/filtrosEstudiantesDelete";
import { alumnosInactivosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsEstudiantesDelete";

import "./EstudiantesDelete.scss";
import "./FiltrosEstudiantesDelete/FiltrosEstudiantesDelete.scss";


const MenuPrincipal = () => {
  return (
    <MenuLateral>
      <div className="estudiantes-delete h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosInactivosApi}
          columnsValue={columnsValue}
          classNameTable="estudiantes-delete-table"
          classNameFiltros="estudiantes-delete-filtros"
          filtrosLista={filtrosEstudiantesDelete}
          multiDelete={true}
        />
      </div>
    </MenuLateral>
  );
};

export default MenuPrincipal;
