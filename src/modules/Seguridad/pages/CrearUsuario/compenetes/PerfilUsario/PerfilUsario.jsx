import React from "react";
import "./PerfilUsario.scss";
import { Input } from "@/components/ui/input";
import InputFormI from "../../components/ui/InputForm";
import ApiUser from "../../components/ui/ApiUser";
export default function PerfilUsario(props) {
  const { disabled, indice, ButtonView, textButton, load } = props;
  return (
    <div className="perfil-usario">
      <div className="perfil-usario_datos">
        {/* <InputForm nombre={nombre} apellido={apellido} edad={edad} /> */}
        <ApiUser
          disabled={disabled}
          indice={indice}
          ButtonView={ButtonView}
          textButton={textButton}
          load={load}
        />
      </div>
    </div>
  );
}
