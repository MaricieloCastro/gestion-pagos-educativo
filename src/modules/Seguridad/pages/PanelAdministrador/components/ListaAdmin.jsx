import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";
import { usuariosActivosApi } from "@/api/ApiRutas";
import TablaListaAdmin from "./TablaListaAdmin";
import AvatarsListaAdmin from "./AvatarsListaAdmin";
import { useNavigate } from "react-router-dom";
import { enlaces } from "@/utils/rutas";

const ListaAdmin = () => {
  let { authTokens } = useContext(AuthContext);

  const [usuarios, setUsuarios] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  useEffect(() => {
    getAxios(usuariosActivosApi, headers, setUsuarios, setLoading, setError);
  }, []);

  const data = usuarios;

  const handleClick = () => {
    navigate(enlaces[6].actualPath);
  };

  const columns = [
    {
      header: "USUARIO",
      cell: (row) => {
        const usuario = row.cell.row.original.usuario;

        return <AvatarsListaAdmin usuario={usuario} />;
      },
    },
    {
      header: "CODIGO",
      accessorKey: "codigo",
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
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="overflow-y-auto">
        <div>
          <p className="text-white-cabecera mx-4 mt-3">LISTA DE USUARIOS:</p>
        </div>
        <div className="mx-4">
          <TablaListaAdmin table={table} loading={loading} />
        </div>
      </div>
      <div className="panel-administrador__seccion-2-1-1-botonLista">
        <div className="flex justify-center items-center">
          <p className="font-semibold text-white-linea my-1">
            LISTA DE USUARIOS
          </p>
        </div>
        <button className="bg-white-texto" onClick={handleClick}>
          <FontAwesomeIcon
            icon={faCaretRight}
            className="text-blue-oscuro h-[2.5vh]"
          />
        </button>
      </div>
    </>
  );
};

export default ListaAdmin;
