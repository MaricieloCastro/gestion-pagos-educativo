import ListasColorDeuda from "@/components/Listas/ListasColorDeuda";
import BotonesSolicitudEstudiantesDelete from "./BotonesSolicitudEstudiantesDelete";


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

                return (
                    <ListasColorDeuda
                        estado={estado}
                    />
                );
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
                const id_beneficio = row.cell.row.original.id_beneficio;
                const estado = row.cell.row.original.estado;

                return (
                    <BotonesSolicitudEstudiantesDelete
                        id={id}
                        setReload={setReload}
                        reload={reload}
                        id_beneficio={id_beneficio}
                        estado={estado}
                    />
                );
            },
        },
    ];

    return values;
};
