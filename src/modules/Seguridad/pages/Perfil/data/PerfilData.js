import { tipoUsuariosAPI } from '@/api/ApiRutas'

export const data = [
  {
    label: 'Nombres:',
    name: 'nombres',
    type: 'text',
    disabled: true,
    placeholder: ''
  },
  {
    label: 'Apellido paterno:',
    name: 'apellido_paterno',
    type: 'text',
    disabled: true,
    placeholder: ''
  },
  {
    label: 'Apellido materno:',
    name: 'apellido_materno',
    type: 'text',
    disabled: true,
    placeholder: ''
  },
  {
    label: 'DNI:',
    name: 'dni',
    type: 'text',
    disabled: true,
    placeholder: ''
  },
  {
    label: 'Telefono:',
    name: 'celular',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Dirección:',
    name: 'domicilio',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Sexo:',
    name: 'sexo',
    type: 'select-async',
    disabled: false,
    placeholder: '',
    tabla: 'SEXO'
  },
  {
    label: 'F. de nacimiento:',
    name: 'fecha_nacimiento',
    type: 'dateWithYears',
    disabled: true,
    placeholder: '',
    yearSpecial: true
  },
  {
    label: 'Correo:',
    name: 'email',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Usuario:',
    name: 'username',
    type: 'text',
    disabled: true,
    placeholder: ''
  },
  {
    label: 'Tipo de usuario:',
    name: 'id_tipo_usuario',
    type: 'select-async',
    disabled: true,
    placeholder: '',
    urlAPI: tipoUsuariosAPI
  }
]
