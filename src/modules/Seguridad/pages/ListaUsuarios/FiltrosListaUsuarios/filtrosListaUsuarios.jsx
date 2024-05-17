import React from "react";
import ButtonWithIcon from "@/components/ButtonWithIcon";

import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { enlaces } from "@/utils/rutas";

// export const filtrosListaUsuarios = (
//   setFilteringTipo,
//   setFilteringSearch,
//   filteringSearch
// ) => {
//   return (
//     <>
//       <div className="lista-usuarios-filtros__search">
//         <div className="flex gap-4 items-center px-4">
//           <SelectFiltros
//             title="TIPO"
//             classNameTitle="text-blue-claro font-normal"
//             options={optionsTipo}
//             defaultValue="TODOS"
//             bgSelect="#003862"
//             colorFlecha="#D9D9D9"
//             bgElevated="#003768"
//             colorText="#D9D9D9"
//             controlItemBgActive="#004988"
//             controlItemBgHover="#002A50"
//             width={140}
//             height={40}
//             setFilteringTipo={setFilteringTipo}
//           />

//           <DateFiltros />

//           <HourFiltros
//             label="HORA INGRESO"
//             placeholder="H. INGRESO"
//             minuteStep={60}
//             secondStep={60}
//             hourStep={1}
//           />

//           <HourFiltros
//             label="HORA CIERRE"
//             placeholder="H. CIERRE"
//             minuteStep={60}
//             secondStep={60}
//             hourStep={1}
//             setFilteringTipo={setFilteringTipo}
//           />
//         </div>

//         <div className="flex items-center px-4 relative">
//           <FontAwesomeIcon
//             icon={faSearch}
//             className="absolute left-7 z-10 text-blue-claro"
//           />
//           <Input
//             placeholder="BUSCAR..."
//             className="w-input-listas h-10 border-1 border-blue-claro px-10 text-md"
//             value={filteringSearch}
//             onChange={(e) => setFilteringSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className=" flex justify-center relative items-center">
//         <Link
//           to={enlaces[7].path}
//           className="filtros-table__button
//                 absolute right-4"
//         >
//           <ButtonWithIcon
//             text="CREAR USUARIO"
//             icon={faPlus}
//             classNameIcon="pr-3"
//             classNameVariants="rounded-sm
//                 p-4 bg-green-boton hover:bg-green-boton-hover"
//           />
//         </Link>
//       </div>
//     </>
//   );
// };
import CallFilter from "@/components/Listas/CallFilter";
import InputFiltros from "@/components/Listas/Filtros/InputFiltros";
import { Link } from "react-router-dom";
import { tipo } from "@/api/optionsFiltros";

export const filtrosListaUsuarios = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      <div className={`${classNameFiltros}__caja-filtros gap-3`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
            key={headerGroup.id}
          >
            <CallFilter
              headerGroup={headerGroup}
              num={3}
              title="TIPO USUARIO:"
              options={tipo}
            />
            <CallFilter
              headerGroup={headerGroup}
              num={5}
              title="ULT. INGRESO:"
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
