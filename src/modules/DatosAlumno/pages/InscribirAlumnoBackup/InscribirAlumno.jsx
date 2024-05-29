import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "./components/formulario";
import { Button } from "@/components/ui/button";
import "./InscribirAlumno.css";
import SelectSimple from "./components/SelectSimple"; // select
import {
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
} from "./components/OpcionesSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import {
  FormularioPadre,
  FormularioMadre,
  FormularioFamiliarExtra,
} from "./components/FormularioFamiliares";
import Ubigeo from "./components/Ubigeo";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  if (parseInt(age) <= 11) {
    throw new Error("La edad debe ser mayor de 11 años.");
  }
  return true;
};

// Definir el esquema de validación usando Zod
const FormSchema = z.object({
  // estudiante
  dni_estudiante: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  codigo_estudiante: z.string().min(1, "El campo es requerido"),
  nombres_estudiante: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_estudiante: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_estudiante: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  sexo: z.string().min(1, "Campo requerido"),
  //Padre
  dni_p: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  codigo_p: z.string().min(1, "El campo es requerido"),
  nombres_p: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_p: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_p: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  //Madre
  dni_m: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  codigo_m: z.string().min(1, "El campo es requerido"),
  nombres_m: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_m: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_m: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  //Familiar extra
  dni_fe: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  codigo_fe: z.string().min(1, "El campo es requerido"),
  nombres_fe: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_fe: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_fe: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  //-----------------------------------
  edad: z
    .string()
    .min(2, "Edad requerida")
    .max(2, "Edad inválida")
    .refine(validateAge, { message: "Edad inválida" }),
  direccion: z.string().min(1, "El campo es requerido"),
  cod_IE_procedencia: z.string().min(2, "Campo requerido"),
  parentesco: z.string().min(1, "Campo requerido"),
  celular: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono: z.string().min(9, "Campo requerido").max(9, "Telefono invalido"),
  centro_trabajo: z.string().min(1, "Campo requerido"),
  ocupacion: z.string().min(1, "Campo requerido"),
  correo: z.string().min(1, "Campo requerido"),
  departamento: z.string().min(1, "Campo requerido"),
  provincia: z.string().min(1, "Campo requerido"),
  distrito: z.string().min(1, "Campo requerido"),
  lengua_materna: z.string().min(1, "Campo requerido"),
  religion: z.string().min(1, "Campo requerido"),
  parto: z.string().min(1, "Campo requerido"),
  numero_hermanos: z.string().min(1, "Campo requerido"),
  condicion: z.string().min(1, "Campo requerido"),
  situacion: z.string().min(1, "Campo requerido"),
  nivel: z.string().min(1, "Campo requerido"),
  turno: z.string().min(1, "Campo requerido"),
  seccion: z.string().min(1, "Campo requerido"),
  grado: z.string().min(1, "Campo requerido"),
  beneficio: z.string().min(1, "Campo requerido"),
  // Agrega las validaciones para los otros campos aquí
});

