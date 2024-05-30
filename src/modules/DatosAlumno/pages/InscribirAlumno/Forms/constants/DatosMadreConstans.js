import { z } from 'zod';
// const validateAge = (age) => {
//   if (age.startsWith("0")) {
//     throw new Error("La edad no puede empezar con cero.");
//   } 
//   return true;
// };
export const FORM_SCHEMA_DATOS_MADRE = {
    parentesco_2: z.string(1, {message:"Campor requerido"}),
    dni_2: z
      .string()
      .min(8, {message:"El campo debe tener al menos 8 caracteres"})
      .max(8,{ message:"El campo no puede tener más de 8 caracteres"})
      .regex(/^\d+$/, {message:"El campo debe contener solo números"}),
    nombres_2: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{ message:"El campo debe contener solo letras y espacios"}),
    apellido_paterno_2: z
      .string()
      .min(1,{message: "El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    apellido_materno_2: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    sexo_2: z.string().min(1,{ message:"Campo requerido"}),
    departamento_nacimiento_2: z.string().min(1, {message:"Campo requerido"}),
    provincia_nacimiento_2: z.string().min(1,{message: "Campo requerido"}),
    distrito_nacimiento_2: z.string().min(1, {message:"Campo requerido"}),
    fecha_nacimiento_2: z.string(1, {message:"Campor requerido"}),
    estado_civil_2: z.string(1, {message:"Campo requerido"}),
    vive_2: z.string(1, {message:"Campo requerido"}),
    vive_con_2: z.string(1, {message:"Campo requerido"}),
    apoderado_2: z.string(1,{message: "Campo requerido"}),
    celular_2: z.string().min(9,{ message:"Campo requerido"}).max(9, {message:"celular invalido"}),
    telefono_2: z.string().min(9, {message:"Campo requerido"}).max(9, {message:"Telefono invalido"}),
    departamento_domicilio_2: z.string().min(1, {message:"Campo requerido"}),
    provincia_domicilio_2: z.string().min(1, {message:"Campo requerido"}),
    distrito_domicilio_2: z.string().min(1,{message: "Campo requerido"}),
    direccion_2: z.string().min(1,{ message:"El campo es requerido"}),
    grado_instruccion_2: z.string().min(1, {message:"El campo es requerido"}),
    centro_trabajo_2: z.string().min(1,{message:"Campo requerido"}),
    ocupacion_2: z.string().min(1, {message:"Campo requerido"}),
    correo_2: z.string().min(1, {message:"Campo requerido"}),
};

export const DEFAULT_VALUES_DATOS_MADRE = {
    parentesco_2: "",
    dni_2: "",
    nombres_2: "",
    apellido_paterno_2: "",
    apellido_materno_2: "",
    sexo_2: "",
    departamento_nacimiento_2: "",
    provincia_nacimiento_2: "",
    distrito_nacimiento_2: "",
    fecha_nacimiento_2: "",
    estado_civil_2: "",
    vive_2: "",
    vive_con_2: "",
    apoderado_2: "",
    celular_2: "",
    telefono_2: "",
    departamento_domicilio_2: "",
    provincia_domicilio_2: "",
    distrito_domicilio_2: "",
    direccion_2: "",
    grado_instruccion_2: "",
    centro_trabajo_2: "",
    ocupacion_2: "",
    correo_2: "",
};
