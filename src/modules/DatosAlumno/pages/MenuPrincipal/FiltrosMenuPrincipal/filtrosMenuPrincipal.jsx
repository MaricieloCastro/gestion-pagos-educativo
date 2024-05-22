import React from "react";
import { enlaces } from "@/utils/rutas";

import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { Link } from "react-router-dom";
import { tipo } from "@/api/optionsFiltros";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const filtrosMenuPrincipal = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={1}
            title="ESTADO:"
            options={tipo}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={3}
            title="BENEFICIO:"
            options={tipo}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={4}
            title="TURNO:"
            options={tipo}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={5}
            title="GRADO:"
            options={tipo}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={6}
            title="SECCIÓN:"
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
  );
};
