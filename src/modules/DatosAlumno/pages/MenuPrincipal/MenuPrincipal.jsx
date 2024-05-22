import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosMenuPrincipal } from "./FiltrosMenuPrincipal/filtrosMenuPrincipal";
import { alumnosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsMenuPrincipal.jsx";

import "./MenuPrincipal.scss";
import "./FiltrosMenuPrincipal/FiltrosMenuPrincipal.scss";

const MenuPrincipal = () => {
  return (
    <MenuLateral>
      <div className="menu-principal h-full gap-3 min-w-[600px]">
        <Listas
          api={alumnosApi}
          columnsValue={columnsValue}
          classNameTable="menu-principal-table"
          classNameFiltros="menu-principal-filtros"
          filtrosLista={filtrosMenuPrincipal}
          multiDelete={true}
        />
      </div>
    </MenuLateral>
  );
};

export default MenuPrincipal;
