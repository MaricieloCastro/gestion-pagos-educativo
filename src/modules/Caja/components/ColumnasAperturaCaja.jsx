import React, { useContext, useMemo } from "react";
import ListasColorDeuda from "@/components/Listas/ListasColorDeuda";
import BotonesMenuPrincipal from "@/modules/DatosAlumno/pages/MenuPrincipal/BotonesMenuPrincipal";
import IndeterminateCheckbox from "@/components/Listas/IndeterminateCheckbox";
import ListasContext from "@/contexts/ListasContext";

export const columnsAperturaCaja = (multiDelete) => {
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
      // {
      //   accessorKey: "id",
      //   header: "ID",
      //   cell: (info) => info.getValue(),
      // },
      {
        accessorKey: "nombre",
        header: "CAJA",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "fecha_apertura",
        header: "APERTURA",
        cell: (info) => info.getValue(),
      },
        // {
        //   accessorKey: "fecha_cierre",
        //   header: "CIERRE",
        //   cell: (info) => info.getValue(),
        // },
      // {
      //   accessorKey: "descripcion",
      //   header: "DESCRIPCION",
      //   cell: (info) => info.getValue(),
      // },
      {
        id: "estado",
        accessorKey: "estado",
        header: () => "A/C",
        cell: (row) => {
          const deuda = row.cell.row.original.deuda;
          return <ListasColorDeuda deuda={deuda} />;
        },
      },
    ];

    return columns.filter(Boolean);
  }, [reload, setReload, multiDelete]);

  return values;
};
