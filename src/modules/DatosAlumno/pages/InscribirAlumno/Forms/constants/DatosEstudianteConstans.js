import { z } from "zod";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  if (parseInt(age) <= 11) {
    throw new Error("La edad debe ser mayor de 11 años.");
  }
  return true;
};
export const FORM_SCHEMA_DATOS_ESTUDIANTE = {
  dni: z
    .string()
    .min(8, { message: "El campo debe tener al menos 8 caracteres" })
    .max(8, { message: "El campo no puede tener más de 8 caracteres" })
    .regex(/^\d+$/, { message: "El campo debe contener solo números" }),
  codigo: z
    .string()
    .min(8, { message: "El campo debe tener al menos 8 caracteres" })
    .max(8, { message: "El campo no puede tener más de 8 caracteres" })
    .regex(/^\d+$/, { message: "El campo debe contener solo números" }),
  nombres: z
    .string()
    .min(1, { message: "El campo es requerido" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "El campo debe contener solo letras y espacios",
    }),
  apellido_paterno: z
    .string()
    .min(1, { message: "El campo es requerido" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "El campo debe contener solo letras y espacios",
    }),
  apellido_materno: z
    .string()
    .min(1, { message: "El campo es requerido" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "El campo debe contener solo letras y espacios",
    }),
  sexo: z.string().min(1, { message: "El campo es requerido" }),
  departamento_nacimiento: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_nacimiento: z.string().min(1, { message: "El campo es requerido" }),
  distrito_nacimiento: z.string().min(1, { message: "El campo es requerido" }),
  fecha_nacimiento: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  lengua_materna: z.string().min(1, { message: "El campo es requerido" }),
  religion: z.string().min(1, { message: "El campo es requerido" }),
  parto: z.string().min(1, { message: "El campo es requerido" }),
  numero_hermanos: z.number().min(1, {
    message: "Este campo es requerido",
  }),
  departamento_domicilio: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_domicilio: z.string().min(1, { message: "El campo es requerido" }),
  distrito_domicilio: z.string().min(1, { message: "El campo es requerido" }),
  direccion: z.string().min(1, { message: "El campo es requerido" }),
  situacion: z.string().min(1, { message: "Campo requerido" }),
  cod_ie_procedencia: z.string().min(2, { message: "Campo requerido" }),
  nivel: z.string().min(1, { message: "Campo requerido" }),
  turno: z.string().min(1, { message: "Campo requerido" }),
  seccion: z.string().min(1, { message: "Campo requerido" }),
  grado: z.string().min(1, { message: "Campo requerido" }),
  id_beneficio: z.number().min(1, { message: "Campo requerido" }),
};

export const DEFAULT_VALUES_DATOS_ESTUDIANTE = {
  dni: "",
  codigo: "",
  nombres: "",
  apellido_paterno: "",
  apellido_materno: "",
  sexo: "",
  departamento_nacimiento: "",
  provincia_nacimiento: "",
  distrito_nacimiento: "",
  fecha_nacimiento: "",
  lengua_materna: "",
  religion: "",
  parto: "",
  numero_hermanos: "",
  departamento_domicilio: "",
  provincia_domicilio: "",
  distrito_domicilio: "",
  direccion: "",
  situacion: "",
  cod_ie_procedencia: "",
  nivel: "",
  turno: "",
  seccion: "",
  grado: "",
  id_beneficio: "",
};
