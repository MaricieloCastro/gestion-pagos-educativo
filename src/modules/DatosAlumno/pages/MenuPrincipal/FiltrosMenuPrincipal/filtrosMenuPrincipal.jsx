import React from "react";

import SelectFiltros from "@/components/SelectFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { optionsGrado, optionsTurno } from "@/api/optionsFiltros";

export const filtrosMenuPrincipal = (
  setFilteringTipo,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <>
      <div className="filtros-menu-principal__search">
        <div className="filtros-menu-principal__search-elements gap-4 items-center px-4">
          <SelectFiltros
            title="TURNO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTurno}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            // width={290}
            // height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="GRADO"
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
          <SelectFiltros
            title="SECCIÓN"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTurno}
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
          <SelectFiltros
            title="BENEFICIO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTurno}
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
          <SelectFiltros
            title="DEUDA"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTurno}
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
        </div>

        <div className="filtros-menu-principal__search-input items-center px-4 relative gap-4">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-7 z-10 text-blue-claro"
          />
          <Input
            placeholder="BUSCAR..."
            className="w-full py-5 my-2 h-10 border-1 border-blue-claro px-10 text-md"
            value={filteringSearch}
            onChange={(e) => setFilteringSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
