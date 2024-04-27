import React from "react";
import "./PagosGeneral.scss";
import MenuLateral from "@/components/MenuLateral";
import FormPagos from "./components/FormPagos";

export default function PagosGeneral() {
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <FormPagos />
      </MenuLateral>
    </div>
  );
}
