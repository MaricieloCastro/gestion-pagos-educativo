import ListasColorDeuda from "@/components/Listas/ListasColorDeuda";
import BotonesMenuPrincipal from "./BotonesMenuPrincipal";

export const columnsValue = (reload, setReload) => {
  const values = [
    {
      header: "CODIGO",
      accessorKey: "codigo",
    },
    {
      header: "ESTADO",
      cell: (row) => {
        const estado = row.cell.row.original.estado;

        return <ListasColorDeuda estado={estado} />;
      },
    },
    {
      header: "ALUMNO",
      accessorKey: "alumno",
    },
    {
      header: "BENEFICIO",
      accessorKey: "beneficio",
    },
    {
      header: "TURNO",
      accessorKey: "turno",
    },
    {
      header: "GRADO",
      accessorKey: "grado",
    },
    {
      header: "SECCIÓN",
      accessorKey: "seccion",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const estado_deuda = row.cell.row.original.estado;

        return (
          <BotonesMenuPrincipal
            id={id}
            setReload={setReload}
            reload={reload}
            estado_deuda={estado_deuda}
          />
        );
      },
    },
  ];

  return values;
};
