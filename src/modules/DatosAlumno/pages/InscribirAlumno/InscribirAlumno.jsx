import React from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "./components/formulario";
// import PerfilUsario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/PerfilUsario";
import { Button } from "@/components/ui/button";
// import { PlusOutlined } from "@ant-design/icons";
import "./InscribirAlumno.css";
//Ubigeo prueba
import { DepartamentosSelect } from "./components/DepartamentosSelect";
import { ProvinciasSelect } from "./components/ProvinciasSelect";
import { DistritosSelect } from "./components/DistritosSelect";
//
import { AñoLectivoSelect } from "./components/AñoLectivo";
//
//MENU LATERAL
import { RadiusSexo } from "./components/RadiusSexo";
import { RadiusBoolean } from "./components/RadiusBoolean";

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
            {/* conteiner general */}
            <div className="conteiner-general flex overflow-hidden h-screen blue-oscuro m-4">
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
                      <div className="contenido bg-blue-claro text-white pr-5 pl-5">
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
                            <div>
                              <h3 className="pb-1">Sexo:</h3>
                              <RadiusSexo form={form} />
                            </div>
                            <div>
                              <DepartamentosSelect form={form} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-claro text-white"></div>
                    </div>
                    {/* division imputs derecha */}
                    <div>
                      <div className="contenido bg-blue-claro text-white pt-8 pl-5 pr-5">
                        <div className="imputs-estudiante">
                          <Formulario
                            form={form}
                            parametros="apellidos"
                            nameLabel="APELLIDOS:"
                          />
                        </div>
                        <div className="d">
                          <div>
                            <Calendario
                              form={form}
                              parametros="fecha_nacimiento"
                              nameLabel="FECHA NACIMIENTO:"
                            />
                          </div>
                          <div>
                            <AñoLectivoSelect form={form} />
                          </div>
                        </div>
                        <div className="d pt-3">
                          <div className=" pr-3">
                            <ProvinciasSelect form={form} />
                          </div>
                          <div>
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
                    <h2 className="pl-4">DATOS SECUNDARIOS DEL ESTUDIANTE</h2>
                    <div className="datos-se">
                      <div className="pl-4 pt-2.5 pr-0.9">
                        <div className="imputs-estudiante">
                          <Formulario
                            form={form}
                            parametros="DNI-estudiante"
                            nameLabel="DNI:"
                          />
                          <h3>Sexo:</h3>
                          <RadiusSexo form={form} />
                        </div>
                      </div>
                      <div className="columns pl-4">
                        <div className="imputs-estudiante">
                          <ProvinciasSelect form={form} />
                          <DistritosSelect form={form} />
                        </div>
                      </div>

                      <div className="columns">
                        <div className="imputs-estudiante ">
                          <ProvinciasSelect form={form} />
                          <DistritosSelect form={form} />
                        </div>
                      </div>
                    </div>
                    <h2 className="pl-4">MATRICULA DEL ESTUDIANTE:</h2>
                    <div className="matricula-e">
                      <div className="pl-4 pt-2.5 pr-0.9">
                        <div className="imputs-estudiante">
                          <Formulario
                            form={form}
                            parametros="nivel-estudiante"
                            nameLabel="NIVEL:"
                          />
                          <h3>Sexo:</h3>
                          <RadiusSexo form={form} />
                        </div>
                      </div>

                      <div className="columns pl-4">
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
                  <div className=" bg-blue-claro text-white  grid grid-flow-row-dense">
                    <div className="d-familiar">
                      <div>
                        <div className="grid grid-flow-col-dense ">
                          <div className=" grid grid-flow-row-dense pl-6">
                            <div>
                              <h2>DATOS DEL FAMILIAR:</h2>
                            </div>
                            <div className="pt-3">
                              <Formulario
                                form={form}
                                parametros="parentesco-familiar"
                                nameLabel="PARENTESCO:"
                              />
                            </div>
                            <div className="pt-2">
                              <Formulario
                                form={form}
                                parametros="domicilio-familiar"
                                nameLabel="DOMICILIO:"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="columns pt-6 ">
                          <div className="grid grid-flow-col-dense">
                            <div className="columns">
                              <Formulario
                                form={form}
                                parametros="nombres-familiar"
                                nameLabel="NOMBRES:"
                              />
                            </div>
                            <div className="columns">
                              <Formulario
                                form={form}
                                parametros="apellidos-familiar"
                                nameLabel="APELLIDOS:"
                              />
                            </div>
                          </div>
                          <div className="fn">
                            <div className="fn pl-3">
                              <div className="mr-3">
                                {" "}
                                <Calendario
                                  form={form}
                                  parametros="fecha_nacimiento-familiar"
                                  nameLabel="FECHA NACIMIENTO: "
                                />
                              </div>
                              <div className="pt-2">
                                <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  VIVE:
                                </h3>
                                <RadiusBoolean form={form} />
                              </div>
                            </div>
                            <div className="pt-2 pl-3">
                              {" "}
                              <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE CON ESTUDIANTE:
                              </h3>
                              <RadiusBoolean form={form} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* PADRE */}
                    {/* PADRE */}
                    {/* PADRE */}
                    <div>
                      {" "}
                      <h3 className="text-center text-gray-500">
                        LUGAR DE NACIMIENTO DEL PADRE
                      </h3>
                      <div className="d-familiar pl-4">
                        <div className="columns pt-4">
                          {" "}
                          <Formulario
                            form={form}
                            parametros="centro-trabajo-padre"
                            nameLabel="CENTRO DE TRABAJO:"
                          />
                          <Formulario
                            form={form}
                            parametros="ocupacion-padre"
                            nameLabel="OCUPACION:"
                          />
                          <Formulario
                            form={form}
                            parametros="grado-instruccion-padre"
                            nameLabel="GRADO DE INSTRUCCION:"
                          />
                          <Formulario
                            form={form}
                            parametros="parentesco-padre"
                            nameLabel="PARENTESCO:"
                          />
                          <Formulario
                            form={form}
                            parametros="domicilio-padre"
                            nameLabel="DOMICILIO:"
                          />
                        </div>
                        <div
                          grid
                          grid-flow-row-dense
                          className="columns pt-4 pr-6"
                        >
                          <div className="grid grid-flow-col-dense">
                            <div className="pr-3">
                              <DistritosSelect form={form} />
                            </div>
                            <div className="pr-3">
                              <DistritosSelect form={form} />
                            </div>
                            <div>
                              <DistritosSelect form={form} />
                            </div>
                          </div>
                          <div className="grid grid-flow-col-dense ">
                            <div className="pr-3">
                              <Formulario
                                form={form}
                                parametros="telefono-padre"
                                nameLabel="TELEFONO:"
                              />
                            </div>
                            <div>
                              <Formulario
                                form={form}
                                parametros="celular-padre"
                                nameLabel="CELULAR:"
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-col-dense">
                            <div className="grid grid-flow-col-dense">
                              <div className="pr-3">
                                {" "}
                                <DistritosSelect form={form} />
                              </div>
                              <div className=" pt-2">
                                <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  APODERADO:
                                </h3>
                                <RadiusBoolean form={form} />
                              </div>
                            </div>
                            <div>
                              <div>
                                <Formulario
                                  form={form}
                                  parametros="e-mail-padre"
                                  nameLabel="E-MAIL:"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-flow-col-dense">
                            <div className="pr-3">
                              <Formulario
                                form={form}
                                parametros="nombres-padre"
                                nameLabel="NOMBRES:"
                              />
                            </div>
                            <div>
                              <Formulario
                                form={form}
                                parametros="apellidos"
                                nameLabel="APELLIDOS:"
                              />
                            </div>
                          </div>
                          <div className="fn">
                            <div className="fn ">
                              <div className="mr-3">
                                {" "}
                                <Calendario
                                  form={form}
                                  parametros="fecha_nacimiento-familiar"
                                  nameLabel="FECHA NACIMIENTO: "
                                />
                              </div>
                              <div className="pt-2">
                                <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  VIVE:
                                </h3>
                                <RadiusBoolean form={form} />
                              </div>
                            </div>
                            <div className="pt-2 pl-2">
                              {" "}
                              <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE CON ESTUDIANTE:
                              </h3>
                              <RadiusBoolean form={form} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* MADRE */}
                    {/* MADRE */}
                    {/* MADRE */}
                    <div>
                      {" "}
                      <h3 className="text-center text-gray-500">
                        LUGAR DE NACIMIENTO DE LA MADRE
                      </h3>
                      <div className="d-familiar pl-4">
                        <div className="columns">
                          {" "}
                          <Formulario
                            form={form}
                            parametros="centro-trabajo"
                            nameLabel="CENTRO DE TRABAJO:"
                          />
                          <Formulario
                            form={form}
                            parametros="ocupacion"
                            nameLabel="OCUPACION:"
                          />
                          <Formulario
                            form={form}
                            parametros="grado-instruccion"
                            nameLabel="GRADO DE INSTRUCCION:"
                          />
                        </div>
                        <div className="columns grid grid-flow-row-dense">
                          <div className="grid grid-flow-col-dense pr-1">
                            <div className="pr-3">
                              <ProvinciasSelect form={form} />
                            </div>
                            <div className="pr-3">
                              <ProvinciasSelect form={form} />
                            </div>
                            <div className="pr-3">
                              <DistritosSelect form={form} />
                            </div>
                          </div>
                          <div className="grid grid-flow-col-dense pr-4">
                            <div className="pr-3">
                              <Formulario
                                form={form}
                                parametros="telefono-madre"
                                nameLabel="TELEFONO:"
                              />
                            </div>
                            <div>
                              <Formulario
                                form={form}
                                parametros="celular-madre"
                                nameLabel="CELULAR:"
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-col-dense">
                            <div className="grid grid-flow-col-dense">
                              <div className="pr-3">
                                {" "}
                                <DistritosSelect form={form} />
                              </div>
                              <div className=" pt-2 pl-2">
                                <h3 className="pb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  APODERADO:
                                </h3>
                                <RadiusBoolean form={form} />
                              </div>
                            </div>
                            <div>
                              <div className="pr-4">
                                <Formulario
                                  form={form}
                                  parametros="e-mail-padre"
                                  nameLabel="E-MAIL:"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="BR pt-5 pb-8">
                          <button className="ButtonBR bg-sky-600">
                            <h1 className="text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              REGISTRAR ALUMNO
                            </h1>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
