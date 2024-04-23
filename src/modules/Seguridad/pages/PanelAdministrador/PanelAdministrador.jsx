import MenuLateral from "@/components/MenuLateral";
import React from "react";
import ButtonsAdmin from "./components/ButtonsAdmin";
import ListaAdmin from "./components/ListaAdmin";

import "./PanelAdministrador.scss";
import BalanceTotal from "./components/BalanceTotal";
import GraficoBarras from "./components/GraficoBarras";

const PanelAdministrador = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="panel-administrador h-screen max-h-[calc(100vh-50px)] mx-4 mb-4 gap-3">
          <div className="panel-administrador__seccion-1 bg-blue-oscuro px-3 py-2 gap-2">
            <BalanceTotal />
          </div>
          <div className="panel-administrador__seccion-2 gap-3 ">
            <div className="panel-administrador__seccion-2-1 gap-3">
              <div className="panel-administrador__seccion-2-1-1 bg-blue-oscuro">
                <ListaAdmin />
              </div>
              <div className="panel-administrador__seccion-2-1-2 bg-blue-oscuro">
                <ButtonsAdmin />
              </div>
            </div>
            <div className="panel-administrador__seccion-2-2 bg-blue-oscuro">
              <GraficoBarras />
            </div>
          </div>
        </div>
      </MenuLateral>
    </div>
  );
};

export default PanelAdministrador;
