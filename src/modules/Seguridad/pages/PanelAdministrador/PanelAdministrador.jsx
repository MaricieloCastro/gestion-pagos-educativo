import MenuLateral from "@/components/MenuLateral";
import React from "react";
import ButtonsAdmin from "./components/ButtonsAdmin";
import ListaAdmin from "./components/ListaAdmin";

import "./PanelAdministrador.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const PanelAdministrador = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="panel-administrador h-screen max-h-[calc(100vh-50px)] mx-4 mb-4 gap-4">
          <div className="panel-administrador__seccion-1 bg-blue-oscuro px-3 py-2">
            <div className="panel-administrador__seccion-1-1">
              <div className="text-white-texto font-light">
                <p>BALANCE TOTAL:</p>
                <div className="flex justify-start items-center gap-2">
                  <p>Este mes</p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start text-white-texto relative">
                <div className="absolute top-1">
                  <h1 className="font-medium tracking-wide text-[5vh]">
                    1000.00
                  </h1>
                  <p className="font-light text-[1.4vh] ml-2">Soles</p>
                </div>
              </div>
              <div className="flex justify-start items-center font-light text-[1.4vh] text-white-texto gap-1">
                <p>Ultimo mes:</p>
                <p>S/. 1300.75</p>
              </div>
            </div>
            <div className="bg-green-400">2</div>
          </div>
          <div className="panel-administrador__seccion-2 gap-4 ">
            <div className="panel-administrador__seccion-2-1 gap-4">
              <div className="panel-administrador__seccion-2-1-1 bg-blue-oscuro">
                <ListaAdmin />
              </div>
              <div className="panel-administrador__seccion-2-1-2 bg-blue-oscuro">
                <ButtonsAdmin />
              </div>
            </div>
            <div className="panel-administrador__seccion-2-2 bg-blue-oscuro">
              y
            </div>
          </div>
        </div>
      </MenuLateral>
    </div>
  );
};

export default PanelAdministrador;
