import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../modules/Seguridad/pages/ListaUsuarios/MOCK_DATA.json";
import ButtonWithIcon from "./ButtonWithIcon";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const SimpleTable = () => {
  const columns = [
    {
      header: "CODIGO",
      accessorKey: "id",
    },
    {
      header: "USUARIO",
      accessorKey: "name",
    },
    {
      header: "TIPO",
      accessorKey: "last_name",
    },
    {
      header: "CORREO",
      accessorKey: "email",
    },
    {
      header: "ULT. INGRESO",
      accessorKey: "dateOfBirth",
    },
    {
      header: "ULT. CIERRE",
      accessorKey: "dateOfBirth",
    },
    {
      header: "OPCIONES",
      cell: <Botones />,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>
        <h1>MOSTRANDO X DE "N" REGISTROS</h1>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="w-full">
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;

export const Botones = () => {
  return (
    <div>
      <ButtonWithIcon
        text="EDITAR"
        icon={faPenToSquare}
        classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
      />
      <ButtonWithIcon
        text="EDITAR"
        icon={faPenToSquare}
        classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
      />
    </div>
  );
};
