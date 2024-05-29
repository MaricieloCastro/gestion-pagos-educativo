import { z } from "zod";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  return true;
};
export const FORM_SCHEMA_DATOS_PADRE = {
  parentesco_1: z.string(1, "Campor requerido"),
  dni_1: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  nombres_1: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_1: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_1: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  sexo_1: z.string().min(1, "Campo requerido"),
  // //lugar nacimiento
  // departamento_ln: z.string().min(1, "Campo requerido"),
  // provincia_ln: z.string().min(1, "Campo requerido"),
  // distrito_ln: z.string().min(1, "Campo requerido"),
  // //
  // fecha_nacimiento: z.string(1, "Campor requerido"),
  // edad: z
  //   .string()
  //   .min(2, "Edad requerida")
  //   .max(2, "Edad inválida")
  //   .refine(validateAge, { message: "Edad inválida" }),
  // estado_civil: z.string(1, "Campo requerido"),
  // vive: z.string(1, "Campo requerido"),
  // vive_con: z.string(1, "Campo requerido"),
  // apoderado: z.string(1, "Campo requerido"),
  // celular: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  // telefono: z.string().min(9, "Campo requerido").max(9, "Telefono invalido"),
  // departamento_d: z.string().min(1, "Campo requerido"),
  // provincia_d: z.string().min(1, "Campo requerido"),
  // distrito_d: z.string().min(1, "Campo requerido"),
  // direccion: z.string().min(1, "El campo es requerido"),
  // grado_institucional: z.string().min(1, "El campo es requerido"),
  // centro_trabajo: z.string().min(1, "Campo requerido"),
  // ocupacion: z.string().min(1, "Campo requerido"),
  // correo: z.string().min(1, "Campo requerido"),
};

export const DEFAULT_VALUES_DATOS_PADRE = {
  parentesco_1: "",
  dni_1: "",
  nombres_1: "",
  apellido_paterno_1: "",
  apellido_materno_1: "",
  sexo_1: "",
  // //lugar de ancimiento
  // departamento_ln: "",
  // provincia_ln: "",
  // distrito_ln: "",
  // //
  // fecha_nacimiento: "",
  // edad: "",
  // estado_civil: "",
  // vive: "",
  // vive_con: "",
  // apoderado: "",
  // celular: "",
  // telefono: "",
  // //domicilio
  // departamento_d: "",
  // provincia_d: "",
  // distrito_d: "",
  // //
  // direccion: "",
  // grado_institucional: "",
  // centro_trabajo: "",
  // ocupacion: "",
  // correo: "",
};
