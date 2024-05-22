import React from "react";

import SelectFiltros from "@/components/SelectFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { optionsGrado, optionsTurno } from "@/api/optionsFiltros";
import HourFiltros from "@/components/HourFiltros";
import DateFiltros from "@/components/DateFiltros";

export const filtrosHistorialReporte = (
    setFilteringTipo,
    setFilteringSearch,
    filteringSearch
) => {
    return (
        <>
            <div className="filtros-historial-reporte__search">
                <div className="filtros-historial-reporte__search-elements gap-4 items-center px-4">
                    <SelectFiltros
                        title="TIPO DE USUARIO"
                        classNameTitle="text-blue-claro font-normal"
                        options={optionsTurno}
                        defaultValue="TODOS"
                        bgSelect="#003862"
                        colorFlecha="#D9D9D9"
                        bgElevated="#003768"
                        colorText="#D9D9D9"
                        controlItemBgActive="#004988"
                        controlItemBgHover="#002A50"
                        setFilteringTipo={setFilteringTipo}
                    />
                    <SelectFiltros
                        title="TIPO DE REPORTE"
                        classNameTitle="text-blue-claro font-normal"
                        options={optionsGrado}
                        defaultValue="TODOS"
                        bgSelect="#003862"
                        colorFlecha="#D9D9D9"
                        bgElevated="#003768"
                        colorText="#D9D9D9"
                        controlItemBgActive="#004988"
                        controlItemBgHover="#002A50"
                        width={290}
                        height={40}
                        setFilteringTipo={setFilteringTipo}
                    />

                    <DateFiltros
                        label="FECHA"
                        placeholder=""
                    />

                    <HourFiltros
                        label="HORA"
                        placeholder=""
                        minuteStep={60}
                        secondStep={60}
                        hourStep={1}
                    />

                </div>

                <div className="filtros-historial-reporte__search-input items-center px-4 relative gap-4">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-7 z-10 text-blue-claro"
                    />
                    <Input
                        placeholder="BUSCAR..."
                        className="w-full py-5 my-2 min-w-36 h-10 border-1 border-blue-claro px-10 text-md"
                        value={filteringSearch}
                        onChange={(e) => setFilteringSearch(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

