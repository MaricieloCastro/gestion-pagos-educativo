import { z } from 'zod'

export const FORM_SCHEMA_INFORMACION_USUARIO = {
  nombres: z
    .string()
    .min(1, { message: 'El campo es requerido' })
    .regex(/^[A-Za-z\s]+$/, {
      message: 'El campo debe contener solo letras y espacios'
    }),
  apellido_paterno: z
    .string()
    .min(1, { message: 'El campo es requerido' })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: 'El campo debe contener solo letras y espacios.'
    }),

  apellido_materno: z
    .string()
    .min(1, { message: 'El campo es requerido' })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: 'El campo debe contener solo letras y espacios.'
    }),
  dni: z
    .string()
    .min(8, { message: 'El campo debe tener al menos 8 caracteres' })
    .max(8, { message: 'El campo no puede tener más de 8 caracteres' })
    .regex(/^\d+$/, { message: 'El campo debe contener solo números' }),
  celular: z
    .string()
    .min(9, { message: 'El campo debe tener al menos 9 caracteres' })
    .max(9, { message: 'El campo no puede tener más de 9 caracteres' })
    .regex(/^\d+$/, { message: 'El campo debe contener solo números' }),
  domicilio: z.string().min(1, { message: 'El campo es requerido' }),
  sexo: z.string().min(1, { message: 'El campo es requerido' }),
  fecha_nacimiento: z.string().min(1, {
    message: 'Este campo es requerido'
  }),
  email: z.string().min(1, { message: 'El campo es requerido' }),
  username: z.string().min(1, { message: 'El campo es requerido' }),
  id_tipo_usuario: z.number().min(1, { message: 'El campo es requerido' })
}

export const DEFAULT_VALUES_INFORMACION_USUARIO = {
  nombres: '',
  apellido_paterno: '',
  apellido_materno: '',
  dni: '',
  celular: '',
  domicilio: '',
  sexo: '',
  fecha_nacimiento: '',
  email: '',
  username: '',
  id_tipo_usuario: ''
}