export default function InscribirAlumno() {
  const [formularios, setFormularios] = useState({
    padre: false,
    madre: false,
    familiarExtra: false,
  });

  const toggleFormulario = (tipo) => {
    setFormularios({
      ...formularios,
      [tipo]: !formularios[tipo],
    });
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // Estudiante
      dni_estudiante: "",
      codigo_estudiante: "",
      nombres_estudiante: "",
      apellido_paterno_estudiante: "",
      apellido_materno_estudiante: "",
      sexo: "",
      edad_estudiante: "",
      //Papa
      dni_p: "",
      codigo_p: "",
      nombres_p: "",
      apellido_paterno_p: "",
      apellido_materno_p: "",
      edad_p: "",
      celular_p: "",
      telefono_p: "",
      direccion_p: "",
      //Mama
      dni_m: "",
      codigo_m: "",
      nombres_m: "",
      apellido_paterno_m: "",
      apellido_materno_m: "",
      edad_m: "",
      celular_m: "",
      telefono_m: "",
      direccion_m: "",
      //Familiar extra
      dni_fe: "",
      codigo_fe: "",
      nombres_fe: "",
      apellido_paterno_fe: "",
      apellido_materno_fe: "",
      edad_fe: "",
      celular_m: "",
      telefono_m: "",
      direccion_m: "",
      //-------------------

      cod_IE_procedencia: "",
      parentesco: "",
      centro_trabajo: "",
      ocupacion: "",
      correo: "",
      departamento: "",
      provincia: "",
      distrito: "",
      lengua_materna: "",
      religion: "",
      parto: "",
      numero_hermanos: "",
      condicion: "",
      situacion: "",
      nivel: "",
      turno: "",
      seccion: "",
      grado: "",
      beneficio: "",
      // Agrega los valores por defecto para los otros campos aquí
    },
  });

  const onSubmit = (data) => {
    if (!selectedOptionSexo) {
      form.setError("sexo", {
        message: "Selecciona una opción de sexo.",
      });
      return;
    }
    if (!selectedOptionLenguaMaterna) {
      form.setError("lengua_materna", {
        message: "Selecciona una opción de lengua materna.",
      });
      return;
    }
    if (!selectedOptionReligion) {
      form.setError("religion", {
        message: "Selecciona una opción de religion.",
      });
      return;
    }
    if (!selectedOptionParto) {
      form.setError("parto", {
        message: "Selecciona una opción de parto.",
      });
      return;
    }
    if (!selectedOptionNumeroHermanos) {
      form.setError("numero_hermanos", {
        message: "Selecciona una opción de numero de hermanos.",
      });
      return;
    }
    if (!selectedOptionCondicion) {
      form.setError("condicion", {
        message: "Selecciona una opción de condicion.",
      });
      return;
    }
    if (!selectedOptionSituacion) {
      form.setError("situacion", {
        message: "Selecciona una opción de situacion.",
      });
      return;
    }
    if (!selectedOptionNivel) {
      form.setError("nivel", {
        message: "Selecciona una opción de nivel.",
      });
      return;
    }
    if (!selectedOptionTurno) {
      form.setError("turno", {
        message: "Selecciona una opción de turno.",
      });
      return;
    }
    if (!selectedOptionSeccion) {
      form.setError("seccion", {
        message: "Selecciona una opción de seccion.",
      });
      return;
    }
    if (!selectedOptionGrado) {
      form.setError("grado", {
        message: "Selecciona una opción de grado.",
      });
      return;
    }
    if (!selectedOptionBeneficio) {
      form.setError("beneficio", {
        message: "Selecciona una opción de beneficio.",
      });
      return;
    }
    // Lógica para manejar el envío del formulario
    console.log("Datos del formulario:", {
      ...data,
      sexo: selectedOptionSexo,
      lengua_materna: selectedOptionLenguaMaterna,
      religion: selectedOptionReligion,
      parto: selectedOptionParto,
      numero_hermanos: selectedOptionNumeroHermanos,
      condicion: selectedOptionCondicion,
      situacion: selectedOptionSituacion,
      nivel: selectedOptionNivel,
      turno: selectedOptionTurno,
      seccion: selectedOptionSeccion,
      grado: selectedOptionGrado,
      beneficio: selectedOptionBeneficio,
    });
  };

  //Validaciones de los Select
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
    setValue,
  } = form;
  const [selectedOptionSexo, setSelectedOptionSexo] = useState("");
  const [selectedOptionLenguaMaterna, setSelectedOptionLenguaMaterna] =
    useState("");
  const [selectedOptionReligion, setSelectedOptionReligion] = useState("");
  const [selectedOptionParto, setSelectedOptionParto] = useState("");
  const [selectedOptionNumeroHermanos, setSelectedOptionNumeroHermanos] =
    useState("");
  const [selectedOptionCondicion, setSelectedOptionCondicion] = useState("");
  const [selectedOptionSituacion, setSelectedOptionSituacion] = useState("");
  const [selectedOptionNivel, setSelectedOptionNivel] = useState("");
  const [selectedOptionTurno, setSelectedOptionTurno] = useState("");
  const [selectedOptionSeccion, setSelectedOptionSeccion] = useState("");
  const [selectedOptionGrado, setSelectedOptionGrado] = useState("");
  const [selectedOptionBeneficio, setSelectedOptionBeneficio] = useState("");

  //sincronizar valor del select
  const handleSelectSexoChange = (option) => {
    setSelectedOptionSexo(option.value);
    setValue("sexo", option.value);
    if (option.value) {
      clearErrors("sexo"); // Limpiar el error cuando se selecciona una opción
    }
  };

  const handleSelectLenguaMaternaChange = (option) => {
    setSelectedOptionLenguaMaterna(option.value);
    setValue("lengua_materna", option.value);
    if (option.value) {
      clearErrors("lengua_materna"); // Limpiar el error cuando se selecciona una opción
    }
  };

  const handleSelectReligionChange = (option) => {
    setSelectedOptionReligion(option.value);
    setValue("religion", option.value);
    if (option.value) {
      clearErrors("religion"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectPartoChange = (option) => {
    setSelectedOptionParto(option.value);
    setValue("parto", option.value);
    if (option.value) {
      clearErrors("parto"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectNumeroHermanosChange = (option) => {
    setSelectedOptionNumeroHermanos(option.value);
    setValue("numero_hermanos", option.value);
    if (option.value) {
      clearErrors("numero_hermanos"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectCondicionChange = (option) => {
    setSelectedOptionCondicion(option.value);
    setValue("condicion", option.value);
    if (option.value) {
      clearErrors("condicion"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectSituacionChange = (option) => {
    setSelectedOptionSituacion(option.value);
    setValue("situacion", option.value);
    if (option.value) {
      clearErrors("situacion"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectNivelChange = (option) => {
    setSelectedOptionNivel(option.value);
    setValue("nivel", option.value);
    if (option.value) {
      clearErrors("nivel"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectTurnoChange = (option) => {
    setSelectedOptionTurno(option.value);
    setValue("turno", option.value);
    if (option.value) {
      clearErrors("turno"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectSeccionChange = (option) => {
    setSelectedOptionSeccion(option.value);
    setValue("seccion", option.value);
    if (option.value) {
      clearErrors("seccion"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectGradoChange = (option) => {
    setSelectedOptionGrado(option.value);
    setValue("grado", option.value);
    if (option.value) {
      clearErrors("grado"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectBeneficioChange = (option) => {
    setSelectedOptionBeneficio(option.value);
    setValue("beneficio", option.value);
    if (option.value) {
      clearErrors("beneficio"); // Limpiar el error cuando se selecciona una opción
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                      <div className="grid grid-flow-row-dense">
                        <div className="grid grid-cols-2">
                          <div className="grid grid-cols-2 pr-2">
                            <div className="pr-2">
                              <Formulario
                                form={form}
                                type="number"
                                parametros="dni_estudiante"
                                nameLabel="DNI:"
                              />
                            </div>
                            <div className="pl-2">
                              <Formulario
                                type="text"
                                form={form}
                                parametros="codigo_estudiante"
                                nameLabel="CODIGO:"
                              />
                            </div>
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              type="text"
                              parametros="nombres_estudiante"
                              nameLabel="NOMBRES:"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Formulario
                              form={form}
                              parametros="apellido_paterno_estudiante"
                              nameLabel="APELLIDO PATERNO:"
                            />
                          </div>
                          <div className="pl-2">
                            <Formulario
                              form={form}
                              parametros="apellido_materno_estudiante"
                              nameLabel="APELLIDO MATERNO:"
                            />
                          </div>
                        </div>
                        <h3 className="text-center text-gray-500 py-1">
                          LUGAR DE NACIMIENTO
                        </h3>
                        <div className="datos-estudiante pb-4">
                          <div className="pr-2">
                            <h3 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              SEXO:
                            </h3>
                            <SelectSimple
                              options={opcionesSexo}
                              name="sexo"
                              placeholder="Sexo"
                              value={opcionesSexo.find(
                                (opt) => opt.value === selectedOptionSexo
                              )}
                              onChange={handleSelectSexoChange}
                            />
                            {errors.sexo && (
                              <p
                                id=":r21:-form-item-message"
                                class="text-sm font-medium text-destructive"
                              >
                                {errors.sexo.message}
                              </p>
                            )}
                          </div>
                          <Ubigeo />
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
                    <div className="grid grid-flow-row-dense px-4">
                      <div className="grid grid-cols-3">
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <Calendario
                              form={form}
                              parametros="fecha_nacimiento"
                              nameLabel="FECHA NACIMIENTO: "
                            />
                          </div>
                          <div className="px-2">
                            <Formulario
                              form={form}
                              type="number"
                              parametros="edad_estudiante"
                              nameLabel="EDAD:"
                            />
                          </div>
                        </div>
                        <div className="px-2">
                          <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            LENGUA MATERNO:
                          </h3>
                          <SelectSimple
                            options={opcionesLenguajeMaterno}
                            placeholder={"Lenguaje materno"}
                            name="lengua_materna"
                            value={opcionesLenguajeMaterno.find(
                              (opt) => opt.value === selectedOptionLenguaMaterna
                            )}
                            onChange={handleSelectLenguaMaternaChange}
                          />
                          {errors.lengua_materna && (
                            <p
                              id=":r21:-form-item-message"
                              className="text-sm font-medium text-destructive"
                            >
                              {errors.lengua_materna.message}
                            </p>
                          )}
                        </div>
                        <div className="pl-2">
                          <h2 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            RELIGION:
                          </h2>
                          <SelectSimple
                            options={opcionesReligiones}
                            placeholder={"Seleccione Religion"}
                            name="religion"
                            value={opcionesReligiones.find(
                              (opt) => opt.value === selectedOptionReligion
                            )}
                            onChange={handleSelectReligionChange}
                          />
                          {errors.religion && (
                            <p
                              id=":r21:-form-item-message"
                              className="text-sm font-medium text-destructive"
                            >
                              {errors.religion.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <h3 className="text-center text-gray-500 pt-2">
                        LUGAR DE NACIMIENTO
                      </h3>
                      <div className="datos">
                        <div className="grid grid-cols-2">
                          <div className="pr-2">
                            <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              PARTO:
                            </h3>
                            <SelectSimple
                              options={opcionesParto}
                              placeholder={"Parto"}
                              name="parto"
                              value={opcionesParto.find(
                                (opt) => opt.value === selectedOptionParto
                              )}
                              onChange={handleSelectPartoChange}
                            />
                            {errors.parto && (
                              <p
                                id=":r21:-form-item-message"
                                className="text-sm font-medium text-destructive"
                              >
                                {errors.parto.message}
                              </p>
                            )}
                          </div>
                          <div className="px-2">
                            <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              NUMERO HERMANOS:
                            </h3>
                            <SelectSimple
                              options={opcionesNumeroHermanos}
                              placeholder={"N° Hermanos"}
                              name="numero_hermanos"
                              value={opcionesNumeroHermanos.find(
                                (opt) =>
                                  opt.value === selectedOptionNumeroHermanos
                              )}
                              onChange={handleSelectNumeroHermanosChange}
                            />
                            {errors.numero_hermanos && (
                              <p
                                id=":r21:-form-item-message"
                                className="text-sm font-medium text-destructive"
                              >
                                {errors.numero_hermanos.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="datos2">
                          <div className="pt-1">
                            <Ubigeo />
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
                              name="condicion"
                              value={opcionesCondicion.find(
                                (opt) => opt.value === selectedOptionCondicion
                              )}
                              onChange={handleSelectCondicionChange}
                            />
                            {errors.condicion && (
                              <p
                                id=":r21:-form-item-message"
                                className="text-sm font-medium text-destructive"
                              >
                                {errors.condicion.message}
                              </p>
                            )}
                          </div>
                          <div className="px-2">
                            <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              SITUACION:
                            </h3>
                            <SelectSimple
                              options={opcionesSituacion}
                              placeholder="Situacion"
                              name="situacion"
                              value={opcionesSituacion.find(
                                (opt) => opt.value === selectedOptionSituacion
                              )}
                              onChange={handleSelectSituacionChange}
                            />
                            {errors.situacion && (
                              <p
                                id=":r21:-form-item-message"
                                className="text-sm font-medium text-destructive"
                              >
                                {errors.situacion.message}
                              </p>
                            )}
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
                                name="nivel"
                                value={opcionesNivel.find(
                                  (opt) => opt.value === selectedOptionNivel
                                )}
                                onChange={handleSelectNivelChange}
                              />
                              {errors.nivel && (
                                <p
                                  id=":r21:-form-item-message"
                                  className="text-sm font-medium text-destructive"
                                >
                                  {errors.nivel.message}
                                </p>
                              )}
                            </div>{" "}
                            <div className="px-2">
                              <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                TURNO:
                              </h3>
                              <SelectSimple
                                options={opcionesTurno}
                                placeholder="Turno"
                                name="turno"
                                value={opcionesTurno.find(
                                  (opt) => opt.value === selectedOptionTurno
                                )}
                                onChange={handleSelectTurnoChange}
                              />
                              {errors.turno && (
                                <p
                                  id=":r21:-form-item-message"
                                  className="text-sm font-medium text-destructive"
                                >
                                  {errors.turno.message}
                                </p>
                              )}
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
                                name="seccion"
                                value={opcionesSeccion.find(
                                  (opt) => opt.value === selectedOptionSeccion
                                )}
                                onChange={handleSelectSeccionChange}
                              />
                              {errors.seccion && (
                                <p
                                  id=":r21:-form-item-message"
                                  className="text-sm font-medium text-destructive"
                                >
                                  {errors.seccion.message}
                                </p>
                              )}
                            </div>
                            <div className="px-2">
                              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                GRADO:
                              </h3>
                              <SelectSimple
                                options={opcionesGrado}
                                placeholder="Grado"
                                name="grado"
                                value={opcionesGrado.find(
                                  (opt) => opt.value === selectedOptionGrado
                                )}
                                onChange={handleSelectGradoChange}
                              />
                              {errors.grado && (
                                <p
                                  id=":r21:-form-item-message"
                                  className="text-sm font-medium text-destructive"
                                >
                                  {errors.grado.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="pl-2">
                            <h3 className="sp pt-2  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              BENEFICIO:
                            </h3>
                            <SelectSimple
                              options={opcionesBeneficio}
                              placeholder="Beneficio"
                              name="beneficio"
                              value={opcionesBeneficio.find(
                                (opt) => opt.value === selectedOptionBeneficio
                              )}
                              onChange={handleSelectBeneficioChange}
                            />
                            {errors.beneficio && (
                              <p
                                id=":r21:-form-item-message"
                                className="text-sm font-medium text-destructive"
                              >
                                {errors.beneficio.message}
                              </p>
                            )}
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
                    <div className="pt-3">
                      <h3 className="pl-4 text-gray-500 pb-2">PADRE :</h3>
                      <FormularioPadre />
                    </div>
                    {/* MADRE */}
                    <div className=" p-3">
                      <h3 className="pl-4 text-gray-500 pb-2">MADRE :</h3>
                      <FormularioMadre />
                    </div>
                    {/* FAMILIAR EXTRA */}
                    <div className="contenido-extra">
                      <span className="extra pl-4 pt-4 pb-4 pr-1">
                        FAMILIAR EXTRA
                      </span>
                      <a
                        className="h-6 w-6 border border-white hover:bg-blue-500 bg-transparent rounded-full flex items-center justify-center"
                        onClick={() => toggleFormulario("familiarExtra")}
                      >
                        {formularios.familiarExtra ? "-" : "+"}
                      </a>
                      {/* Mostrar el formulario familiar extra si está activo */}
                      {formularios.familiarExtra && <FormularioFamiliarExtra />}
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
