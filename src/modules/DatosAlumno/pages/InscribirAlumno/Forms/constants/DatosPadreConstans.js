import { z } from 'zod';
export const FORM_SCHEMA_DATOS_PADRE = {
    parentesco_1: z.string(1, {message:"Campor requerido"}),
    dni_1: z
      .string()
      .min(8, {message:"El campo debe tener al menos 8 caracteres"})
      .max(8,{ message:"El campo no puede tener más de 8 caracteres"})
      .regex(/^\d+$/, {message:"El campo debe contener solo números"}),
    nombres_1: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{ message:"El campo debe contener solo letras y espacios"}),
    apellido_paterno_1: z
      .string()
      .min(1,{message: "El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    apellido_materno_1: z
      .string()
      .min(1, {message:"El campo es requerido"})
      .regex(/^[A-Za-z\s]+$/,{message: "El campo debe contener solo letras y espacios"}),
    sexo_1: z.string().min(1,{ message:"Campo requerido"}),
    departamento_nacimiento_1: z.string().min(1, {message:"Campo requerido"}),
    provincia_nacimiento_1: z.string().min(1,{message: "Campo requerido"}),
    distrito_nacimiento_1: z.string().min(1, {message:"Campo requerido"}),
    fecha_nacimiento_1: z.string(1, {message:"Campor requerido"}),
    estado_civil_1: z.string(1, {message:"Campo requerido"}),
    vive_1: z.string(1, {message:"Campo requerido"}),
    vive_con_1: z.string(1, {message:"Campo requerido"}),
    apoderado_1: z.string(1,{message: "Campo requerido"}),
    celular_1: z.string().min(9,{ message:"Campo requerido"}).max(9, {message:"celular invalido"}),
    telefono_1: z.string().min(9, {message:"Campo requerido"}).max(9, {message:"Telefono invalido"}),
    departamento_domicilio_1: z.string().min(1, {message:"Campo requerido"}),
    provincia_domicilio_1: z.string().min(1, {message:"Campo requerido"}),
    distrito_domicilio_1: z.string().min(1,{message: "Campo requerido"}),
    direccion_1: z.string().min(1,{ message:"El campo es requerido"}),
    grado_instruccion_1: z.string().min(1, {message:"El campo es requerido"}),
    centro_trabajo_1: z.string().min(1,{message:"Campo requerido"}),
    ocupacion_1: z.string().min(1, {message:"Campo requerido"}),
    correo_1: z.string().min(1, {message:"Campo requerido"}),
};

export const DEFAULT_VALUES_DATOS_PADRE = {
    parentesco_1: "",
    dni_1: "",
    nombres_1: "",
    apellido_paterno_1: "",
    apellido_materno_1: "",
    sexo_1: "",
    departamento_nacimiento_1: "",
    provincia_nacimiento_1: "",
    distrito_nacimiento_1: "",
    fecha_nacimiento_1: "",
    estado_civil_1: "",
    vive_1: "",
    vive_con_1: "",
    apoderado_1: "",
    celular_1: "",
    telefono_1: "",
    departamento_domicilio_1: "",
    provincia_domicilio_1: "",
    distrito_domicilio_1: "",
    direccion_1: "",
    grado_instruccion_1: "",
    centro_trabajo_1: "",
    ocupacion_1: "",
    correo_1: "",
};
