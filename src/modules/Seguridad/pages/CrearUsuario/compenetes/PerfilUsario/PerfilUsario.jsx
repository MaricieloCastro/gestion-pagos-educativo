import React from "react";
import "./PerfilUsario.scss";
import { Input } from "@/components/ui/input";
import InputForm from "../../components/ui/formUsario";
export default function PerfilUsario() {
  return (
    <div className="perfil-usario">
      <div className="perfil-usario_datos">
        <InputForm />
      </div>
    </div>
  );
}
