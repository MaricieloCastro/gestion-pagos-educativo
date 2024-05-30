import { z } from 'zod';
// const validateAge = (age) => {
//   if (age.startsWith("0")) {
//     throw new Error("La edad no puede empezar con cero.");
//   } 
//   return true;
// };
export const FORM_SCHEMA_DATOS_FAMILIAREXTRA = {
    parentesco_3: z.string(1, {message:"Campor requerido"}),
    dni_3: z
      .string()
      .min(8, {message:"El campo debe tener al menos 8 caracteres"})
      .max(8,{ message:"El campo no puede tener más de 8 caracteres"})
      .regex(/^\d+$/, {message:"El campo debe contener solo números"}),
    nombres_3: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{ message:"El campo debe contener solo letras y espacios"}),
    apellido_paterno_3: z
      .string()
      .min(1,{message: "El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    apellido_materno_3: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    sexo_3: z.string().min(1,{ message:"Campo requerido"}),
    departamento_nacimiento_3: z.string().min(1, {message:"Campo requerido"}),
    provincia_nacimiento_3: z.string().min(1,{message: "Campo requerido"}),
    distrito_nacimiento_3: z.string().min(1, {message:"Campo requerido"}),
    fecha_nacimiento_3: z.string(1, {message:"Campor requerido"}),
    estado_civil_3: z.string(1, {message:"Campo requerido"}),
    vive_3: z.string(1, {message:"Campo requerido"}),
    vive_con_3: z.string(1, {message:"Campo requerido"}),
    apoderado_3: z.string(1,{message: "Campo requerido"}),
    celular_3: z.string().min(9,{ message:"Campo requerido"}).max(9, {message:"celular invalido"}),
    telefono_3: z.string().min(9, {message:"Campo requerido"}).max(9, {message:"Telefono invalido"}),
    departamento_domicilio_3: z.string().min(1, {message:"Campo requerido"}),
    provincia_domicilio_3: z.string().min(1, {message:"Campo requerido"}),
    distrito_domicilio_3: z.string().min(1,{message: "Campo requerido"}),
    direccion_3: z.string().min(1,{ message:"El campo es requerido"}),
    grado_instruccion_3: z.string().min(1, {message:"El campo es requerido"}),
    centro_trabajo_3: z.string().min(1,{message:"Campo requerido"}),
    ocupacion_3: z.string().min(1, {message:"Campo requerido"}),
    correo_3: z.string().min(1, {message:"Campo requerido"}),
};

export const DEFAULT_VALUES_DATOS_FAMILIAREXTRA = {
    parentesco_3: "",
    dni_3: "",
    nombres_3: "",
    apellido_paterno_3: "",
    apellido_materno_3: "",
    sexo_3: "",
    departamento_nacimiento_3: "",
    provincia_nacimiento_3: "",
    distrito_nacimiento_3: "",
    fecha_nacimiento_3: "",
    estado_civil_3: "",
    vive_3: "",
    vive_con_3: "",
    apoderado_3: "",
    celular_3: "",
    telefono_3: "",
    departamento_domicilio_3: "",
    provincia_domicilio_3: "",
    distrito_domicilio_3: "",
    direccion_3: "",
    grado_instruccion_3: "",
    centro_trabajo_3: "",
    ocupacion_3: "",
    correo_3: "",
};
