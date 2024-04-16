import React from "react";
import MenuLateral from "@/components/MenuLateral";
import SelectFiltros from '@/components/SelectFiltros'
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { optionsTipo } from '@/api/optionsFiltros'
import { faPlus, faVault } from '@fortawesome/free-solid-svg-icons'


const ListaUsuarios = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido">
          <div className="bg-white-texto flex justify-between">
            <div className="w-2/3 grid">
              <div className="flex justify-center items-center">
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
                  width={120}
                  height={40}
                />
              </div>
              <div>
                BUSCADOR
              </div>
            </div>
            <div className="w-1/3 flex justify-center relative items-center">
              <ButtonWithIcon
                text="CREAR USUARIO"
                icon={faPlus} classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover
                absolute right-4"
              />
            </div>
          </div>
          <div className="bg-white-texto mt-2.5">ay</div>
        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
