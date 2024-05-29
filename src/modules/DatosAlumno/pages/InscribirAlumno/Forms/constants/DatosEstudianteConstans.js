import { z } from 'zod';
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
    .min(8, {message : "El campo debe tener al menos 8 caracteres"})
    .max(8, {message :"El campo no puede tener más de 8 caracteres"})
    .regex(/^\d+$/, {message :"El campo debe contener solo números"}),
  codigo: z.string().min(1,{ message :"El campo es requerido"}),
  nombres: z
    .string()
    .min(1, {message :"El campo es requerido"})
    .regex(/^[A-Za-z\s]+$/, {message :"El campo debe contener solo letras y espacios"}),
  apellido_paterno: z
    .string()
    .min(1,{message :"El campo es requerido"})
    .regex(/^[A-Za-z\s]+$/, {message :"El campo debe contener solo letras y espacios"}),
  apellido_materno: z
    .string()
    .min(1, {message :"El campo es requerido"})
    .regex(/^[A-Za-z\s]+$/, {message :"El campo debe contener solo letras y espacios"}),
  sexo: z.string().min(1, {message :"El campo es requerido"}),
  //
  departamento: z.string().min(1, {message :"Campo requerido"}),
  provincia: z.string().min(1,{message : "Campo requerido"}),
  distrito: z.string().min(1, {message :"Campo requerido"}),
  //
  fecha_nacimiento: z.string().min(1, {message :"Campo requerido"}),
  edad: z
    .string()
    .min(2, {message :"Edad requerida"})
    .max(2,{ message :"Edad inválida"})
    .refine(validateAge, { message:"Edad inválida" }),
  lengua_materna: z.string().min(1, {message :"Campo requerido"}),
  religion: z.string().min(1, {message :"Campo requerido"}),
  parto: z.string().min(1, {message :"Campo requerido"}),
  numero_hermanos: z.string().min(1, {message :"Campo requerido"}),
  departamento_domicilio: z.string().min(1, {message :"Campo requerido"}),
  provincia_domicilio: z.string().min(1, {message :"Campo requerido"}),
  distrito_domicilio: z.string().min(1, {message :"Campo requerido"}),
  direccion: z.string().min(1, {message :"El campo es requerido"}),
  condicion: z.string().min(1, {message :"Campo requerido"}),
  situacion: z.string().min(1,{ message :"Campo requerido"}),
  cod_IE_procedencia: z.string().min(2, {message :"Campo requerido"}),
  nivel: z.string().min(1, {message :"Campo requerido"}),
  turno: z.string().min(1, {message :"Campo requerido"}),
  seccion: z.string().min(1, {message :"Campo requerido"}),
  grado: z.string().min(1, {message :"Campo requerido"}),
  beneficio: z.string().min(1, {message :"Campo requerido"}),
};

export const DEFAULT_VALUES_DATOS_ESTUDIANTE = {
    dni: "",
    codigo: "",
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    sexo: "",
    departamento: "",
    provincia: "",
    distrito: "",
    fecha_nacimiento: "",
    edad: "",
    lengua_materna: "",
    religion: "",
    parto: "",
    numero_hermanos: "",
    departamento_domicilio: "",
    provincia_domicilio: "",
    distrito_domicilio: "",
    direccion: "",
    condicion: "",
    situacion: "",
    cod_IE_procedencia: "",
    nivel: "",
    turno: "",
    seccion: "",
    grado: "",
    beneficio: "",
};
