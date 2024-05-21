import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "./components/formulario";
import { Button } from "@/components/ui/button";
import "./InscribirAlumno.css";
//Ubigeo prueba
import { DepartamentosSelect } from "./components/DepartamentosSelect";
import { ProvinciasSelect } from "./components/ProvinciasSelect";
import { DistritosSelect } from "./components/DistritosSelect";
//
import { AñoLectivoSelect } from "./components/AñoLectivo";
// Opciones para el Select y el Select xdxdxd
import SelectSimple from "./components/SelectSimple"; // select
import {
  Departamentos,
  opcionesAñoLectivo,
  opcionesEstadoCivil,
  opcionesGrado,
  opcionesSeccion,
  opcionesNumeroHermanos,
  opcionesSituacion,
  opcionesSexo,
  opcionesLenguajeMaterno,
  opcionesReligiones,
  opcionesParto,
  opcionesCondicion,
  opcionesNivel,
  opcionesTurno,
  opcionesBeneficio,
  opcionesViveCon,
  opcionesBoolean,
  opcionesGradoInstitucional,
} from "./components/OpcionesSelect";
import { RadiusSexo } from "./components/RadiusSexo";
import { RadiusBoolean } from "./components/RadiusBoolean";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Email } from "@mui/icons-material";

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

  const [selectedDepartamento, setSelectedDepartamento] = useState(null);
  const [selectedProvincia, setSelectedProvincia] = useState(null);
  const [selectedDistrito, setSelectedDistrito] = useState(null);

  const handleDepartamentoChange = (selectedOption) => {
    setSelectedDepartamento(selectedOption);
    setSelectedProvincia(null);
    setSelectedDistrito(null);
  };

  const handleProvinciaChange = (selectedOption) => {
    setSelectedProvincia(selectedOption);
    setSelectedDistrito(null);
  };

  const handleDistritoChange = (selectedOption) => {
    setSelectedDistrito(selectedOption);
  };

  return (
    <Form {...form}>
      <form>
        <div className="flex overflow-hidden h-screen blue-oscuro ">
          <MenuLateral>
            {/* conteiner general */}
            <div className="conteiner-general flex overflow-hidden h-screen blue-oscuro m-4">
              <div className="conteiner">
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
                  <div className=" bg-white-texto pt-3 pr-3">
                    <div className=" bg-blue-claro text-white pr-5 pl-5 pt-4 h-full">
                      <h2 className="underline">DATOS ESTUDIANTES:</h2>
                      <div className="grid grid-rows-3">
                        <div className="grid grid-cols-2">
                          <div className="grid grid-cols-2 pr-2">
                            <div className="pr-2">
                              <Formulario
                                form={form}
                                parametros="dni"
                                nameLabel="DNI:"
                              />
                            </div>
                            <div className="pl-2">
                              <Formulario
                                form={form}
                                parametros="codigo"
                                nameLabel="CODICO:"
                              />
                            </div>
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="nombres"
                              nameLabel="NOMBRES:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="apellido_paterno"
                              nameLabel="APELLIDO PATERNO:"
                            />
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="apellido_materno"
                              nameLabel="APELLIDO MATERNO:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-4 pt-4">
                          <div className="pr-2">
                            <h3 className="pb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              SEXO:
                            </h3>
                            <SelectSimple
                              options={opcionesSexo}
                              placeholder="Sexo"
                            />
                          </div>
                          <div className="px-2">
                            <h3 className="pb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              DEPARTAMENTO:
                            </h3>
                            <SelectSimple
                              options={Departamentos}
                              value={selectedDepartamento}
                              onChange={handleDepartamentoChange}
                              placeholder="Departamento"
                              isDisabled={false}
                            />
                          </div>
                          <div className="px-2">
                            <h2 className="pb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              PROVINCIA:
                            </h2>
                            <SelectSimple
                              options={
                                selectedDepartamento
                                  ? selectedDepartamento.provincias
                                  : []
                              }
                              value={selectedProvincia}
                              onChange={handleProvinciaChange}
                              placeholder="Provincia"
                              isDisabled={!selectedDepartamento}
                            />
                          </div>
                          <div className="pl-2">
                            <h2 className="pb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              DISTRITO:
                            </h2>
                            <SelectSimple
                              options={
                                selectedProvincia
                                  ? selectedProvincia.distritos
                                  : []
                              }
                              value={selectedDistrito}
                              onChange={handleDistritoChange}
                              placeholder="Distrito"
                              isDisabled={!selectedProvincia}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*panel inferior */}
                <div className="p-3">
                  <div className=" bg-blue-claro text-white h-full px-6 py-3 ">
                    <h2 className="pl-4 pt-4 pb-4 underline">
                      DATOS SECUNDARIOS DEL ESTUDIANTE :
                    </h2>
                    <div className="grid grid-rows-2 px-4">
                      <div className="datos-secundarios">
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Calendario
                              form={form}
                              parametros="fecha_nacimiento-familiar"
                              nameLabel="FECHA NACIMIENTO: "
                            />
                          </div>
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="edad"
                              nameLabel="EDAD:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-2">
                            <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              LENGUA MATERNO:
                            </h3>
                            <SelectSimple
                              options={opcionesLenguajeMaterno}
                              placeholder={"Lenguaje materno"}
                            />
                          </div>
                          <div className="pl-2">
                            <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              RELIGION:
                            </h2>
                            <SelectSimple
                              options={opcionesReligiones}
                              placeholder={"religiones"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6">
                        <div className="pr-2">
                          <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            PARTO:
                          </h3>
                          <SelectSimple
                            options={opcionesParto}
                            placeholder={"Parto"}
                          />
                        </div>
                        <div className="px-2">
                          <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            NUMERO HERMANOS:
                          </h3>
                          <SelectSimple
                            options={opcionesNumeroHermanos}
                            placeholder={"N° Hermanos"}
                          />
                        </div>
                        <div className="px-2">
                          <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            DEPARTAMENTO:
                          </h3>
                          <SelectSimple
                            options={Departamentos}
                            value={selectedDepartamento}
                            onChange={handleDepartamentoChange}
                            placeholder="Departamento"
                            isDisabled={false}
                          />
                        </div>
                        <div className="px-2">
                          <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            PROVINCIA:
                          </h2>
                          <SelectSimple
                            options={
                              selectedDepartamento
                                ? selectedDepartamento.provincias
                                : []
                            }
                            value={selectedProvincia}
                            onChange={handleProvinciaChange}
                            placeholder="Provincia"
                            isDisabled={!selectedDepartamento}
                          />
                        </div>
                        <div className="px-2">
                          <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            DISTRITO:
                          </h2>
                          <SelectSimple
                            options={
                              selectedProvincia
                                ? selectedProvincia.distritos
                                : []
                            }
                            value={selectedDistrito}
                            onChange={handleDistritoChange}
                            placeholder="Distrito"
                            isDisabled={!selectedProvincia}
                          />
                        </div>
                        <div className="pl-2">
                          <Formulario
                            form={form}
                            parametros="direccion"
                            nameLabel="DIRECCION:"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="pl-4 pt-4 pb-4">
                      MATRICULA DEL ESTUDIANTE:
                    </h2>
                    <div className="grid grid-rows-2 px-4">
                      <div>
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              CONDICION:
                            </h3>
                            <SelectSimple
                              options={opcionesCondicion}
                              placeholder="Condicion"
                            />
                          </div>
                          <div className="px-2">
                            <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              SITUACION:
                            </h3>
                            <SelectSimple
                              options={opcionesSituacion}
                              placeholder="Situacion"
                            />
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="cod_IE_procedencia"
                              nameLabel="COD. IE PROCEDENCIA:"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3">
                          <div className="grid grid-cols-2">
                            <div className="pr-2">
                              <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                NIVEL:
                              </h3>
                              <SelectSimple
                                options={opcionesNivel}
                                placeholder="Nivel"
                              />
                            </div>{" "}
                            <div className="px-2">
                              <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                TURNO:
                              </h3>
                              <SelectSimple
                                options={opcionesTurno}
                                placeholder="Turno"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                SECCION:
                              </h3>
                              <SelectSimple
                                options={opcionesSeccion}
                                placeholder="Seccion"
                              />
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                GRADO:
                              </h3>
                              <SelectSimple
                                options={opcionesGrado}
                                placeholder="Grado"
                              />
                            </div>
                          </div>
                          <div className="pl-2">
                            <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              BENEFICIO:
                            </h3>
                            <SelectSimple
                              options={opcionesBeneficio}
                              placeholder="Beneficio"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* DATOS FAMILIAR */}
                <div className=" p-3">
                  <div className=" bg-blue-claro text-white grid px-6 py-3">
                    <h2 className="pl-4 pt-4 underline">DATOS DE FAMILIAR :</h2>
                    {/* PADRE */}
                    <div className="Padre">
                      <h3 className="pl-4 pt-3 pb-4 text-gray-500">PADRE :</h3>
                      <div className="grid grid-cols-3 px-4">
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="parentesco"
                              nameLabel="PARENTESCO :"
                            />
                          </div>
                          <div className="px-2">
                            <Formulario
                              form={form}
                              parametros="dni"
                              nameLabel="DNI :"
                            />
                          </div>
                        </div>
                        <div className="px-2">
                          <Formulario
                            form={form}
                            parametros="nombres"
                            nameLabel="NOMBRES:"
                          />
                        </div>
                        <div className="pl-2">
                          <Formulario
                            form={form}
                            parametros="apellido_paterno"
                            nameLabel="APELLIDO PATERNO :"
                          />
                        </div>
                      </div>
                      <h3 className="text-center py-4 text-gray-500">
                        LUGAR DE NACIMIENTO DEL PADRE
                      </h3>
                      <div className="grid grid-row-6 px-4">
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="apellido_materno"
                              nameLabel="APELLIDO MATERNO :"
                            />
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                SEXO :
                              </h3>
                              <SelectSimple
                                options={opcionesSexo}
                                placeholder={"sexo"}
                              />
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DEPARTAMENTO:
                              </h3>
                              <SelectSimple
                                options={Departamentos}
                                value={selectedDepartamento}
                                onChange={handleDepartamentoChange}
                                placeholder="Departamento"
                                isDisabled={false}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                PROVINCIA:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedDepartamento
                                    ? selectedDepartamento.provincias
                                    : []
                                }
                                value={selectedProvincia}
                                onChange={handleProvinciaChange}
                                placeholder="Provincia"
                                isDisabled={!selectedDepartamento}
                              />
                            </div>
                            <div className="pl-2">
                              <h2 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DISTRITO:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedProvincia
                                    ? selectedProvincia.distritos
                                    : []
                                }
                                value={selectedDistrito}
                                onChange={handleDistritoChange}
                                placeholder="Distrito"
                                isDisabled={!selectedProvincia}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="grid grid-cols-2">
                            <div className="pr-2">
                              <Calendario
                                form={form}
                                parametros="fecha_nacimiento-familiar"
                                nameLabel="FECHA NACIMIENTO: "
                              />
                            </div>
                            <div className="px-2">
                              <Formulario
                                form={form}
                                parametros="edad"
                                nameLabel="EDAD :"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                ESTADO CIVIL :
                              </h3>
                              <SelectSimple
                                options={opcionesEstadoCivil}
                                placeholder={"Estado civil"}
                              />
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE :
                              </h3>
                              <SelectSimple
                                options={opcionesBoolean}
                                placeholder={"Vive"}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE CON :
                              </h3>
                              <SelectSimple
                                options={opcionesViveCon}
                                placeholder={"Vive con"}
                              />
                            </div>
                            <div className="pl-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                APODERADO:
                              </h3>{" "}
                              <SelectSimple
                                options={opcionesBoolean}
                                placeholder={"Apoderado"}
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-center py-4 text-gray-500">
                          DOMICILIO
                        </h3>
                        <div className="grid grid-cols-3">
                          <div className="grid grid-cols-2">
                            <div className="pr-2">
                              <Formulario
                                form={form}
                                parametros="celular"
                                nameLabel="CELULAR:"
                              />
                            </div>
                            <div className="px-2">
                              <Formulario
                                form={form}
                                parametros="centro-trabajo"
                                nameLabel="TELEFONO:"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DEPARTAMENTO:
                              </h3>
                              <SelectSimple
                                options={Departamentos}
                                value={selectedDepartamento}
                                onChange={handleDepartamentoChange}
                                placeholder="Departamento"
                                isDisabled={false}
                              />
                            </div>
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                PROVINCIA:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedDepartamento
                                    ? selectedDepartamento.provincias
                                    : []
                                }
                                value={selectedProvincia}
                                onChange={handleProvinciaChange}
                                placeholder="Provincia"
                                isDisabled={!selectedDepartamento}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DISTRITO:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedProvincia
                                    ? selectedProvincia.distritos
                                    : []
                                }
                                value={selectedDistrito}
                                onChange={handleDistritoChange}
                                placeholder="Distrito"
                                isDisabled={!selectedProvincia}
                              />
                            </div>
                            <div className="pl-2">
                              <Formulario
                                form={form}
                                parametros="direccion"
                                nameLabel="DIRECCION:"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              GRADO INSTITUCIONAL :
                            </h3>
                            <SelectSimple
                              options={opcionesGradoInstitucional}
                              placeholder={"Grado institucional"}
                            />
                          </div>
                          <div className="px-2">
                            <Formulario
                              form={form}
                              parametros="centro-trabajo"
                              nameLabel="CENTRO DE TRABAJO:"
                            />
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="ocupacion"
                              nameLabel="OCUPACION:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="correo"
                              nameLabel="CORREO:"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* MADRE */}
                    <div className="Madre">
                      <h3 className="pl-4 pt-3 pb-4 text-gray-500">MADRE :</h3>
                      <div className="grid grid-cols-3 px-4">
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="parentesco"
                              nameLabel="PARENTESCO :"
                            />
                          </div>
                          <div className="px-2">
                            <Formulario
                              form={form}
                              parametros="dni"
                              nameLabel="DNI :"
                            />
                          </div>
                        </div>
                        <div className="px-2">
                          <Formulario
                            form={form}
                            parametros="nombres"
                            nameLabel="NOMBRES:"
                          />
                        </div>
                        <div className="pl-2">
                          <Formulario
                            form={form}
                            parametros="apellido_paterno"
                            nameLabel="APELLIDO PATERNO :"
                          />
                        </div>
                      </div>
                      <h3 className="text-center py-4 text-gray-500">
                        LUGAR DE NACIMIENTO DEL MADRE
                      </h3>
                      <div className="grid grid-row-6 px-4">
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="apellido_materno"
                              nameLabel="APELLIDO MATERNO :"
                            />
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                SEXO :
                              </h3>
                              <SelectSimple
                                options={opcionesSexo}
                                placeholder={"sexo"}
                              />
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DEPARTAMENTO:
                              </h3>
                              <SelectSimple
                                options={Departamentos}
                                value={selectedDepartamento}
                                onChange={handleDepartamentoChange}
                                placeholder="Departamento"
                                isDisabled={false}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                PROVINCIA:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedDepartamento
                                    ? selectedDepartamento.provincias
                                    : []
                                }
                                value={selectedProvincia}
                                onChange={handleProvinciaChange}
                                placeholder="Provincia"
                                isDisabled={!selectedDepartamento}
                              />
                            </div>
                            <div className="pl-2">
                              <h2 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DISTRITO:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedProvincia
                                    ? selectedProvincia.distritos
                                    : []
                                }
                                value={selectedDistrito}
                                onChange={handleDistritoChange}
                                placeholder="Distrito"
                                isDisabled={!selectedProvincia}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="grid grid-cols-2">
                            <div className="pr-2">
                              <Calendario
                                form={form}
                                parametros="fecha_nacimiento-familiar"
                                nameLabel="FECHA NACIMIENTO: "
                              />
                            </div>
                            <div className="px-2">
                              <Formulario
                                form={form}
                                parametros="edad"
                                nameLabel="EDAD :"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                ESTADO CIVIL :
                              </h3>
                              <SelectSimple
                                options={opcionesEstadoCivil}
                                placeholder={"Estado civil"}
                              />
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE :
                              </h3>
                              <SelectSimple
                                options={opcionesBoolean}
                                placeholder={"Vive"}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                VIVE CON :
                              </h3>
                              <SelectSimple
                                options={opcionesViveCon}
                                placeholder={"Vive con"}
                              />
                            </div>
                            <div className="pl-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                APODERADO:
                              </h3>{" "}
                              <SelectSimple
                                options={opcionesBoolean}
                                placeholder={"Apoderado"}
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-center py-4 text-gray-500">
                          DOMICILIO
                        </h3>
                        <div className="grid grid-cols-3">
                          <div className="grid grid-cols-2">
                            <div className="pr-2">
                              <Formulario
                                form={form}
                                parametros="celular"
                                nameLabel="CELULAR:"
                              />
                            </div>
                            <div className="px-2">
                              <Formulario
                                form={form}
                                parametros="centro-trabajo"
                                nameLabel="TELEFONO:"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DEPARTAMENTO:
                              </h3>
                              <SelectSimple
                                options={Departamentos}
                                value={selectedDepartamento}
                                onChange={handleDepartamentoChange}
                                placeholder="Departamento"
                                isDisabled={false}
                              />
                            </div>
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                PROVINCIA:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedDepartamento
                                    ? selectedDepartamento.provincias
                                    : []
                                }
                                value={selectedProvincia}
                                onChange={handleProvinciaChange}
                                placeholder="Provincia"
                                isDisabled={!selectedDepartamento}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-2">
                              <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                DISTRITO:
                              </h2>
                              <SelectSimple
                                options={
                                  selectedProvincia
                                    ? selectedProvincia.distritos
                                    : []
                                }
                                value={selectedDistrito}
                                onChange={handleDistritoChange}
                                placeholder="Distrito"
                                isDisabled={!selectedProvincia}
                              />
                            </div>
                            <div className="pl-2">
                              <Formulario
                                form={form}
                                parametros="direccion"
                                nameLabel="DIRECCION:"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              GRADO INSTITUCIONAL :
                            </h3>
                            <SelectSimple
                              options={opcionesGradoInstitucional}
                              placeholder={"Grado institucional"}
                            />
                          </div>
                          <div className="px-2">
                            <Formulario
                              form={form}
                              parametros="centro-trabajo"
                              nameLabel="CENTRO DE TRABAJO:"
                            />
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="ocupacion"
                              nameLabel="OCUPACION:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="correo"
                              nameLabel="CORREO:"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contenido-extra">
                      <span className="extra pl-4 pt-4 pb-4 pr-1">
                        FAMILIAR EXTRA
                      </span>
                      <a
                        href="#"
                        className="h-6 w-6 border border-white  hover:bg-blue-500 bg-transparent rounded-full flex items-center justify-center"
                      >
                        +
                      </a>
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
          </MenuLateral>
        </div>
      </form>
    </Form>
  );
}
