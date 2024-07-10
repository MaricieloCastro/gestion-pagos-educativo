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
  departamento_nacimiento_1: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_nacimiento_1: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_nacimiento_1: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  fecha_nacimiento_1: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  estado_civil_1: z.string().min(1, { message: "El campo es requerido" }),
  vive_1: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  vive_con_1: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  apoderado_1: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  celular_1: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono_1: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  departamento_domicilio_1: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_domicilio_1: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_domicilio_1: z.string().min(1, { message: "El campo es requerido" }),
  direccion_1: z.string().min(1, { message: "El campo es requerido" }),
  grado_instruccion_1: z.string().min(1, { message: "El campo es requerido" }),
  centro_trabajo_1: z.string().min(1, { message: "El campo es requerido" }),
  ocupacion_1: z.string().min(1, { message: "El campo es requerido" }),
  correo_1: z.string().email().min(1, { message: "El campo es requerido" }),
};

// export const DEFAULT_VALUES_DATOS_PADRE = {
//   parentesco_1: "PADRE",
//   dni_1: "",
//   nombres_1: "",
//   apellido_paterno_1: "",
//   apellido_materno_1: "",
//   sexo_1: "",
//   departamento_nacimiento_1: "",
//   provincia_nacimiento_1: "",
//   distrito_nacimiento_1: "",
//   fecha_nacimiento_1: "",
//   estado_civil_1: "",
//   vive_1: "",
//   vive_con_1: "",
//   apoderado_1: "",
//   celular_1: "",
//   telefono_1: "",
//   departamento_domicilio_1: "",
//   provincia_domicilio_1: "",
//   distrito_domicilio_1: "",
//   direccion_1: "",
//   grado_instruccion_1: "",
//   centro_trabajo_1: "",
//   ocupacion_1: "",
//   correo_1: "",
//   estado: "true",
// };


export const DEFAULT_VALUES_DATOS_PADRE = {
  parentesco_1: "PADRE",
  dni_1: "12345678",
  nombres_1: "Juan Carlos",
  apellido_paterno_1: "Gonzalez",
  apellido_materno_1: "Lopez",
  sexo_1: "Masculino",  
  departamento_nacimiento_1: "San Martin",
  provincia_nacimiento_1: "San Martin",
  distrito_nacimiento_1: "Tarapoto",
  fecha_nacimiento_1: "1970-05-15",
  estado_civil_1: "Casado", 
  vive_1: true,
  vive_con_1: true,
  apoderado_1: false,
  celular_1: "987654321",
  telefono_1: "012345678",
  departamento_domicilio_1: "San Martin",
  provincia_domicilio_1: "San Martin",
  distrito_domicilio_1: "Tarapoto",
  direccion_1: "Av. El Sol 123",
  grado_instruccion_1: "SECUNDARIA COMPLETA",  
  centro_trabajo_1: "Ministerio de Educación",
  ocupacion_1: "Ingeniero",
  correo_1: "juancarlos.gonzalez@example.com",
  estado: "true",
};

