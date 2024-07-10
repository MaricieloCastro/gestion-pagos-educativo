import { z } from "zod";
const validateAge = (age) => {
  if (age.startsWith("0")) {
    throw new Error("La edad no puede empezar con cero.");
  }
  return true;
};
export const FORM_SCHEMA_DATOS_FAMILIAR_EXTRA = {
  parentesco_3: z.string(1, "Campor requerido"),
  dni_3: z
    .string()
    .min(8, "El campo debe tener al menos 8 caracteres")
    .max(8, "El campo no puede tener más de 8 caracteres")
    .regex(/^\d+$/, "El campo debe contener solo números"),
  nombres_3: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_paterno_3: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  apellido_materno_3: z
    .string()
    .min(1, "El campo es requerido")
    .regex(/^[A-Za-z\s]+$/, "El campo debe contener solo letras y espacios"),
  sexo_3: z.string().min(1, "Campo requerido"),
  departamento_nacimiento_3: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_nacimiento_3: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_nacimiento_3: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  fecha_nacimiento_3: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  estado_civil_3: z.string().min(1, { message: "El campo es requerido" }),
  vive_3: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  vive_con_3: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  apoderado_3: z.boolean().refine((val) => val !== null, {
    message: "El campo es requerido",
  }),
  celular_3: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  telefono_3: z.string().min(9, "Campo requerido").max(9, "celular invalido"),
  departamento_domicilio_3: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  provincia_domicilio_3: z
    .string()
    .min(1, { message: "El campo es requerido" }),
  distrito_domicilio_3: z.string().min(1, { message: "El campo es requerido" }),
  direccion_3: z.string().min(1, { message: "El campo es requerido" }),
  grado_instruccion_3: z.string().min(1, { message: "El campo es requerido" }),
  centro_trabajo_3: z.string().min(1, { message: "El campo es requerido" }),
  ocupacion_3: z.string().min(1, { message: "El campo es requerido" }),
  correo_3: z.string().email().min(1, { message: "El campo es requerido" }),
};

// export const DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA = {
//   parentesco_3: "",
//   dni_3: "",
//   nombres_3: "",
//   apellido_paterno_3: "",
//   apellido_materno_3: "",
//   sexo_3: "",
//   departamento_nacimiento_3: "",
//   provincia_nacimiento_3: "",
//   distrito_nacimiento_3: "",
//   fecha_nacimiento_3: "",
//   estado_civil_3: "",
//   vive_3: "",
//   vive_con_3: "",
//   apoderado_3: "",
//   celular_3: "",
//   telefono_3: "",
//   departamento_domicilio_3: "",
//   provincia_domicilio_3: "",
//   distrito_domicilio_3: "",
//   direccion_3: "",
//   grado_instruccion_3: "",
//   centro_trabajo_3: "",
//   ocupacion_3: "",
//   correo_3: "",
//   estado: "true",
// };


export const DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA = {
  parentesco_3: "Familiar Extra",
  dni_3: "87654321",
  nombres_3: "Juan Carlos",
  apellido_paterno_3: "Perez",
  apellido_materno_3: "Garcia",
  sexo_3: "M",
  departamento_nacimiento_3: "San Martin",
  provincia_nacimiento_3: "San Martin",
  distrito_nacimiento_3: "Tarapoto",
  fecha_nacimiento_3: "1980-03-25",
  estado_civil_3: "S",
  vive_3: true,
  vive_con_3: false,
  apoderado_3: false,
  celular_3: "987654321",
  telefono_3: "012345678",
  departamento_domicilio_3: "San Martin",
  provincia_domicilio_3: "San Martin",
  distrito_domicilio_3: "Tarapoto",
  direccion_3: "Av. Principal 456",
  grado_instruccion_3: "secundaria completa",
  centro_trabajo_3: "Empresa ABC",
  ocupacion_3: "Contador",
  correo_3: "juan.perez@example.com",
  estado: "true",
};