import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';

export const ITEMS = [
  {
    key: '1',
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
    label: 'Seguridad',
    children: [
      {
        key: '11',
        label: 'Usuarios',
      },
      {
        key: '12',
        label: 'Crear usuario',
      },
      {
        key: '13',
        label: 'Option 3',
      },
      {
        key: '14',
        label: 'Option 4',
      },
    ],
  },
  {
    key: '2',
    icon: <SettingOutlined />,
    label: 'Mantenimiento',
    children: [
      {
        key: '21',
        label: 'Option 1',
      },
      {
        key: '22',
        label: 'Option 2',
      },
      {
        key: '23',
        label: 'Submenu',
        children: [
          {
            key: '231',
            label: 'Option 1',
          },
          {
            key: '232',
            label: 'Option 2',
          },
          {
            key: '233',
            label: 'Option 3',
          },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          {
            key: '241',
            label: 'Option 1',
          },
          {
            key: '242',
            label: 'Option 2',
          },
          {
            key: '243',
            label: 'Option 3',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <HomeOutlined />,
    label: 'Arrendamiento',
    children: [
      {
        key: '31',
        label: 'Option 1',
      },
      {
        key: '32',
        label: 'Option 2',
      },
      {
        key: '33',
        label: 'Option 3',
      },
      {
        key: '34',
        label: 'Option 4',
      },
    ],
  },
  {
    key: '4',
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    label: 'Pagos',
    children: [
      {
        key: '41',
        label: 'Option 1',
      },
      {
        key: '42',
        label: 'Option 2',
      },
      {
        key: '43',
        label: 'Option 3',
      },
      {
        key: '44',
        label: 'Option 4',
      },
    ],
  },
  {
    key: '5',
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    label: 'Cerrar sesión',
    danger: true,
  },
];
