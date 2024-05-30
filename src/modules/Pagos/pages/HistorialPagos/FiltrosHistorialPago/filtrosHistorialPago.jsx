import React from "react";
import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { tipo } from "@/api/optionsFiltros";
import { filterAdapter } from "@/components/Listas/CallFilter/filterAdapter";
import { beneficioAPI, gradoAPI, seccionAPI, turnoAPI } from "@/api/ApiRutas";

export const filtrosHistorialPagos = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  const optionsBeneficio = filterAdapter(beneficioAPI);
  const optionsTurno = filterAdapter(turnoAPI);
  const optionsGrado = filterAdapter(gradoAPI);
  const optionsSeccion = filterAdapter(seccionAPI);

  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={2}
            title="ESTADO:"
            options={tipo}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={4}
            title="BENEFICIO:"
            options={optionsBeneficio}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={5}
            title="TURNO:"
            options={optionsTurno}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={6}
            title="GRADO:"
            options={optionsGrado}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={7}
            title="SECCIÓN:"
            options={optionsSeccion}
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
