import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosMenuPrincipal } from "./FiltrosMenuPrincipal/filtrosMenuPrincipal";
import { alumnosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsMenuPrincipal";

import "./MenuPrincipal.scss";
import "./FiltrosMenuPrincipal/FiltrosMenuPrincipal.scss";

const MenuPrincipal = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <Listas
          api={alumnosApi}
          columnsValue={columnsValue}
          classNameTable="menu-principal"
          classNameFiltros="filtros-menu-principal"
          filtrosLista={filtrosMenuPrincipal}
        />
      </MenuLateral>
    </div>
  );
};

export default MenuPrincipal;
