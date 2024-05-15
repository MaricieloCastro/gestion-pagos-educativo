import React from "react";

import MenuLateral from "@/components/MenuLateral";
import Listas from "@/components/Listas";

import { filtrosMenuPrincipal } from "./FiltrosMenuPrincipal/filtrosMenuPrincipal";
import { alumnosApi } from "@/api/ApiRutas";
import { columnsValue } from "./columnsMenuPrincipal";

import "./MenuPrincipal.scss";
import "./FiltrosMenuPrincipal/FiltrosMenuPrincipal.scss";

const MenuPrincipal = () => {
  let { authTokens } = useContext(AuthContext);

  const [reload, setReload] = useState(true);
  const [usuarios, setUsuarios] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens?.access),
  };

  useEffect(() => {
    getAxios(alumnosApi, headers, setUsuarios, setLoading, setError);
  }, [reload]);

  const data = usuarios;
  const columns = [
    {
      header: "CODIGO",
      accessorKey: "codigo",
    },
    {
      header: "ESTADO",
      cell: (row) => {
        const estado = row.cell.row.original.estado;

        return <ColorEstadoDeuda estado={estado} />;
      },
    },
    {
      header: "ALUMNO",
      accessorKey: "alumno",
    },
    {
      header: "BENEFICIO",
      accessorKey: "beneficio",
    },
    {
      header: "TURNO",
      accessorKey: "turno",
    },
    {
      header: "GRADO",
      accessorKey: "grado",
    },
    {
      header: "SECCIÓN",
      accessorKey: "seccion",
    },
    {
      header: "OPCIONES",
      cell: (row) => {
        const id = row.cell.row.original.id;
        const id_beneficio = row.cell.row.original.id_beneficio;
        const estado = row.cell.row.original.estado;

        return (
          <BotonesMenuPrincipal
            id={id}
            setReload={setReload}
            reload={reload}
            id_beneficio={id_beneficio}
            estado={estado}
            dato={data}
          />
        );
      },
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState("");
  const [filteringTipo, setFilteringTipo] = useState([
    {
      id: "tipo",
      value: "", // Valor inicial del filtro de la columna "tipo"
    },
  ]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filteringSearch,
      columnFilters: filteringTipo,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilteringTipo,
    onGlobalFilterChange: setFilteringSearch,
  });

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <Listas
          api={alumnosApi}
          columnsValue={columnsValue}
          classNameTable="menu-principal"
          classNameFiltros="filtros-menu-principal"
          filtrosLista={filtrosMenuPrincipal}
        />
      </MenuLateral>
    </div>
  );
};

export default MenuPrincipal;
