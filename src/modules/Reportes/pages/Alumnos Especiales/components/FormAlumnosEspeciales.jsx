import React from "react";
import "./FormAlumnosEspeciales.scss";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@mui/material";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FormAlumnosEspeciales() {
  return (
    <div className="cuerpo">
      <div className="cuerpo-select">
        <div className="cuerpo-select_conteniener">
          <div className="cuerpo-select_conteniener-titulo">
            <h3>SELECCIONAR OPCIÓN:</h3>
          </div>
          <div className="cuerpo-select_conteniener-dos">
            <FormLabel>Beneficios:</FormLabel>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Hermanos</SelectItem>
                  <SelectItem value="banana">Deportista</SelectItem>
                  <SelectItem value="blueberry">Primer Puesto</SelectItem>
                  <SelectItem value="grapes">Hijos de Docentes</SelectItem>
                  <SelectItem value="pineapple">Arte</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="cuerpo-select_conteniener-tres">
            <Button>Aplicar</Button>
          </div>
        </div>
      </div>
      <div className="cuerpo-preview">
        <div className="cuerpo-preview_body">1</div>
        <div className="cuerpo-preview_download">
          Descargar:
          <Button>
            <FontAwesomeIcon icon={faFilePdf} />
          </Button>
        </div>
      </div>
    </div>
  );
}
