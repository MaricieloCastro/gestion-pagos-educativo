import React, { useState, useContext, useEffect } from "react";

import ListasTable from "./ListasTable";
import ListasPagination from "./ListasPagination";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";

const ListaUsuarios = (props) => {
  let { authTokens } = useContext(AuthContext);

  const { api, columnsValue, classNameTable, classNameFiltros, filtrosLista } =
    props;

  const [reload, setReload] = useState(true);
  const [dataApi, setDataApi] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens?.access),
  };

  useEffect(() => {
    getAxios(api, headers, setDataApi, setLoading, setError);
  }, [reload]);

  const data = dataApi;

  const columns = columnsValue(reload, setReload);

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");
  const [filteringTipo, setFilteringTipo] = useState([
    {
      id: "tipo",
      value: "", // Valor inicial del filtro de la columna "tipo"
    },
  ]);

  const filtros = filtrosLista(
    setFilteringTipo,
    setFilteringSearch,
    filteringSearch
  );

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
    <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido max-h-[calc(100vh-30px)]">
      <div
        className={`${classNameFiltros} bg-white-texto h-[20vh] max-h-[15vh] min-h-[140px]`}
      >
        {filtros}
      </div>

      <ListasTable
        classNameTable={classNameTable}
        table={table}
        numItemsForPage={numItemsForPage}
        totalItems={totalItems}
        loading={loading}
      />

      <ListasPagination table={table} />
    </div>
  );
};

export default ListaUsuarios;
