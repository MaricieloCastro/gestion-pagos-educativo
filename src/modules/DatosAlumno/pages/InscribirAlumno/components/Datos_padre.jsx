import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";
import Formulario from "../components/formulario";
import "../InscribirAlumno.css";
import SelectSimple from "./SelectSimple"; // select
import {
  opcionesSexo,
  Departamentos,
  opcionesEstadoCivil,
  opcionesBoolean,
  opcionesViveCon,
  opcionesGradoInstitucional,
} from "../components/OpcionesSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  return true;
};
// Definir el esquema de validación usando Zod
const FormSchema = z.object({
  parentesco: z.string(1, "Campor requerido"),
  dni: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  nombres: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  sexo: z.string().min(1, "Campo requerido"),
  //lugar nacimiento
  departamento_ln: z.string().min(1, "Campo requerido"),
  provincia_ln: z.string().min(1, "Campo requerido"),
  distrito_ln: z.string().min(1, "Campo requerido"),
  //
  fecha_nacimiento: z.string(1, "Campor requerido"),
  edad: z
    .string()
    .min(2, "Edad requerida")
    .max(2, "Edad inválida")
    .refine(validateAge, { message: "Edad inválida" }),
  estado_civil: z.string(1, "Campo requerido"),
  vive: z.string(1, "Campo requerido"),
  vive_con: z.string(1, "Campo requerido"),
  apoderado: z.string(1, "Campo requerido"),
  celular: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono: z.string().min(9, "Campo requerido").max(9, "Telefono invalido"),
  departamento_d: z.string().min(1, "Campo requerido"),
  provincia_d: z.string().min(1, "Campo requerido"),
  distrito_d: z.string().min(1, "Campo requerido"),
  direccion: z.string().min(1, "El campo es requerido"),
  grado_institucional: z.string().min(1, "El campo es requerido"),
  centro_trabajo: z.string().min(1, "Campo requerido"),
  ocupacion: z.string().min(1, "Campo requerido"),
  correo: z.string().min(1, "Campo requerido"),
  // Agrega las validaciones para los otros campos aquí
});
export default function Datos_padre() {
  //UBIGEO LUGAR NACIMIENTO
  const [selectedDepartamento_ln, setSelectedDepartamento_ln] = useState(null);
  const [selectedProvincia_ln, setSelectedProvincia_ln] = useState(null);
  const [selectedDistrito_ln, setSelectedDistrito_ln] = useState(null);
  const handleDepartamento_lnChange = (selectedOption) => {
    setSelectedDepartamento_ln(selectedOption);
    setSelectedProvincia_ln(null);
    setSelectedDistrito_ln(null);
    //manejo de errores
    setSelectedOptionDepartamento_ln(option.value);
    setValue("departamento_ln", option.value);
    if (option.value) {
      clearErrors("departamento_ln"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleProvincia_lnChange = (selectedOption) => {
    setSelectedProvincia_ln(selectedOption);
    setSelectedDistrito_ln(null);
    //manejo de errores
    setSelectedOptionProvincia_ln(option.value);
    setValue("provincia_ln", option.value);
    if (option.value) {
      clearErrors("provincia_ln"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleDistrito_lnChange = (selectedOption) => {
    setSelectedDistrito_ln(selectedOption);
    //manejo de errores
    setSelectedOptionDistrito_ln(option.value);
    setValue("distrito_ln", option.value);
    if (option.value) {
      clearErrors("distrito_ln"); // Limpiar el error cuando se selecciona una opción
    }
  };
  //UBIGEO DOMICILIO
  const [selectedDepartamento_d, setSelectedDepartamento_d] = useState(null);
  const [selectedProvincia_d, setSelectedProvincia_d] = useState(null);
  const [selectedDistrito_d, setSelectedDistrito_d] = useState(null);
  const handleDepartamento_dChange = (selectedOption) => {
    setSelectedDepartamento_d(selectedOption);
    setSelectedProvincia_d(null);
    setSelectedDistrito_d(null);
    //manejo de errores
    setSelectedOptionDepartamento_d(option.value);
    setValue("departamento_d", option.value);
    if (option.value) {
      clearErrors("departamento_d"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleProvincia_dChange = (selectedOption) => {
    setSelectedProvincia_d(selectedOption);
    setSelectedDistrito_d(null);
    //manejo de errores
    setSelectedOptionProvincia_d(option.value);
    setValue("provincia_d", option.value);
    if (option.value) {
      clearErrors("provincia_d"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleDistrito_dChange = (selectedOption) => {
    setSelectedDistrito_d(selectedOption);
    //manejo de errores
    setSelectedOptionDistrito_d(option.value);
    setValue("distrito_d", option.value);
    if (option.value) {
      clearErrors("distrito_d"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      parentesco: "",
      dni: "",
      nombres: "",
      apellido_paterno: "",
      apellido_materno: "",
      sexo: "",
      //lugar de ancimiento
      departamento_ln: "",
      provincia_ln: "",
      distrito_ln: "",
      //
      fecha_nacimiento: "",
      edad: "",
      estado_civil: "",
      vive: "",
      vive_con: "",
      apoderado: "",
      celular: "",
      telefono: "",
      //domicilio
      departamento_d: "",
      provincia_d: "",
      distrito_d: "",
      //
      direccion: "",
      grado_institucional: "",
      centro_trabajo: "",
      ocupacion: "",
      correo: "",
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
      form.setError("departamento_ln", {
        message: "Selecciona un departamento.",
      });
      return;
    }
    if (!selectedOptionReligion) {
      form.setError("provincia_ln", {
        message: "Selecciona una provincia.",
      });
      return;
    }
    if (!selectedOptionParto) {
      form.setError("distrito_ln", {
        message: "Selecciona un distrito.",
      });
      return;
    }
    if (!selectedOptionNumeroHermanos) {
      form.setError("estado_civil", {
        message: "Selecciona un estado civil.",
      });
      return;
    }
    if (!selectedOptionCondicion) {
      form.setError("vive", {
        message: "Selecciona una opción",
      });
      return;
    }
    if (!selectedOptionSituacion) {
      form.setError("vive_con", {
        message: "Selecciona una opción",
      });
      return;
    }
    if (!selectedOptionNivel) {
      form.setError("apoderado", {
        message: "Selecciona una opción",
      });
      return;
    }
    if (!selectedOptionLenguaMaterna) {
      form.setError("departamento_d", {
        message: "Selecciona un departamento.",
      });
      return;
    }
    if (!selectedOptionReligion) {
      form.setError("provincia_d", {
        message: "Selecciona una provincia.",
      });
      return;
    }
    if (!selectedOptionParto) {
      form.setError("distrito_d", {
        message: "Selecciona un distrito.",
      });
      return;
    }
    if (!selectedOptionTurno) {
      form.setError("grado_instruccion", {
        message: "Selecciona una opción",
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
  //Lugar nacimiento
  const [selectedOptionDepartamento_ln, setSelectedOptionDepartamento_ln] =
    useState("");
  const [selectedOptionProvincia_ln, setSelectedOptionProvincia_ln] =
    useState("");
  const [selectedOptionDistrito_ln, setSelectedOptionDistrito_ln] =
    useState("");
  //
  const [selectedOptionEstadoCivil, setSelectedOptionEstadoCivil] =
    useState("");
  const [selectedOptionVive, setSelectedOptionVive] = useState("");
  const [selectedOptioViveCon, setSelectedOptionViveCon] = useState("");
  const [selectedOptionApoderado, setSelectedOptionApoderado] = useState("");
  //Domicilio
  const [selectedOptionDepartamento_d, setSelectedOptionDepartamento_d] =
    useState("");
  const [selectedOptionProvincia_d, setSelectedOptionProvincia_d] =
    useState("");
  const [selectedOptionDistrito_d, setSelectedOptionDistrito_d] = useState("");
  //
  const [selectedOptionGradoInstruccion, setSelectedOptionGradoInstruccion] =
    useState("");

  //sincronizar valor del select
  const handleSelectSexoChange = (option) => {
    setSelectedOptionSexo(option.value);
    setValue("sexo", option.value);
    if (option.value) {
      clearErrors("sexo"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectEstadoCivilChange = (option) => {
    setSelectedOptionEstadoCivil(option.value);
    setValue("estado_civil", option.value);
    if (option.value) {
      clearErrors("estado_civil"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectViveChange = (option) => {
    setSelectedOptionVive(option.value);
    setValue("vive", option.value);
    if (option.value) {
      clearErrors("vive"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectViveConChange = (option) => {
    setSelectedOptionViveCon(option.value);
    setValue("vive_con", option.value);
    if (option.value) {
      clearErrors("vive_con"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectApoderadoChange = (option) => {
    setSelectedOptionApoderado(option.value);
    setValue("apoderado", option.value);
    if (option.value) {
      clearErrors("apoderado"); // Limpiar el error cuando se selecciona una opción
    }
  };
  const handleSelectGradoInstruccionChange = (option) => {
    setSelectedOptionGradoInstruccion(option.value);
    setValue("grado_instruccion", option.value);
    if (option.value) {
      clearErrors("beneficio"); // Limpiar el error cuando se selecciona una opción
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex overflow-hidden h-screen blue-oscuro ">
          <MenuLateral>
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
                    type="number"
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
            <h3 className="text-center pt-3 text-gray-500">
              LUGAR DE NACIMIENTO
            </h3>
            <div className="grid grid-row-6 px-4">
              <div className="datos-familiar ">
                <div className="pr-2 pt-2">
                  <Formulario
                    form={form}
                    parametros="apellido_materno"
                    nameLabel="APELLIDO MATERNO :"
                  />
                </div>
                <div className="datos-familiar2 pt-4">
                  <div className="px-2">
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
                        className="text-sm font-medium text-destructive"
                      >
                        {errors.sexo.message}
                      </p>
                    )}
                  </div>
                  {/* ubigeo */}
                  <div className="grid grid-cols-3">
                    <div className="px-2">
                      <h3 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        DEPARTAMENTO:
                      </h3>
                      <SelectSimple
                        options={Departamentos}
                        name="departamento_ln"
                        placeholder="Departamento"
                        isDisabled={false}
                        // onChange={handleDepartamentoChange}
                        value={Departamentos.find(
                          (opt) => opt.value === selectedDepartamento_ln?.value
                        )}
                        onChange={handleDepartamento_lnChange}
                      />
                      {errors.departamento_ln && (
                        <p
                          id=":r21:-form-item-message"
                          className="text-sm font-medium text-destructive"
                        >
                          {errors.departamento_ln.message}
                        </p>
                      )}
                    </div>
                    <div className="px-2">
                      <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        PROVINCIA:
                      </h2>
                      <SelectSimple
                        options={
                          selectedDepartamento_ln
                            ? selectedDepartamento_ln.provincias
                            : []
                        }
                        name="provincia_ln"
                        placeholder="Provincia"
                        isDisabled={!selectedDepartamento_ln}
                        // value={selectedProvincia}
                        // onChange={handleProvinciaChange}
                        value={
                          selectedDepartamento_ln
                            ? selectedDepartamento_ln.provincias
                            : [].find(
                                (opt) =>
                                  opt.value === selectedProvincia_ln?.value
                              )
                        }
                        onChange={handleProvincia_lnChange}
                      />
                      {errors.provincia_ln && (
                        <p
                          id=":r21:-form-item-message"
                          className="text-sm font-medium text-destructive"
                        >
                          {errors.provincia_ln.message}
                        </p>
                      )}
                    </div>
                    <div className="pl-2">
                      <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        DISTRITO:
                      </h2>
                      <SelectSimple
                        options={
                          selectedProvincia_ln
                            ? selectedProvincia_ln.distritos
                            : []
                        }
                        isDisabled={!selectedProvincia_ln}
                        name="distrito_ln"
                        placeholder="Distrito"
                        // value={selectedDistrito}
                        // onChange={handleDistritoChange}
                        value={
                          selectedProvincia_ln
                            ? selectedProvincia_ln.distritos
                            : [].find(
                                (opt) =>
                                  opt.value === selectedDistrito_ln?.value
                              )
                        }
                        onChange={handleDistrito_lnChange}
                      />
                      {errors.distrito_ln && (
                        <p
                          id=":r21:-form-item-message"
                          className="text-sm font-medium text-destructive"
                        >
                          {errors.distrito_ln.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
                      name="estado_civil"
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      VIVE :
                    </h3>
                    <SelectSimple
                      options={opcionesBoolean}
                      placeholder={"Vive"}
                      name="vive"
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
                      name="vive_con"
                    />
                  </div>
                  <div className="pl-2">
                    <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      APODERADO:
                    </h3>
                    <SelectSimple
                      options={opcionesBoolean}
                      placeholder={"Apoderado"}
                      name="apoderado"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-center py-4 text-gray-500">DOMICILIO</h3>
              <div className="datos-familiar">
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
                      parametros="telefono"
                      nameLabel="TELEFONO:"
                    />
                  </div>
                </div>
                <div className="pl-2">
                  <div className="datos-familiar2">
                    <Formulario
                      form={form}
                      parametros="direccion"
                      nameLabel="DIRECCION:"
                    />
                    <div className="pt-2">
                      {/* ubigeo */}
                      <div className="grid grid-cols-3">
                        <div className="px-2">
                          <h3 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            DEPARTAMENTO:
                          </h3>
                          <SelectSimple
                            options={Departamentos}
                            name="departamento_d"
                            placeholder="Departamento"
                            value={selectedDepartamento_d}
                            onChange={handleDepartamento_dChange}
                            isDisabled={false}
                          />
                        </div>
                        <div className="px-2">
                          <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            PROVINCIA:
                          </h2>
                          <SelectSimple
                            options={
                              selectedDepartamento_d
                                ? selectedDepartamento.provincias
                                : []
                            }
                            value={selectedProvincia_d}
                            name="provincia_d"
                            placeholder="Provincia"
                            onChange={handleProvincia_dChange}
                            isDisabled={!selectedDepartamento_d}
                          />
                        </div>
                        <div className="pl-2">
                          <h2 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            DISTRITO:
                          </h2>
                          <SelectSimple
                            options={
                              selectedProvincia_d
                                ? selectedProvincia.distritos
                                : []
                            }
                            value={selectedDistrito_d}
                            name="distrito_d"
                            placeholder="Distrito"
                            onChange={handleDistrito_dChange}
                            isDisabled={!selectedProvincia_d}
                          />
                        </div>
                      </div>
                    </div>
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
                    name="grado_institucional"
                  />
                </div>
                <div className="px-2">
                  <Formulario
                    form={form}
                    parametros="centro_trabajo"
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
          </MenuLateral>
        </div>
      </form>
    </Form>
  );
}
