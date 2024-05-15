import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosListaUsuarios } from "./FiltrosListaUsuarios/filtrosListaUsuarios.jsx";
import { usuariosActivosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsListaUsuarios";

import "./ListaUsuarios.scss";
import "./FiltrosListaUsuarios/FiltrosListaUsuarios.scss";

const ListaUsuarios = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <Listas
          api={usuariosActivosApi}
          columnsValue={columnsValue}
          classNameTable="lista-usuarios"
          classNameFiltros="lista-usuarios-filtros"
          filtrosLista={filtrosListaUsuarios}
        />
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
