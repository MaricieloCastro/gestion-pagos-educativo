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

const EstudiantesDelete = () => {
  let { authTokens } = useContext(AuthContext);

  const [reload, setReload] = useState(true);
  const [usuarios, setUsuarios] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens?.access),
  };

  useEffect(() => {
    getAxios(usuariosActivosApi, headers, setUsuarios, setLoading, setError);
  }, [reload]);

  const data = usuarios;

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
      accessorKey: "ultimo_ingreso_fecha",
    },
    {
      header: "ULT. CIERRE",
      accessorKey: "ultimo_cierre_fecha",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const id_tipo_usuario = row.cell.row.original.id_tipo_usuario;
        const username = row.cell.row.original.username;
        const password = row.cell.row.original.password;
        const is_active = row.cell.row.original.is_active;

        return (
          <BotonesListaUsuarios
            id={id}
            setReload={setReload}
            reload={reload}
            username={username}
            password={password}
            id_tipo_usuario={id_tipo_usuario}
            is_active={is_active}
          />
        );
      },
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
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido max-h-[calc(100vh-30px)]">
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

export default EstudiantesDelete;
