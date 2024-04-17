import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import data from "../../modules/Seguridad/pages/ListaUsuarios/MOCK_DATA.json";

// Pagination
import PaginationList from "../PaginationList";

import ButtonWithIcon from "../ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "./SimpleTable.scss";

const SimpleTable = () => {

  const columns = [
    {
      header: "CODIGO",
      accessorKey: "dni",
    },
    {
      header: "USUARIO",
      accessorKey: "name",
    },
    {
      header: "TIPO",
      accessorKey: "tipo",
    },
    {
      header: "CORREO",
      accessorKey: "email",
    },
    {
      header: "ULT. INGRESO",
      accessorKey: "ultimo_ingreso",
    },
    {
      header: "ULT. CIERRE",
      accessorKey: "ultimo_cierre",
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
    getPaginationRowModel: getPaginationRowModel(),
  });

  const numItemsForPage = table.getRowModel().rows.length
  const totalItems = data.length

  console.log("actual", table.getState().pagination.pageIndex + 1)
  console.log("anterior", table.getState().pagination.pageIndex)

  return (
    <>
      <div className="bg-white-texto overflow-y-scroll h-height-caja-listas mt-4">
        <div className="grid ">
          <div className="flex items-center bg-gray-listas h-10 border-b-2  border-b-white-cabecera">
            <h1 className="mx-5 text-white font-inter">
              MOSTRANDO {numItemsForPage} DE {totalItems}° REGISTROS
            </h1>
          </div>
          <table className="max-w-full">
            <thead className="bg-gray-listas sticky top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="w-full">
                  {headerGroup.headers.map((header) => (
                    <th
                      className="text-center px-5 font-inter text-gray-listas-header h-10"
                      key={header.id}
                    >
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
                    <td
                      className="max-w-lista-maxWidth py-4 text-justify px-5 font-inter font-light text-base"
                      key={cell.id}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative">
        <PaginationList
          goLastPage={() => table.setPageIndex(table.getPageCount() - 1)}
          goFirstPage={() => table.setPageIndex(0)}
          goNextPage={() => table.setPageIndex(table.getState().pagination.pageIndex + 1)}
          goPrevPage={() => table.setPageIndex(table.getState().pagination.pageIndex - 1)}
          currentPage={table.getState().pagination.pageIndex + 1}
          prevPage={table.getState().pagination.pageIndex}
          nextPage={table.getState().pagination.pageIndex + 2}
        />
      </div>
    </>
  );
};

export default SimpleTable;

export const Botones = () => {
  return (
    <div className="flex gap-2 justify-center items-center ">
      <ButtonWithIcon
        text="EDITAR"
        icon={faPenToSquare}
        classNameIcon="w-4 pr-1"
        classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
      />
      <ButtonWithIcon
        text=""
        icon={faTrashCan}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-red-boton-listas hover:bg-red-boton-listas-hover
                w-10 "
      />
    </div>
  );
};


