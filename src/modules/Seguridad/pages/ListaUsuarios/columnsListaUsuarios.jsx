import BotonesListaUsuarios from "@/modules/Seguridad/pages/ListaUsuarios/BotonesListaUsuarios";
import IndeterminateCheckbox from "@/components/Listas/IndeterminateCheckbox";
import React, { useContext, useMemo } from "react";
import ListasContext from "@/contexts/ListasContext";

export const columnsValue = (multiDelete) => {

  let { reload, setReload } = useContext(ListasContext);

  const values = useMemo(() => {
    const columns = [
      multiDelete && {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "codigo",
        header: "CODIGO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "usuario",
        header: "USUARIO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "tipo",
        header: () => "TIPO",
      },
      {
        accessorKey: "correo",
        header: "CORREO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "ultimo_inicio",
        header: "ULTIMO INGRESO",
        cell: (info) => info.getValue(),
        meta: {
          filterVariant: "dateTime",
        },
      },
      {
        header: "OPCIONES",
        cell: (row) => {
          const id = row.cell.row.original.id;
          const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;

          return (
            <BotonesListaUsuarios
              id={id}
              setReload={setReload}
              reload={reload}
              id_tipo_usuario={id_tipo_usuario}
            />
          );
        },
      },
    ];

    return columns.filter(Boolean);
  }, [reload, setReload, multiDelete]);

  return values;
};
