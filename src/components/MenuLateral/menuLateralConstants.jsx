import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faClockRotateLeft,
  faCrosshairs,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faFile, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

export const menuLateralConstants = (id_tipo_usuario, num_solicitud) => {

  const ITEMS = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'PERFIL',
    },
    {
      key: '2',
      icon: <FontAwesomeIcon icon={faCrosshairs} />,
      label: 'MENÚ PRINCIPAL',
      children: [
        {
          key: '21',
          label: 'LISTA DE ALUMNOS',
        },
        {
          key: '22',
          label: 'ALUMNO',
          children: [
            {
              key: '221',
              label: 'EDITAR',
            },
            {
              key: '222',
              label: 'PAGAR INSCRIPCIÓN',
            }
          ]
        },
        {
          key: '23',
          label: 'PAGOS',
        },
      ],
    },
    {
      key: '3',
      icon: <PlusOutlined />,
      label: 'INSCRIBIR ALUMNO',
    },
    {
      key: '4',
      icon: <FontAwesomeIcon icon={faFile} />,
      label: 'REPORTES',
      children: [
        {
          key: '41',
          label: 'INGRESOS',
        },
        {
          key: '42',
          label: 'DEUDAS',
        },
        {
          key: '43',
          label: 'ALUMNOS ESPECIALES',
        },
        {
          key: '44',
          label: 'PAGOS ANTICIPADOS',
        },
        {
          key: '45',
          label: 'MÉTODO PAGO',
        },
      ],
    },
    {
      key: '5',
      icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
      label: 'HISTORIAL DE PAGOS',
    },
    {
      key: '6',
      icon: <FontAwesomeIcon icon={faTrashCan} />,
      label: 'PAPELERA DE ESTUDIANTES',
    },
    {
      key: '8',
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      label: 'CERRAR SESIÓN',
      danger: true,
    },
  ];

  const newITEMS = [...ITEMS]

  if (id_tipo_usuario === 1) {
    const panelAdministrador = {
      key: '7',
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      label: 'PANEL DE ADMINISTRADOR',
      children: [
        {
          key: '71',
          label: 'PANEL',
        },
        {
          key: '72',
          label: 'HISTORIAL REPORTES',
        },
        {
          key: '73',
          label: `${num_solicitud == 0 ? ("SOLICITUD DE ELIMINACION") : ("SOLICITUD DE ELIMINACION 🔴")}`,
        },
        {
          key: '74',
          label: 'USUARIOS',
          children: [
            {
              key: '741',
              label: 'LISTA DE USUARIOS',
            },
            {
              key: '742',
              label: 'CREAR USUARIO',
            },
            {
              key: '743',
              label: 'EDITAR USUARIO',
              disabled: true,
            },
          ]
        },
      ],
    }

    newITEMS.splice(6, 0, panelAdministrador)
  }

  return newITEMS;
}
