import React from "react";

import SelectFiltros from "@/components/SelectFiltros";
import { optionsGrado, optionsTurno } from "@/api/optionsFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../TableListaUsuarios/FiltrosTableListaUsuarios.scss";

const FiltrosTableMenuPrincipal = (props) => {
  const {
    setFilteringColumn,
    setFilteringSearch,
    filteringSearch,
    columnSelect,
    setColumnSelect,
  } = props;
  // const { value, onChange } = props;

  return (
    <div className="filtros-table-menu-principal bg-white-texto min-w-[calc(100vh-157px)] h-[20vh] max-h-[15vh] min-h-[130px]">
      <div className="filtros-table-menu-principal__search overflow-x-auto">
        <div className="flex gap-5 items-center px-4">
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
            width={290}
            height={40}
            setFilteringColumn={setFilteringColumn}
            columnValue="turno"
            columnSelect={columnSelect}
            setColumnSelect={setColumnSelect}
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
            setFilteringColumn={setFilteringColumn}
            columnValue="grado"
            columnSelect={columnSelect}
            setColumnSelect={setColumnSelect}
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
            setFilteringColumn={setFilteringColumn}
            columnValue="seccion"
            columnSelect={columnSelect}
            setColumnSelect={setColumnSelect}
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
            setFilteringColumn={setFilteringColumn}
            columnValue="beneficio"
            columnSelect={columnSelect}
            setColumnSelect={setColumnSelect}
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
            setFilteringColumn={setFilteringColumn}
            columnValue="estado"
            columnSelect={columnSelect}
            setColumnSelect={setColumnSelect}
          />
        </div>

        <div className="flex items-center px-4 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-7 z-10 text-blue-claro"
          />
          <Input
            placeholder="BUSCAR..."
            className="w-[290px] py-5 h-10 border-1 border-blue-claro px-10 text-md"
            value={filteringSearch}
            onChange={(e) => setFilteringSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltrosTableMenuPrincipal;
