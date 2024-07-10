import { z } from "zod";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  return true;
};
export const FORM_SCHEMA_DATOS_MADRE = {
  parentesco_2: z.string(1, "Campor requerido"),
  dni_2: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  nombres_2: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_2: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_2: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  sexo_2: z.string().min(1, "Campo requerido"),
  departamento_nacimiento_2: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_nacimiento_2: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_nacimiento_2: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  fecha_nacimiento_2: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  estado_civil_2: z.string().min(1, { message: "El campo es requerido" }),
  vive_2: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  vive_con_2: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  apoderado_2: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  celular_2: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono_2: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  departamento_domicilio_2: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_domicilio_2: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_domicilio_2: z.string().min(1, { message: "El campo es requerido" }),
  direccion_2: z.string().min(1, { message: "El campo es requerido" }),
  grado_instruccion_2: z.string().min(1, { message: "El campo es requerido" }),
  centro_trabajo_2: z.string().min(1, { message: "El campo es requerido" }),
  ocupacion_2: z.string().min(1, { message: "El campo es requerido" }),
  correo_2: z.string().email().min(1, { message: "El campo es requerido" }),
};

// export const DEFAULT_VALUES_DATOS_MADRE = {
//   parentesco_2: "MADRE",
//   dni_2: "",
//   nombres_2: "",
//   apellido_paterno_2: "",
//   apellido_materno_2: "",
//   sexo_2: "",
//   departamento_nacimiento_2: "",
//   provincia_nacimiento_2: "",
//   distrito_nacimiento_2: "",
//   fecha_nacimiento_2: "",
//   estado_civil_2: "",
//   vive_2: "",
//   vive_con_2: "",
//   apoderado_2: "",
//   celular_2: "",
//   telefono_2: "",
//   departamento_domicilio_2: "",
//   provincia_domicilio_2: "",
//   distrito_domicilio_2: "",
//   direccion_2: "",
//   grado_instruccion_2: "",
//   centro_trabajo_2: "",
//   ocupacion_2: "",
//   correo_2: "",
//   estado: "true",
// };


export const DEFAULT_VALUES_DATOS_MADRE = {
  parentesco_2: "MADRE",
  dni_2: "87654321",
  nombres_2: "Ana Maria",
  apellido_paterno_2: "Gomez",
  apellido_materno_2: "Lopez",
  sexo_2: "Femenino", 
  departamento_nacimiento_2: "San Martin",
  provincia_nacimiento_2: "San Martin",
  distrito_nacimiento_2: "Tarapoto",
  fecha_nacimiento_2: "1978-05-14",
  estado_civil_2: "Casado", 
  vive_2: true,
  vive_con_2: true,
  apoderado_2: false,
  celular_2: "987654321",
  telefono_2: "012345678",
  departamento_domicilio_2: "San Martin",
  provincia_domicilio_2: "San Martin",
  distrito_domicilio_2: "Tarapoto",
  direccion_2: "Calle Falsa 123",
  grado_instruccion_2: "superior completa",  // Opciones: "secundaria completa", "primaria completa", "superior completa"
  centro_trabajo_2: "Empresa XYZ",
  ocupacion_2: "Ingeniera",
  correo_2: "ana.maria@example.com",
  estado: "true",
};
