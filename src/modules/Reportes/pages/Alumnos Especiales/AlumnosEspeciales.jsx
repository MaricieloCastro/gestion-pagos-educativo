import React from "react";
import MenuLateral from "@/components/MenuLateral";
import FormAlumnosEspeciales from "./components/FormAlumnosEspeciales";

export default function AlumnosEspeciales() {
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro">
      <MenuLateral>
        <FormAlumnosEspeciales />
      </MenuLateral>
    </div>
  );
}
