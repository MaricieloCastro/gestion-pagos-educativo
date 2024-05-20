import BotonesHistorialReporte from "./BotonesHistorialReporte";

export const columnsValue = (reload, setReload) => {
    const values = [
        {
            header: "CODIGO",
            accessorKey: "codigo",
        },
        {
            header: "USUARIO",
            accessorKey: "usuario",
        },
        {
            header: "TIPO DE USUARIO",
            accessorKey: "tipo",
        },
        {
            header: "TIPO DE REPORTE",
            accessorKey: "correo",
        },
        {
            header: "DESCRIPCIÓN",
            accessorKey: "descripcion",
        },
        {
            header: "FECHA",
            accessorKey: "fecha_inicio",
        },
        {
            header: "OPCIONES",
            cell: (row) => {
                const id = row.cell.row.original.id;
                const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;
                const username = row.cell.row.original.username;
                const password = row.cell.row.original.password;

                return (
                    <BotonesHistorialReporte
                        id={id}
                        setReload={setReload}
                        reload={reload}
                        username={username}
                        password={password}
                        id_tipo_usuario={id_tipo_usuario}
                    />
                );
            },
        },
    ];

    return values;
};
