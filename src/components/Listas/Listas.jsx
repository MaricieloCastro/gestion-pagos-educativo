import React, { useState, useContext, useEffect } from "react";

import ListasTable from "./ListasTable";
import ListasPagination from "./ListasPagination";

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
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

  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [filteringSearch, setFilteringSearch] = useState("");

  const data = dataApi;
  const columns = columnsValue(reload, setReload);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      sorting,
      globalFilter: filteringSearch,
      columnFilters,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilteringSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const filtros = filtrosLista(
    table,
    classNameFiltros,
    setFilteringSearch,
    filteringSearch
  );

  const pageSizeOptions = [10, 20, 50, 100];

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido max-h-[calc(100vh-30px)]">
      <div
        className={`${classNameFiltros} bg-white-texto h-[20vh] max-h-[15vh] min-h-[140px]`}
      >
        {filtros}
      </div>

      <div className="listas">
        <div className="border-[1px] overflow-y-auto bg-white">
          <ListasTable
            classNameTable={classNameTable}
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={totalItems}
            loading={loading}
            rowSelection={rowSelection}
          />
        </div>
      </div>

      <div className="flex pb-2 items-start justify-end">
        <ListasPagination table={table} />
      </div>
    </div>
  );
};

export default ListaUsuarios;
