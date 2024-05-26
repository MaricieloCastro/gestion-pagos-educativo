import { z } from 'zod';

export const FORM_SCHEMA_USER_DATA = {
  username: z.string().min(8, {
    message: 'Este campo debe tener 8 digitos como mínimo',
  }),
  password: z.string().min(8, {
    message: 'Este campo debe tener 8 digitos como mínimo',
  }),
  tipo_usuario_id: z.string().min(1, {
    message: 'Este campo es requerido',
  }),
};

export const DEFAULT_VALUES_USER_DATA = {
  username: '',
  password: '',
  tipo_usuario_id: '',
};
