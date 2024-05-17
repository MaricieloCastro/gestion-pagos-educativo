import React from "react";
import ButtonWithIcon from "@/components/ButtonWithIcon";

import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { enlaces } from "@/utils/rutas";

import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { Link } from "react-router-dom";
import { tipo } from "@/api/optionsFiltros";

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
              num={3}
              title="TIPO USUARIO:"
              options={tipo}
            />
            <CallFilter
              headerGroup={headerGroup}
              num={5}
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
      <div className=" flex justify-center relative items-center">
        <Link
          to={enlaces[7].path}
          className="filtros-table__button
                absolute right-4"
        >
          <ButtonWithIcon
            text="CREAR USUARIO"
            icon={faPlus}
            classNameIcon="pr-3"
            classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
          />
        </Link>
      </div>
    </div>
  );
};
