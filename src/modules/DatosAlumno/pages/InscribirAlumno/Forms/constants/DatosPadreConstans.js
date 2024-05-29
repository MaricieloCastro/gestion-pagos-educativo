import { z } from 'zod';
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  } 
  return true;
};
export const FORM_SCHEMA_DATOS_PADRE = {
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
    departamento_nacimiento: z.string().min(1, "Campo requerido"),
    provincia_nacimiento: z.string().min(1, "Campo requerido"),
    distrito_nacimiento: z.string().min(1, "Campo requerido"),
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
    departamento_domicilio: z.string().min(1, "Campo requerido"),
    provincia_domicilio: z.string().min(1, "Campo requerido"),
    distrito_domicilio: z.string().min(1, "Campo requerido"),
    direccion: z.string().min(1, "El campo es requerido"),
    grado_institucional: z.string().min(1, "El campo es requerido"),
    centro_trabajo: z.string().min(1, "Campo requerido"),
    ocupacion: z.string().min(1, "Campo requerido"),
    correo: z.string().min(1, "Campo requerido"),
};

export const DEFAULT_VALUES_DATOS_PADRE = {
    parentesco: "",
    dni: "",
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    sexo: "",
    //lugar de ancimiento
    departamento_nacimiento: "",
    provincia_nacimiento: "",
    distrito_nacimiento: "",
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
    departamento_domicilio: "",
    provincia_domicilio: "",
    distrito_domicilio: "",
    //
    direccion: "",
    grado_institucional: "",
    centro_trabajo: "",
    ocupacion: "",
    correo: "",
};
