import { z } from 'zod'

export const FORM_SCHEMA_CREAR_USUARIO = {
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
  password: z
    .string()
    .min(8, { message: 'El campo debe tener al menos 8 caracteres' }),
  id_tipo_usuario: z.number().min(1, { message: 'El campo es requerido' })
}

export const DEFAULT_VALUES_CREAR_USUARIO = {
  ruta_fotografia:
    'https://ontrust-cm.culturadelalegalidad.net/sites/default/files/participantes/profile_pics/anonimo.jpg',
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
  password: '',
  id_tipo_usuario: ''
}
