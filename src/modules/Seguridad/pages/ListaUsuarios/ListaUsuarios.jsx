import React, { useState, useContext, useEffect } from "react";
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
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";
import { usuariosActivosApi } from "@/api/ApiRutas";

const ListaUsuarios = () => {

  let { authTokens } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState({})
  const [loading, setLoading] = useState(false)

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  useEffect(() => {
    getAxios(usuariosActivosApi, headers, setUsuarios, setLoading)
  }, [])

  const data = usuarios
  console.log("data", data)

  const columns = [
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
      accessorKey: "email",
    },
    {
      header: "ULT. INGRESO",
      accessorKey: "ult_ingreso",
    },
    {
      header: "ULT. CIERRE",
      accessorKey: "ult_cierre",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const codigo = row.cell.row.original.codigo;
        return <BotonesListaUsuarios id={id} dni={codigo} />;
      }
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");
  const [filteringTipo, setFilteringTipo] = useState([
    {
      id: "tipo",
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
            loading={loading}
          />

          <Pagination table={table} />
        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
