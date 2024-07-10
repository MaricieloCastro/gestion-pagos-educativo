import React from "react";
import MenuLateral from "@/components/MenuLateral";
import FormPagosAnticipados from "./components/FormPagosAnticipados";

function PagosAnticipados() {
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <FormPagosAnticipados />
      </MenuLateral>
    </div>
  );
}
export default PagosAnticipados;
