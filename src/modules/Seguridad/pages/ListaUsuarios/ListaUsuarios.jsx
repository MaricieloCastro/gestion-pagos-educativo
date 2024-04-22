import React, { useState } from "react";
import MenuLateral from "@/components/MenuLateral";

import FiltrosTableListaUsuarios from "@/components/Tables/TableListaUsuarios/FiltrosTableListaUsuarios";
import TableListaUsuarios from "@/components/Tables/TableListaUsuarios/TableListaUsuarios";
import Pagination from "@/components/Tables/Pagination";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import BotonesListaUsuarios from "@/components/Tables/TableListaUsuarios/BotonesListaUsuarios";
import data from "../ListaUsuarios/MOCK_DATA.json";

const ListaUsuarios = () => {
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
      cell: <BotonesListaUsuarios />,
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");
  const [filteringTipo, setFilteringTipo] = useState([
    {
      id: "tipo",
      value: "", // Valor inicial del filtro de la columna "tipo"
    },
    {
      id: "ultimo_cierre",
      value: "", // Valor inicial del filtro de la columna "tipo"
    },
  ]);

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
      columnFilters: filteringTipo,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilteringTipo,
    onGlobalFilterChange: setFilteringSearch,
  });

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido">
          <FiltrosTableListaUsuarios
            setFilteringTipo={setFilteringTipo}
            setFilteringSearch={setFilteringSearch}
            filteringSearch={filteringSearch}
          />

          <TableListaUsuarios
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={totalItems}
          />

          <Pagination table={table} />
        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
