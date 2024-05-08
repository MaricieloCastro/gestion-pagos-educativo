import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosEstudiantesDelete } from "./FiltrosEstudiantesDelete/filtrosEstudiantesDelete";
import { alumnosInactivosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsEstudiantesDelete";

import "./EstudiantesDelete.scss";
import "./FiltrosEstudiantesDelete/FiltrosEstudiantesDelete.scss";

const EstudiantesDelete = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <Listas
          api={alumnosInactivosApi}
          columnsValue={columnsValue}
          classNameTable="estudiantes-delete"
          classNameFiltros="filtros-estudiantes-delete"
          filtrosLista={filtrosEstudiantesDelete}
        />
      </MenuLateral>
    </div>
  )
}

export default EstudiantesDelete
