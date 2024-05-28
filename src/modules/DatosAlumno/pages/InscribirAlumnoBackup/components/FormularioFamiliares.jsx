import React, { useState } from "react";
import Formulario from "./formulario";
import "../InscribirAlumno.css";
import SelectSimple from "./SelectSimple";
import {
  opcionesEstadoCivil,
  opcionesSexo,
  opcionesViveCon,
  opcionesBoolean,
  opcionesGradoInstitucional,
} from "./OpcionesSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Ubigeo from "./Ubigeo";
import { z } from "zod";

// Definir el esquema de validación usando Zod
const FormSchem = z.object({
  sexo: z.string().min(1, "Campo requerido"), // Agrega la validación para sexo
  estadoCivil: z.string().min(1, "Campo requerido"), // Agrega la validación para estado civil
  vive: z.string().min(1, "Campo requerido"), // Agrega la validación para vive
  viveCon: z.string().min(1, "Campo requerido"), // Agrega la validación para vive con
  apoderado: z.string().min(1, "Campo requerido"), // Agrega la validación para apoderado
  gradoInstitucional: z.string().min(1, "Campo requerido"), // Agrega la validación para grado institucional
});
const onSubmit = (data) => {
  // Validar los selects antes de enviar el formulario
  if (!selectedOptionSexo) {
    setError("sexo", { message: "Selecciona una opción de sexo." });
    return;
  }
  if (!selectedOptionEstadoCivil) {
    setError("estadoCivil", {
      message: "Selecciona una opción de estado civil.",
    });
    return;
  }
  if (!selectedOptionVive) {
    setError("vive", { message: "Selecciona una opción de vive." });
    return;
  }
  if (!selectedOptionViveCon) {
    setError("viveCon", { message: "Selecciona una opción de vive con." });
    return;
  }
  if (!selectedOptionApoderado) {
    setError("apoderado", { message: "Selecciona una opción de apoderado." });
    return;
  }
  if (!selectedOptionGradoInstitucional) {
    setError("gradoInstitucional", {
      message: "Selecciona una opción de grado institucional.",
    });
    return;
  }

  console.log("Datos del formulario:", {
    ...data,
    sexo: selectedOptionSexo,
    estadoCivil: selectedOptionEstadoCivil,
    vive: selectedOptionVive,
    viveCon: selectedOptionViveCon,
    apoderado: selectedOptionApoderado,
    gradoInstitucional: selectedOptionGradoInstitucional,
  });
};
export function FormularioMadre() {
  const form = useForm({
    resolver: zodResolver(FormSchem),
    defaultValues: {
      parentesco: "",

      // Agrega los valores por defecto para los otros campos aquí
    },
  });

  return (
    <div>
      {" "}
      {/* <h3 className="pl-4 pt-3 pb-4 text-gray-500">PADRE :</h3> */}
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
              parametros="dni_m"
              nameLabel="DNI :"
              type="number"
            />
          </div>
        </div>
        <div className="px-2">
          <Formulario form={form} parametros="nombres_m" nameLabel="NOMBRES:" />
        </div>
        <div className="pl-2">
          <Formulario
            form={form}
            parametros="apellido_paterno_m"
            nameLabel="APELLIDO PATERNO :"
          />
        </div>
      </div>
      <h3 className="text-center pt-3 text-gray-500">LUGAR DE NACIMIENTO</h3>
      <div className="grid grid-row-6 px-4">
        <div className="datos-familiar ">
          <div className="pr-2 pt-2">
            <Formulario
              form={form}
              parametros="apellido_materno_m"
              nameLabel="APELLIDO MATERNO :"
            />
          </div>
          <div className="datos-familiar2 pt-4">
            <div className="px-2">
              <h3 className="pb-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                SEXO:
              </h3>
              <SelectSimple options={opcionesSexo} placeholder="Sexo_m" />
            </div>
            <Ubigeo />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-2">
            <div className="pr-2">
              <Calendario
                form={form}
                parametros="fecha_nacimiento_m"
                nameLabel="FECHA NACIMIENTO: "
              />
            </div>
            <div className="px-2">
              <Formulario form={form} parametros="edad_m" nameLabel="EDAD :" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-2">
              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                ESTADO CIVIL :
              </h3>
              <SelectSimple
                options={opcionesEstadoCivil}
                name="estado_civil_m"
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
                name="vive_m"
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
                name="vive_con_m"
              />
            </div>
            <div className="pl-2">
              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                APODERADO:
              </h3>
              <SelectSimple
                options={opcionesBoolean}
                placeholder={"Apoderado"}
                name="apoderado_m"
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
                parametros="celular_m"
                nameLabel="CELULAR:"
              />
            </div>
            <div className="px-2">
              <Formulario
                form={form}
                parametros="telefono_m"
                nameLabel="TELEFONO:"
              />
            </div>
          </div>
          <div className="pl-2">
            <div className="datos-familiar2">
              <Formulario
                form={form}
                parametros="direccion_m"
                nameLabel="DIRECCION:"
              />
              <div className="pt-2">
                <Ubigeo />
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
              name="grado_institucional_m"
            />
          </div>
          <div className="px-2">
            <Formulario
              form={form}
              parametros="centro_trabajo_m"
              nameLabel="CENTRO DE TRABAJO:"
            />
          </div>
          <div className="pl-2">
            <Formulario
              form={form}
              parametros="ocupacion_m"
              nameLabel="OCUPACION:"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="pr-2">
            <Formulario form={form} parametros="correo_m" nameLabel="CORREO:" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FormularioPadre() {
  const form = useForm({
    resolver: zodResolver(FormSchem),
    defaultValues: {
      parentesco: "",

      // Agrega los valores por defecto para los otros campos aquí
    },
  });

  return (
    <div>
      {" "}
      {/* <h3 className="pl-4 pt-3 pb-4 text-gray-500">PADRE :</h3> */}
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
              parametros="dni_p"
              nameLabel="DNI :"
              type="number"
            />
          </div>
        </div>
        <div className="px-2">
          <Formulario form={form} parametros="nombres_p" nameLabel="NOMBRES:" />
        </div>
        <div className="pl-2">
          <Formulario
            form={form}
            parametros="apellido_paterno_p"
            nameLabel="APELLIDO PATERNO :"
          />
        </div>
      </div>
      <h3 className="text-center pt-3 text-gray-500">LUGAR DE NACIMIENTO</h3>
      <div className="grid grid-row-6 px-4">
        <div className="datos-familiar ">
          <div className="pr-2 pt-2">
            <Formulario
              form={form}
              parametros="apellido_materno_p"
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
                placeholder="Sexo"
                name="sexo_p"
              />
            </div>
            <Ubigeo />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-2">
            <div className="pr-2">
              <Calendario
                form={form}
                parametros="fecha_nacimiento_p"
                nameLabel="FECHA NACIMIENTO: "
              />
            </div>
            <div className="px-2">
              <Formulario form={form} parametros="edad" nameLabel="EDAD :" />
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
                name="estado_civil_p"
              />
            </div>
            <div className="px-2">
              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                VIVE :
              </h3>
              <SelectSimple
                options={opcionesBoolean}
                placeholder={"Vive"}
                name="vive_p"
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
                name="vive_con_p"
              />
            </div>
            <div className="pl-2">
              <h3 className="sp pt-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                APODERADO:
              </h3>
              <SelectSimple
                options={opcionesBoolean}
                placeholder={"Apoderado"}
                name="apoderado_p"
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
                parametros="celular_p"
                nameLabel="CELULAR:"
              />
            </div>
            <div className="px-2">
              <Formulario
                form={form}
                parametros="telefono_p"
                nameLabel="TELEFONO:"
              />
            </div>
          </div>
          <div className="pl-2">
            <div className="datos-familiar2">
              <Formulario
                form={form}
                parametros="direccion_p"
                nameLabel="DIRECCION:"
              />
              <div className="pt-2">
                <Ubigeo />
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
              name="grado_institucional_p"
            />
          </div>
          <div className="px-2">
            <Formulario
              form={form}
              parametros="centro_trabajo_p"
              nameLabel="CENTRO DE TRABAJO:"
            />
          </div>
          <div className="pl-2">
            <Formulario
              form={form}
              parametros="ocupacion_p"
              nameLabel="OCUPACION:"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="pr-2">
            <Formulario form={form} parametros="correo_p" nameLabel="CORREO:" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FormularioFamiliarExtra() {
  const form = useForm({
    resolver: zodResolver(FormSchem),
    defaultValues: {
      parentesco: "",

      // Agrega los valores por defecto para los otros campos aquí
    },
  });

  return (
    <div>
      {" "}
      {/* <h3 className="pl-4 pt-3 pb-4 text-gray-500">PADRE :</h3> */}
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
              parametros="dni_fe"
              nameLabel="DNI :"
              type="number"
            />
          </div>
        </div>
        <div className="px-2">
          <Formulario form={form} parametros="nombres" nameLabel="NOMBRES:" />
        </div>
        <div className="pl-2">
          <Formulario
            form={form}
            parametros="apellido_paterno"
            nameLabel="APELLIDO PATERNO :"
          />
        </div>
      </div>
      <h3 className="text-center pt-3 text-gray-500">LUGAR DE NACIMIENTO</h3>
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
              <SelectSimple options={opcionesSexo} placeholder="Sexo" />
            </div>
            <Ubigeo />
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
              <Formulario form={form} parametros="edad" nameLabel="EDAD :" />
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
              <SelectSimple options={opcionesBoolean} placeholder={"Vive"} />
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
              </h3>
              <SelectSimple
                options={opcionesBoolean}
                placeholder={"Apoderado"}
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
                <Ubigeo />
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
              name="grado_institucional_fe"
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
            <Formulario form={form} parametros="correo" nameLabel="CORREO:" />
          </div>
        </div>
      </div>
    </div>
  );
}
