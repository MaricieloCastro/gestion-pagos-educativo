import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosHistorialPagos } from "./FiltrosHistorialPago/filtrosHistorialPago";
import { historialPagosAPI } from "@/api/ApiRutas";
import { columnsValue } from "./columnsHistorialPago";

import "./HistorialPagos.scss";
import "./FiltrosHistorialPago/filtrosHistorialPago";

const HistorialPagos = () => {
  return (
    <MenuLateral>
      <div className="historial-pagos h-full gap-3 min-w-[600px]">
        <Listas
          api={historialPagosAPI}
          columnsValue={columnsValue}
          classNameTable="historial-pagos-table"
          classNameFiltros="historial-pagos-filtros"
          filtrosLista={filtrosHistorialPagos}
          multiDelete={false}
        />
      </div>
    </MenuLateral>
  );
};

export default HistorialPagos;
