import React from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
// import PerfilUsario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/PerfilUsario";
import { Button } from "@/components/ui/button";
// import { PlusOutlined } from "@ant-design/icons";
import "./InscribirAlumno.css";
//Ubigeo prueba
import { DepartamentosSelect } from "./DepartamentosSelect";
import { ProvinciasSelect } from "./ProvinciasSelect";
import { DistritosSelect } from "./DistritosSelect";
//
import { AñoLectivoSelect } from "./AñoLectivo";
//
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
            <div className="conteiner">
              {/* panel superior */}
              {/* panel superior */}
              {/* panel superior */}
              {/* panel superior */}
              {/* panel superior */}
              {/* panel superior */}
              <div className="Panel-superior">
                {/*/division fotografia */}
                <div className=" pt-3">
                  <img className="foto" />
                  <div className="imp">
                    <h2>Fotografia: </h2>
                    <Button className=" text-black bg-gray-400">
                      Cargar Foto
                    </Button>
                  </div>
                </div>
                {/* division datos del estudiante */}
                <div className="datos-estudiantes bg-white-texto pt-3 pr-3">
                  {/* division imputs izquierda */}
                  <div>
                    <div className="contenido bg-blue-claro text-white">
                      <h2>DATOS ESTUDIANTES:</h2>
                      <div>
                        <Formulario
                          form={form}
                          parametros="codigo_estudiante"
                          nameLabel="CODICO DE ESTUDIANTE:"
                        />
                      </div>
                      <div>
                        <Formulario
                          form={form}
                          parametros="nombres"
                          nameLabel="NOMBRES:"
                        />
                      </div>
                      <div className="pt-3">
                        <div className="d">
                          <div className="columns">
                            <h3 className="pb-4">Sexo:</h3>
                            <RadiusSexo form={form} />
                          </div>
                          <div className="columns">
                            <DepartamentosSelect form={form} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-claro text-white"></div>
                  </div>
                  {/* division imputs derecha */}
                  <div>
                    <div className="contenido bg-blue-claro text-white pt-8">
                      <div className="imputs-estudiante">
                        <Formulario
                          form={form}
                          parametros="apellidos"
                          nameLabel="APELLIDOS:"
                        />
                      </div>
                      <div className="d">
                        <div className="columns">
                          <Calendario
                            form={form}
                            parametros="fecha_nacimiento"
                            nameLabel="FECHA NACIMIENTO:"
                          />
                        </div>
                        <div className="columns">
                          <AñoLectivoSelect form={form} />
                        </div>
                      </div>
                      <div className="d">
                        <div className="columns">
                          <ProvinciasSelect form={form} />
                        </div>
                        <div className="columns">
                          <DistritosSelect form={form} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*panel inferior */}
              {/*panel inferior */}
              {/*panel inferior */}
              {/*panel inferior */}
              {/*panel inferior */}
              {/*panel inferior */}
              {/*panel inferior */}
              <div className="p-3">
                <div className="pgi bg-blue-claro text-white ">
                  <h2>DATOS SECUNDARIOS DEL ESTUDIANTE</h2>
                  <div className="datos-se">
                    <div className="columns">
                      <div className="imputs-estudiante">
                        <Formulario
                          form={form}
                          parametros="nombres"
                          nameLabel="NOMBRES:"
                        />
                        <h3>Sexo:</h3>
                        <RadiusSexo form={form} />
                      </div>
                    </div>
                    <div className="columns">
                      <div className="imputs-estudiante">
                        <ProvinciasSelect form={form} />
                        <DistritosSelect form={form} />
                      </div>
                    </div>

                    <div className="columns">
                      <div className="imputs-estudiante">
                        <ProvinciasSelect form={form} />
                        <DistritosSelect form={form} />
                      </div>
                    </div>
                  </div>
                  <h2>MATRICULA DEL ESTUDIANTE:</h2>
                  <div className="matricula-e">
                    <div className="columns">
                      <div className="imputs-estudiante">
                        <Formulario
                          form={form}
                          parametros="nombres"
                          nameLabel="NOMBRES:"
                        />
                        <h3>Sexo:</h3>
                        <RadiusSexo form={form} />
                      </div>
                    </div>

                    <div className="columns">
                      <div>
                        <ProvinciasSelect form={form} />
                        <DistritosSelect form={form} />
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="columns">
                        <div className="g-s">
                          <div className="pr-3">
                            <ProvinciasSelect form={form} />
                          </div>
                          <div>
                            <DistritosSelect form={form} />
                          </div>
                        </div>
                        <DistritosSelect form={form} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DATOS FAMILIAR */}
              {/* DATOS FAMILIAR */}
              {/* DATOS FAMILIAR */}
              {/* DATOS FAMILIAR */}
              {/* DATOS FAMILIAR */}
              {/* DATOS FAMILIAR */}
              <div className=" p-3">
                <div className="pgi bg-blue-claro text-white ">
                  <div className="grid grid-flow-col-dense ">
                    <div className="columns grid grid-flow-row-dense">
                      <div>
                        <h2>DATOS DEL FAMILIAR:</h2>
                        <Formulario
                          form={form}
                          parametros="parentesco"
                          nameLabel="PARENTESCO:"
                        />
                      </div>
                      <div>
                        <Formulario
                          form={form}
                          parametros="domicilio"
                          nameLabel="DOMICILIO:"
                        />
                      </div>
                    </div>
                    <div className="columns pt-8 grid grid-flow-row-dense">
                      <div>
                        <Formulario
                          form={form}
                          parametros="apellidos"
                          nameLabel="APELLIDOS:"
                        />
                      </div>
                      <div className="grid grid-flow-col-dense ">
                        <div className="intro">
                          <Calendario
                            form={form}
                            parametros="fecha_nacimiento"
                            nameLabel="FECHA NACIMIENTO:"
                          />
                        </div>
                        <div>
                          <div>
                            <h3 className="pb-4">Sexo:</h3>
                            <RadiusSexo form={form} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns pt-8 grid grid-flow-row-dense">
                      <div>
                        <Formulario
                          form={form}
                          parametros="nombres"
                          nameLabel="NOMBRES:"
                        />
                      </div>
                      <div>
                        <h3 className="pb-4">Sexo:</h3>
                        <RadiusSexo form={form} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center text-gray-500">
                    LUGAR DE NACIMIENTO DEL PADRE
                  </h3>
                  <h3 className="text-center text-gray-500">
                    LUGAR DE NACIMIENTO DELA MADRE
                  </h3>
                </div>
              </div>
            </div>
          </MenuLateral>
        </div>
      </form>
    </Form>
  );
}
{
  /* <div>
                        
                        <Calendario
                          form={form}
                          parametros="fecha_nacimiento"
                          nameLabel="Fecha Nacimiento"
                        />
                      </div>
                      <div>
                        <h4 className="pb-4">Sexo:</h4>
                        <RadiusSexo form={form} />
                      </div> */
}
