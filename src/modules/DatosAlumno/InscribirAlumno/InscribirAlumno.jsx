import React from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
// import PerfilUsario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/PerfilUsario";
import { Button } from "@/components/ui/button";
// import { PlusOutlined } from "@ant-design/icons";
import "./InscribirAlumno.css";
import { DepartamentosSelect } from "./DepartamentosSelect";
import { RadiusSexo } from "./RadiusSexo";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
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

export default function InscribirAlumno() {
  const form = useForm({
    resolver: zodResolver(),
    // valores en la base de datos
    defaultValues: {
      codigo_estudiante: "",
      apellido: "",
      nombres: "",
      fecha_nacimiento: "",
    },
  });
  return (
    <Form {...form}>
      <form>
        <div className="flex overflow-hidden h-screen blue-oscuro ">
          <MenuLateral>
            {/* panel superior */}
            <div className="Panel-superior bg-white-texto ">
              {/*/division fotografia */}
              <div className="fotografias pt-3">
                <img className="foto" />
                <div className="imp">
                  <h2>Fotografia: </h2>
                  <Button className=" text-black bg-gray-400">
                    Cargar Foto
                  </Button>
                </div>
              </div>
              {/* division imputs */}
              <div className="datos-estudiantes bg-white-texto pt-3">
                <div className="bg-blue-claro text-white">
                  <Formulario
                    form={form}
                    parametros="codigo_estudiante"
                    nameLabel="Codigo Estudiante"
                  />
                  <Formulario
                    form={form}
                    parametros="nombres"
                    nameLabel="Nombres"
                  />
                  <Calendario
                    form={form}
                    parametros="fecha_nacimiento"
                    nameLabel="Fecha Nacimiento"
                  />
                  <DepartamentosSelect form={form} />
                  <RadiusSexo form={form} />
                </div>
                <div className="bg-blue-claro text-white">
                  DATOS ESTUDIANTES
                </div>
              </div>
            </div>
            {/*panel inferior */}
            <div className="Panel-inferior bg-white-texto ">
              <div>hola</div>
            </div>
            <div className="Panel-2 bg-blue-claro "></div>
          </MenuLateral>
        </div>
      </form>
    </Form>
  );
}
