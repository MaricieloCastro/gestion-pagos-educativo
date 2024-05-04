import React, { useState, useContext, useEffect } from "react";
import MenuLateral from "@/components/MenuLateral";

import FiltrosTableMenuPrincipal from "@/components/Tables/TableMenuPrincipal/FiltrosTableMenuPrincipal";
import TableMenuPrincipal from "@/components/Tables/TableMenuPrincipal/TableMenuPrincipal";
import Pagination from "@/components/Tables/Pagination";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import BotonesMenuPrincipal from "@/components/Tables/TableMenuPrincipal/BotonesMenuPrincipal";
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";
import { alumnosApi } from "@/api/ApiRutas";
import ColorEstadoDeuda from "@/components/Tables/TableSolicitudEstudiantesDelete/ColorEstadoDeuda";

const MenuPrincipal = () => {
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
    getAxios(alumnosApi, headers, setUsuarios, setLoading, setError);
  }, [reload]);

  const data = usuarios;

  const columns = [
    {
      header: "CODIGO",
      accessorKey: "codigo",
    },
    {
      header: "ESTADO",
      cell: (row) => {
        const estado = row.cell.row.original.estado;

        return (
          <ColorEstadoDeuda
            estado={estado}
          />
        );
      },
    },
    {
      header: "ALUMNO",
      accessorKey: "alumno",
    },
    {
      header: "BENEFICIO",
      accessorKey: "beneficio",
    },
    {
      header: "TURNO",
      accessorKey: "turno",
    },
    {
      header: "GRADO",
      accessorKey: "grado",
    },
    {
      header: "SECCIÓN",
      accessorKey: "seccion",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const id_beneficio = row.cell.row.original.id_beneficio;
        const estado = row.cell.row.original.estado;

        return (
          <BotonesMenuPrincipal
            id={id}
            setReload={setReload}
            reload={reload}
            id_beneficio={id_beneficio}
            estado={estado}
          />
        );
      },
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");
  const [filteringTipo, setFilteringTipo] = useState([
    // {
    //   id: "tipo",
    //   value: "", // Valor inicial del filtro de la columna "tipo"
    // },
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
          <FiltrosTableMenuPrincipal
            setFilteringTipo={setFilteringTipo}
            setFilteringSearch={setFilteringSearch}
            filteringSearch={filteringSearch}
          />

          <TableMenuPrincipal
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

export default MenuPrincipal;
