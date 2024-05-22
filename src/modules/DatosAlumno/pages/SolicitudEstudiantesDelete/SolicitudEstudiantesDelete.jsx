
import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosSolicitudEstudiantesDelete } from "./FiltrosSolicitudEstudiantesDelete/filtrosSolicitudEstudiantesDelete";
import { alumnosSolicitudDeleteApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsSolicitudEstudiantesDelete";

import "./SolicitudEstudiantesDelete.scss";
import "./FiltrosSolicitudEstudiantesDelete/FiltrosSolicitudEstudiantesDelete.scss";

const SolicitudEstudiantesDelete = () => {

  const rechazarSolicitudes = (solicitud) => {
    console.log(solicitud)
  }

  return (
    <MenuLateral>
      <div className="estudiantes-delete h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosSolicitudDeleteApi}
          columnsValue={columnsValue}
          classNameTable="solicitud-estudiantes-delete-table"
          classNameFiltros="solicitud-estudiantes-delete-filtros"
          filtrosLista={filtrosSolicitudEstudiantesDelete}
          multiDelete={true}
          buttonTittle1="Rechazar"
          buttonTittle2="solicitud(es)"
          buttonFunction={rechazarSolicitudes}
        />
      </div>
    </MenuLateral>
  )
}

export default SolicitudEstudiantesDelete
