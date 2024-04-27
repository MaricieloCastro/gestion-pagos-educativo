import React from "react";
import "./FormPagos.scss";
import DatosView from "./DatosView";
import { Button } from "@/components/ui/button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AvatarCN from "@/components/AvatarCN";
export default function FormPagos() {
  const name = "SHANDE ANDRES ALVAN RIOS";
  return (
    <div className="pagos">
      <div className="pagos-alumno">
        <div className="pagos-alumno_foto">
          <AvatarCN />
        </div>
        <div className="pagos-alumno_datos">
          <div className="pagos-alumno_datos-nombres">{name}</div>
          <DatosView celda="DNI:" dato="71456922" />
          <DatosView celda="BENEFIO:" dato="DEPORTISTA"></DatosView>
          <DatosView celda="TURNO:" dato="TARDE"></DatosView>
          <div className="pagos-alumno_datos-año">
            <DatosView celda="GRADO:" dato="5" />
            <DatosView celda="SECCIÓN:" dato="C" />
          </div>
        </div>
        <div className="pagos-alumno_botones">
          <div className="pagos-alumno_botones-informacion">
            <Button>
              {" "}
              <ModeEditIcon /> INFORMACIÓN
            </Button>
          </div>
          <Button>HISTORIAL DE PAGOS</Button>
          <Button>MENSUALIDAD </Button>
          <Button>MATRICULA</Button>
          <Button>CURSO DESAPROBADO</Button>
        </div>
      </div>
      <div className="pagos-dato">2</div>
    </div>
  );
}
