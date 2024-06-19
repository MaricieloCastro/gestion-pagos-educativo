import React from "react";

import MenuLateral from "@/components/MenuLateral";
import { filtrosMovimiento } from "./components/FiltrosMovimiento";
import { columnasMovimiento } from "./components/ColumnasMoviento";
import { MoviemientoAPI } from "@/api/ApiRutas";
//Listas para ver los movimientos
import Listas from "@/components/Listas";
export default function Movimientos() {
  return (
    <MenuLateral>
      <div className="h-full bg-white-cabecera">
        <Listas
          api={MoviemientoAPI}
          columnsValue={columnasMovimiento}
          classNameTable="movimiento-table"
          classNameFiltros="movimiento-filtros"
          filtrosLista={filtrosMovimiento}
          multiDelete={false}
          buttonTittle1="Eliminar"
          buttonTittle2="estudiante(s)"
        />
      </div>
    </MenuLateral>
  );
}
