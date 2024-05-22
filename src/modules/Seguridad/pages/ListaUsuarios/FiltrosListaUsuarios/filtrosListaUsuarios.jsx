import React from "react";
import { enlaces } from "@/utils/rutas";

import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { Link } from "react-router-dom";
import { tipo } from "@/api/optionsFiltros";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const filtrosListaUsuarios = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      <div className={`${classNameFiltros}__caja-filtros gap-3`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
            key={headerGroup.id}
          >
            <CallFilter
              headerGroup={headerGroup}
              num={2}
              title="TIPO:"
              options={tipo}
            />
            <CallFilter
              headerGroup={headerGroup}
              num={4}
              title="ULT. INGRESO:"
              options={tipo}
            />
          </div>
        ))}
        <div
          className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}
        >
          <InputFiltros
            filteringSearch={filteringSearch}
            setFilteringSearch={setFilteringSearch}
          />
        </div>
      </div>
      <div
        className={`${classNameFiltros}__caja-boton flex justify-end items-center`}
      >
        <Link to={enlaces[7].path}>
          <ButtonWithIcon
            text="CREAR USUARIO"
            icon={faPlus}
            classNameVariants="gap-2 bg-green-boton hover:bg-green-boton-hover rounded-1"
          />
        </Link>
      </div>
    </div>
  );
};
