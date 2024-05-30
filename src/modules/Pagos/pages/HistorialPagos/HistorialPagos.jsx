import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosListaUsuarios } from "./FiltrosListaUsuarios/filtrosListaUsuarios.jsx";
import { usuariosActivosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsHistorialPago";

import "./ListaUsuarios.scss";
import "./FiltrosListaUsuarios/FiltrosListaUsuarios.scss";

const HistorialPagos = () => {
  return (
    <MenuLateral>
      <div className="usuarios h-full gap-3 min-w-[600px]">
        <Listas
          api={usuariosActivosApi}
          columnsValue={columnsValue}
          classNameTable="usuarios-table"
          classNameFiltros="usuarios-filtros"
          filtrosLista={filtrosListaUsuarios}
          multiDelete={false}
        />
      </div>
    </MenuLateral>
  );
};

export default HistorialPagos;
