import { z } from 'zod';

export const FORM_SCHEMA_DATOS_PERSONALES = {
  dni: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .regex(/^\d+$/, {
      message: 'Solo se permiten datos numéricos',
    })
    .max(8, {
      message: 'El maximo es de 8 digitos',
    }),
  nombre: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: 'El nombre solo puede contener letras',
    }),
  apellido_paterno: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: 'El apellido paterno solo puede contener letras',
    }),
  apellido_materno: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: 'El apellido materno solo puede contener letras',
    }),
  fecha_nacimiento: z.string().min(1, {
    message: 'Este campo es requerido',
  }),
  correo: z
    .string()
    .min(1, {
      message: 'Este campo es requerido',
    })
    .email({
      message: 'Correo electrónico invalido.',
    }),
  celular: z
    .string()
    .regex(/^\d+$/, {
      message: 'Solo se permiten datos numéricos',
    })
    .min(1, {
      message: 'Este campo es requerido',
    }),
};

export const DEFAULT_VALUES_DATOS_PERSONALES = {
  dni: '',
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  fecha_nacimiento: '',
  correo: '',
  celular: '',
};
