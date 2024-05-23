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
import ListasContext from "@/contexts/ListasContext";
import { getAxios } from "@/functions/methods";

import './Listas.scss'

const ListaUsuarios = (props) => {
  let { authTokens } = useContext(AuthContext);
  let { reload } = useContext(ListasContext);

  const { api, columnsValue, classNameTable, classNameFiltros, filtrosLista, multiDelete, buttonTittle1, buttonTittle2, buttonFunction } = props;
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
  const columns = columnsValue(multiDelete);

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
    filteringSearch,
    multiDelete,
  );

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <>
      <div
        className={`${classNameFiltros} border-[1px] bg-white-cabecera px-3 gap-2 py-2 pb-3`}
      >
        {filtros}
      </div>

      <div className="listas">
        <div className=" overflow-y-auto bg-white-linea">
          <ListasTable
            classNameTable={classNameTable}
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={totalItems}
            loading={loading}
            rowSelection={rowSelection}
            multiDelete={multiDelete}
            buttonTittle1={buttonTittle1}
            buttonTittle2={buttonTittle2}
            buttonFunction={buttonFunction}
          />
        </div>
      </div>

      <div className="flex items-start justify-center">
        <ListasPagination table={table} />
      </div>
    </>
  );
};

export default ListaUsuarios;
