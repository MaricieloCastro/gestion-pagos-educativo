import BotonesListaUsuarios from '@/modules/Seguridad/pages/ListaUsuarios/BotonesListaUsuarios'
import IndeterminateCheckbox from '@/components/Listas/IndeterminateCheckbox'
import { useContext, useMemo } from 'react'
import ListasContext from '@/contexts/ListasContext'
import dayjs from 'dayjs'

export const columnsValue = (multiDelete) => {
  let { reload, setReload } = useContext(ListasContext)

  const values = useMemo(() => {
    const columns = [
      multiDelete && {
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
          <div className='px-1'>
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
      },
      {
        accessorKey: 'codigo_usuario',
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
        header: () => 'TIPO USUARIO'
      },
      {
        accessorKey: 'tipo_reporte',
        header: 'TIPO REPORTE',
        cell: (info) => info.getValue()
      },
      {
        accessorKey: 'descripcion',
        header: 'DESCRIPCION',
        cell: (info) => info.getValue()
      },
      {
        accessorFn: (row) =>
          `${dayjs(row.fecha).format('DD/MM/YYYY')} ${dayjs(row.fecha).format(
            'HH:mm:ss'
          )}`,
        id: 'fecha',
        header: 'FECHA',
        cell: (info) => info.getValue(),
        meta: {
          filterVariant: 'dateTime'
        }
      }
      // {
      //   header: 'OPCIONES',
      //   cell: (row) => {
      //     const id = row.cell.row.original.id
      //     const id_tipo_usuario = row.cell.row.original.id_tipo_usuario

      //     return (
      //       <BotonesListaUsuarios
      //         id={id}
      //         setReload={setReload}
      //         reload={reload}
      //         id_tipo_usuario={id_tipo_usuario}
      //       />
      //     )
      //   }
      // }
    ]

    return columns.filter(Boolean)
  }, [reload, setReload, multiDelete])

  return values
}
