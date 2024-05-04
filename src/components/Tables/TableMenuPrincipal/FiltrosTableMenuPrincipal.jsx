import React from "react";

import SelectFiltros from "@/components/SelectFiltros";
import { optionsTipo } from "@/api/optionsFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import "../TableListaUsuarios/FiltrosTableListaUsuarios.scss";

const FiltrosTableMenuPrincipal = (props) => {
  const { setFilteringTipo, setFilteringSearch, filteringSearch } = props;
  // const { value, onChange } = props;

  return (
    <div className="filtros-table bg-white-texto h-[20vh] max-h-[15vh] min-h-[130px]">
      <div className="filtros-table__search">
        <div className="flex gap-x-12 items-center px-4">
          <SelectFiltros
            title="TURNO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={160}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="GRADO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={160}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="SECCIÓN"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={160}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="BENEFICIO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={160}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="DEUDA"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={160}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
        </div>

        <div className="flex items-center px-4 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-7 z-10 text-blue-claro"
          />
          <Input
            placeholder="BUSCAR..."
            className="w-input-listas h-10 border-1 border-blue-claro px-10 text-md"
            value={filteringSearch}
            onChange={(e) => setFilteringSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltrosTableMenuPrincipal;
