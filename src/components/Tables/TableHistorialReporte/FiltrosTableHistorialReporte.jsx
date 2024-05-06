import React from "react";
import ButtonWithIcon from "../../ButtonWithIcon";

import SelectFiltros from "@/components/SelectFiltros";
import { optionsTipo } from "@/api/optionsFiltros";
import DateFiltros from "@/components/DateFiltros";
import HourFiltros from "@/components/HourFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { enlaces } from "@/utils/rutas";

import "../TableListaUsuarios/FiltrosTableListaUsuarios.scss";

const FiltrosTableHistorialReporte = (props) => {
  const { setFilteringTipo, setFilteringSearch, filteringSearch } = props;
  // const { value, onChange } = props;

  return (
    <div className="filtros-table bg-white-texto h-[20vh] max-h-[15vh] min-h-[130px]">
      <div className="filtros-table__search">
        <div className="flex gap-4 items-center px-4">
          <SelectFiltros
            title="TIPO DE USUARIO"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={140}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />
          <SelectFiltros
            title="TIPO DE REPORTES"
            classNameTitle="text-blue-claro font-normal"
            options={optionsTipo}
            defaultValue="TODOS"
            bgSelect="#003862"
            colorFlecha="#D9D9D9"
            bgElevated="#003768"
            colorText="#D9D9D9"
            controlItemBgActive="#004988"
            controlItemBgHover="#002A50"
            width={140}
            height={40}
            setFilteringTipo={setFilteringTipo}
          />

          <DateFiltros />

          <HourFiltros
            label="HORA"
            placeholder=""
            minuteStep={60}
            secondStep={60}
            hourStep={1}
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

      <div className=" flex justify-center relative items-center">
        <Link
          to={enlaces[7].path}
          className="filtros-table__button
                absolute right-4"
        >
        </Link>
      </div>
    </div>
  );
};

export default FiltrosTableHistorialReporte;
