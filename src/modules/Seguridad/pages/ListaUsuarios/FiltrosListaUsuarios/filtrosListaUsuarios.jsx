import React from "react";
import ButtonWithIcon from "@/components/ButtonWithIcon";

import SelectFiltros from "@/components/SelectFiltros";
import { optionsTipo } from "@/api/optionsFiltros";
import DateFiltros from "@/components/DateFiltros";
import HourFiltros from "@/components/HourFiltros";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { enlaces } from "@/utils/rutas";

export const filtrosListaUsuarios = (
  setFilteringTipo,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className="lista-usuarios-filtros__box h-full">
      <div className="lista-usuarios-filtros__box-search">
        <div className="lista-usuarios-filtros__box-search-elements gap-4 items-center px-4">
          <SelectFiltros
            title="TIPO"
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

          <DateFiltros label="FECHA INGRESO"
            placeholder="F. INGRESO" />

          <HourFiltros
            label="HORA INGRESO"
            placeholder="H. INGRESO"
            minuteStep={60}
            secondStep={60}
            hourStep={1}
          />

          <HourFiltros
            label="HORA CIERRE"
            placeholder="H. CIERRE"
            minuteStep={60}
            secondStep={60}
            hourStep={1}
            setFilteringTipo={setFilteringTipo}
          />
        </div>

        <div className="lista-usuarios-filtros__box-search-input items-center px-4 gap-4">
          <div className="lista-usuarios-filtros__box-search-input__element relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-5 z-10 text-blue-claro"
            />
            <Input
              placeholder="BUSCAR..."
              className="w-full py-5 my-2 min-w-36 h-10 border-1 border-blue-claro px-10 text-md"
              value={filteringSearch}
              onChange={(e) => setFilteringSearch(e.target.value)}
            />
          </div>
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
