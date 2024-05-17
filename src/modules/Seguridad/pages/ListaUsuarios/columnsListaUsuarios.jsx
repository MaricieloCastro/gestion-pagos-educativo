import BotonesListaUsuarios from "@/modules/Seguridad/pages/ListaUsuarios/BotonesListaUsuarios";

// export const columnsValue = (reload, setReload) => {
//   const values = [
//     {
//       header: "CODIGO",
//       accessorKey: "codigo",
//     },
//     {
//       header: "USUARIO",
//       accessorKey: "usuario",
//     },
//     {
//       header: "TIPO",
//       accessorKey: "tipo",
//     },
//     {
//       header: "CORREO",
//       accessorKey: "correo",
//     },
//     {
//       header: "ULT. INGRESO",
//       accessorKey: "fecha_inicio",
//     },
//     {
//       header: "ULT. CIERRE",
//       accessorKey: "fecha_cierre",
//     },
//     {
//       header: "OPCIONES",
//       cell: (row) => {
//         const id = row.cell.row.original.id;
//         const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;
//         const username = row.cell.row.original.username;
//         const password = row.cell.row.original.password;

//         return (
//           <BotonesListaUsuarios
//             id={id}
//             setReload={setReload}
//             reload={reload}
//             username={username}
//             password={password}
//             id_tipo_usuario={id_tipo_usuario}
//           />
//         );
//       },
//     },
//   ];

//   return values;
// };

import IndeterminateCheckbox from "@/components/Listas/IndeterminateCheckbox";
import React, { useMemo } from "react";

export const columnsValue = (reload, setReload) => {
  const values = useMemo(
    () => [
      {
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
        accessorKey: "fecha_inicio",
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
    ],
    []
  );

  return values;
};
