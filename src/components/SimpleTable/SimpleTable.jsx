import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import data from "../../modules/Seguridad/pages/ListaUsuarios/MOCK_DATA.json";

// Pagination
import PaginationList from "../PaginationList";

import ButtonWithIcon from "../ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "./SimpleTable.scss";

import SelectFiltros from "@/components/SelectFiltros";
import { optionsTipo } from "@/api/optionsFiltros";
import DateFiltros from "@/components/DateFiltros";
import HourFiltros from "@/components/HourFiltros";

import { Input } from "@/components/InputListas";

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

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filteringSearch,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilteringSearch,
  });

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <>
      <div className="bg-white-texto flex justify-between h-36">
        <div className="w-2/3 grid grid-rows-2">
          <div className="flex gap-4 items-center px-4 py-2">
            <SelectFiltros
              title="TIPO"
              classNameTitle="text-blue-claro font-normal"
              options={optionsTipo}
              defaultValue="TODOS"
              bgSelect="#003862"
              colorFlecha="#D9D9D9"
              bgElevated="#003768"
              colorText="#D9D9D9"
              controlItemBgActive="#004988"
              controlItemBgHover="#002A50"
              width={140}
              height={40}
            />
            <DateFiltros />
            <HourFiltros label="HORA INGRESO" placeholder="H. INGRESO" />
            <HourFiltros label="HORA CIERRE" placeholder="H. CIERRE" />
          </div>
          <div className="flex items-center px-4 relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-7 z-10 text-blue-claro"
            />
            <Input
              placeholder="BUSCAR..."
              className="w-input-listas h-10 border-1 border-blue-claro px-10 text-md"
              value={filteringSearch}
              onChange={(e) => setFilteringSearch(e.target.value)}
              onClick={() => {
                table.setColumnFilters(t);
              }}
            />
          </div>
        </div>
        <div className="w-1/3 flex justify-center relative items-center">
          <ButtonWithIcon
            text="CREAR USUARIO"
            icon={faPlus}
            classNameIcon="pr-3"
            classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover
                absolute right-4"
          />
        </div>
      </div>

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
                      className="text-center px-5 font-inter text-gray-listas-header h-10 cursor-pointer"
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {
                            {
                              asc: <FontAwesomeIcon icon={faUpLong} />,
                              desc: <FontAwesomeIcon icon={faDownLong} />,
                            }[header.column.getIsSorted() ?? null]
                          }
                        </div>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
          goNextPage={() =>
            table.setPageIndex(table.getState().pagination.pageIndex + 1)
          }
          goPrevPage={() =>
            table.setPageIndex(table.getState().pagination.pageIndex - 1)
          }
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
