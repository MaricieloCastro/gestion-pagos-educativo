import React from "react";
import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { tipo } from "@/api/optionsFiltros";

export const filtrosEstudiantesDelete = (
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
