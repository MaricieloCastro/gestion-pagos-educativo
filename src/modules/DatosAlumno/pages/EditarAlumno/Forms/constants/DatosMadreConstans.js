import { z } from "zod";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  return true;
};
export const FORM_SCHEMA_DATOS_MADRE = {
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
  departamento_nacimiento: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_nacimiento: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_nacimiento: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  fecha_nacimiento: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  estado_civil: z.string().min(1, { message: "El campo es requerido" }),
  vive: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  vive_con: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  apoderado: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  celular: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  departamento_domicilio: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_domicilio: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_domicilio: z.string().min(1, { message: "El campo es requerido" }),
  direccion: z.string().min(1, { message: "El campo es requerido" }),
  grado_instruccion: z.string().min(1, { message: "El campo es requerido" }),
  centro_trabajo: z.string().min(1, { message: "El campo es requerido" }),
  ocupacion: z.string().min(1, { message: "El campo es requerido" }),
  correo: z.string().email().min(1, { message: "El campo es requerido" }),
};

export const DEFAULT_VALUES_DATOS_MADRE = {
  parentesco: "MADRE",
  dni: "",
  nombres: "",
  apellido_paterno: "",
  apellido_materno: "",
  sexo: "",
  departamento_nacimiento: "",
  provincia_nacimiento: "",
  distrito_nacimiento: "",
  fecha_nacimiento: "",
  estado_civil: "",
  vive: "",
  vive_con: "",
  apoderado: "",
  celular: "",
  telefono: "",
  departamento_domicilio: "",
  provincia_domicilio: "",
  distrito_domicilio: "",
  direccion: "",
  grado_instruccion: "",
  centro_trabajo: "",
  ocupacion: "",
  correo: "",
  estado: "true",
};

