import BotonesListaUsuarios from '@/modules/Seguridad/pages/ListaUsuarios/BotonesListaUsuarios';
import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox';
import dayjs from 'dayjs';

export const columnsValue = (multiDelete, setReload) => {
  const columns = [
    {
      accessorKey: 'dni',
      header: 'CODIGO',
      id: 'dni',
      cell: (info) => <div className='text-center'>{info.getValue()}</div>
    },
    {
      accessorKey: 'usuario',
      header: 'USUARIO',
      id: 'usuario',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'tipo_usuario',
      header: 'TIPO',
      id: 'tipo_usuario',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'email',
      header: 'CORREO',
      id: 'email',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'last_login',
      id: 'last_login',
      header: 'ULTIMO INGRESO',
      cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY HH:mm:ss') // Formatear la fecha
    },
    {
      header: 'OPCIONES',
      id: 'opciones',
      cell: (row) => {
        const id = row.cell.row.original.id;
        const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;

        return (
          <BotonesListaUsuarios
            id={id}
            setReload={setReload}
            id_tipo_usuario={id_tipo_usuario}
          />
        );
      }
    }
  ];

  if (multiDelete) {
    columns.unshift({
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler()
          }}
        />
      ),
      cell: ({ row }) => (
        <div className='px-1 flex justify-center items-center'>
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        </div>
      )
    });
  }

  return columns;
};
