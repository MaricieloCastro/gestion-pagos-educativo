import React from "react";
import {
  faFileInvoice,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import ButtonAdmin from "./ButtonAdmin";
import { enlaces } from "@/utils/rutas";

const ButtonsAdmin = () => {
  return (
    <>
      <div className="flex items-center px-4 text-white-cabecera">
        <p className="text-sm">SELECCIONA UNA OPCION:</p>
      </div>
      <div className="panel-administrador__seccion-2-1-2-botones gap-6 pt-3 pb-4 px-4">
        <ButtonAdmin
          title="HISTORIAL DE REPORTES"
          icon={faFileInvoice}
          notification={false}
          goTo={enlaces[13].path}
        />
        <ButtonAdmin
          title="SOL. DE ELIMINACIÓN"
          icon={faTrashArrowUp}
          notification={true}
          goTo={enlaces[12].path}
        />
      </div>
    </>
  );
};

export default ButtonsAdmin;
