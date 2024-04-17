import React from "react";
import MenuLateral from "@/components/MenuLateral";
import SelectFiltros from "@/components/SelectFiltros";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { optionsTipo } from "@/api/optionsFiltros";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DateFiltros from "@/components/DateFiltros";
import HourFiltros from "@/components/HourFiltros";

import SimpleTable from "@/components/SimpleTable/SimpleTable";
import { Input } from "@/components/InputListas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ListaUsuarios = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido">
          <div className="bg-white-texto flex justify-between h-36">
            <div className="w-2/3 grid grid-rows-2">
              <div className="flex gap-4 items-center px-4 py-2">
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
                />
                <DateFiltros />
                <HourFiltros label="HORA INGRESO" placeholder="H. INGRESO" />
                <HourFiltros label="HORA CIERRE" placeholder="H. CIERRE" />
              </div>
              <div className="flex items-center px-4 relative">
                <FontAwesomeIcon icon={faSearch} className="absolute left-7 z-10 text-blue-claro" />
                <Input
                  placeholder="BUSCAR..." className="w-input-listas h-10 border-1 border-blue-claro px-10 " />
              </div>
            </div>
            <div className="w-1/3 flex justify-center relative items-center">
              <ButtonWithIcon
                text="CREAR USUARIO"
                icon={faPlus}
                classNameIcon="pr-3"
                classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover
                absolute right-4"
              />
            </div>
          </div>

          <SimpleTable />

        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
