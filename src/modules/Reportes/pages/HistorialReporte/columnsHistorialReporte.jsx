import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox';
import dayjs from 'dayjs';

export const columnsValue = (multiDelete, setReload) => {
  const columns = [
    {
      accessorKey: 'dni',
      header: 'CODIGO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'usuario',
      header: 'USUARIO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'tipo_usuario',
      header: 'TIPO USUARIO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'tipo_reporte',
      header: 'TIPO REPORTE',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'descripcion',
      header: 'DESCRIPCIÓN',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'fecha',
      header: 'FECHA',
      cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY HH:mm:ss')
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
