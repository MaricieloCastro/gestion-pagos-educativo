export const dataInfo = [
  {
    label: 'Nombres:',
    name: 'nombres',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Apellido paterno:',
    name: 'apellido_paterno',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Apellido materno:',
    name: 'apellido_materno',
    type: 'text',
    disabled: false,
    placeholder: ''
  },
  {
    label: 'DNI:',
    name: 'dni',
    type: 'text',
    disabled: false,
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
    type: 'select',
    disabled: false,
    placeholder: '',
    options: [
      {
        label: 'MASCULINO',
        value: 'M'
      },
      {
        label: 'FEMENINO',
        value: 'F'
      }
    ]
  },
  {
    label: 'F. de nacimiento:',
    name: 'fecha_nacimiento',
    type: 'dateWithYears',
    disabled: false,
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
    disabled: false,
    placeholder: ''
  },
  {
    label: 'Tipo de usuario:',
    name: 'id_tipo_usuario',
    type: 'select',
    disabled: false,
    placeholder: '',
    options: [
      {
        label: 'DIRECTOR',
        value: 1
      },
      {
        label: 'SECRETARIA',
        value: 2
      }
    ]
  }
]
