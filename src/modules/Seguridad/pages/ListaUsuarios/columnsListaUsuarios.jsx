import BotonesListaUsuarios from "@/modules/Seguridad/pages/ListaUsuarios/BotonesListaUsuarios";

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
      header: "TIPO",
      accessorKey: "tipo",
    },
    {
      header: "CORREO",
      accessorKey: "correo",
    },
    {
      header: "ULT. INGRESO",
      accessorKey: "fecha_inicio",
    },
    {
      header: "ULT. CIERRE",
      accessorKey: "fecha_cierre",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;
        const username = row.cell.row.original.username;
        const password = row.cell.row.original.password;

        return (
          <BotonesListaUsuarios
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
