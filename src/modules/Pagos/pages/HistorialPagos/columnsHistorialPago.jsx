import React, { useContext, useMemo } from "react";
import BotonesHistorialPago from "./BotonesHistorialPago";
import IndeterminateCheckbox from "@/components/Listas/IndeterminateCheckbox";
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
        accessorKey: "alumno",
        header: "ALUMNO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "tipo_de_pago",
        header: "TIPO PAGO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "monto",
        header: "MONTO",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "fecha",
        header: "FECHA",
        cell: (info) => info.getValue(),
      },
      {
        header: "OPCIONES",
        cell: (row) => {
          const id = row.cell.row.original.id;

          return (
            <BotonesHistorialPago
              id={id}
              setReload={setReload}
              reload={reload}
            />
          );
        },
      },
    ];

    return columns.filter(Boolean);
  }, [reload, setReload, multiDelete]);

  return values;
};
