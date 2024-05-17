
import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosSolicitudEstudiantesDelete } from "./FiltrosSolicitudEstudiantesDelete/filtrosSolicitudEstudiantesDelete";
import { alumnosSolicitudDeleteApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsSolicitudEstudiantesDelete";

import "./SolicitudEstudiantesDelete.scss";
import "./FiltrosSolicitudEstudiantesDelete/FiltrosSolicitudEstudiantesDelete.scss";

const SolicitudEstudiantesDelete = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <Listas
          api={alumnosSolicitudDeleteApi}
          columnsValue={columnsValue}
          classNameTable="solicitud-estudiantes-delete"
          classNameFiltros="filtros-solicitud-estudiantes-delete"
          filtrosLista={filtrosSolicitudEstudiantesDelete}
        />
      </MenuLateral>
    </div>
  )
}

export default SolicitudEstudiantesDelete
