import React from "react";
import "./PerfilUsario.scss";
import { Input } from "@/components/ui/input";
import InputFormI from "../../components/ui/InputForm";
export default function PerfilUsario(props) {
  const { disabled, Alumno, ButtonView, textButton } = props;
  return (
    <div className="perfil-usario">
      <div className="perfil-usario_datos">
        {/* <InputForm nombre={nombre} apellido={apellido} edad={edad} /> */}
        <InputFormI
          disabled={disabled}
          Alumno={Alumno}
          ButtonView={ButtonView}
          textButton={textButton}
        />
      </div>
    </div>
  );
}
