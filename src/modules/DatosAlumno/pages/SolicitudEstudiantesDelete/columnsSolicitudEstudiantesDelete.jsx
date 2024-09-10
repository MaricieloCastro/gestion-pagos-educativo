import ListasColorDeuda from '@/components/Listas/ListasColorDeuda';
import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox';
import BotonesSolicitudEstudiantesDelete from './BotonesSolicitudEstudiantesDelete.jsx';

export const columnsValue = (multiDelete, setReload) => {
  const columns = [
    {
      accessorKey: 'dni',
      header: 'CODIGO',
      cell: (info) => info.getValue()
    },
    {
      id: 'deuda',
      accessorKey: 'deuda',
      header: () => 'ESTADO',
      cell: (row) => {
        const deuda = row.cell.row.original.deuda;
        return <ListasColorDeuda deuda={deuda} />;
      }
    },
    {
      accessorKey: 'alumno',
      header: 'ALUMNO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'beneficio',
      header: 'BENEFICIO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'turno',
      header: 'TURNO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'grado',
      header: 'GRADO',
      cell: (info) => info.getValue()
    },
    {
      accessorKey: 'seccion',
      header: 'SECCIÓN',
      cell: (info) => info.getValue()
    },
    {
      header: 'OPCIONES',
      cell: (row) => {
        const id = row.cell.row.original.id;

        return (
          <BotonesSolicitudEstudiantesDelete id={id} setReload={setReload} />
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
