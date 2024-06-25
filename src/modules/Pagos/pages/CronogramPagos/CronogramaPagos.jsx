import React from "react";
import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";
import { pagosAPI } from "@/api/ApiRutas";

export default function CronogramaPagos() {
  return (
    <MenuLateral>
             <Listas
          api={pagosAPI}
          columnsValue={columnsValue}
          classNameTable="menu-principal-table"
          classNameFiltros="menu-principal-filtros"
          filtrosLista={filtrosMenuPrincipal}
          multiDelete={true}
          buttonTittle1="Eliminar"
          buttonTittle2="estudiante(s)"
          buttonFunction={handleModal}
        />
    </MenuLateral>
  );
}
