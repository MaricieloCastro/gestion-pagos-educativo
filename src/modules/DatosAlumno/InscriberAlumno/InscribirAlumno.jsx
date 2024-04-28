import React from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
// import PerfilUsario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/PerfilUsario";
import { Button } from "@/components/ui/button";
// import { PlusOutlined } from "@ant-design/icons";
import "./InscribirAlumno.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function InscribirAlumno(props) {
  const form = useForm({
    resolver: zodResolver(),
    defaultValues: { codigo_estudiante: "", apellido: "", nombres: "" },
  });
  return (
    <div className="flex overflow-hidden h-screen blue-oscuro ">
      <MenuLateral>
        <div className="Panel-superior bg-white-texto ">
          <div className="fotografias pt-3">
            <img className="foto" />
            <div className="imp">
              <h2>Fotografia: </h2>
              <Button className=" text-black bg-gray-400">Cargar Foto</Button>
            </div>
          </div>
          <div className="datos-estudiantes bg-white-texto pt-3">
            <div className="bg-blue-claro text-white">
              <Formulario />
            </div>
            <div className="bg-blue-claro text-white">DATOS ESTUDIANTES</div>
          </div>
        </div>
        <div className="Panel-inferior bg-white-texto ">
          <div>hola</div>
        </div>
        <div className="Panel-2 bg-blue-claro "></div>
      </MenuLateral>
    </div>
  );
}
