import React, { useContext, useMemo } from "react";
import BotonesEstudiantesDelete from "./BotonesEstudiantesDelete";
import ListasColorDeuda from "@/components/Listas/ListasColorDeuda";
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
                id: "deuda",
                accessorKey: "deuda",
                header: () => "ESTADO",
                cell: (row) => {
                    const deuda = row.cell.row.original.deuda;
                    return <ListasColorDeuda deuda={deuda} />;
                },
            },
            {
                accessorKey: "alumno",
                header: "ALUMNO",
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: "beneficio",
                header: "BENEFICIO",
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: "turno",
                header: "TURNO",
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: "grado",
                header: "GRADO",
                cell: (info) => info.getValue(),
            },
            {
                accessorKey: "seccion",
                header: "SECCIÓN",
                cell: (info) => info.getValue(),
            },
            {
                header: "OPCIONES",
                cell: (row) => {
                    const id = row.cell.row.original.id;
                    const estado_deuda = row.cell.row.original.deuda;

                    return (
                        <BotonesEstudiantesDelete
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
