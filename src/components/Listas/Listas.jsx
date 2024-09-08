import { useState, useContext, useEffect } from 'react';

import ListasTable from './ListasTable';
import ListasPagination from './ListasPagination';

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import AuthContext from '@/contexts/AuthContext';
import ListasContext from '@/contexts/ListasContext';
import { getAxios } from '@/functions/methods';
import PropTypes from 'prop-types';

import './Listas.scss';

const ListaUsuarios = (props) => {
  let { authTokens } = useContext(AuthContext);
  let { setReload } = useContext(ListasContext);
  let { reload } = useContext(ListasContext);

  const {
    children = null,
    api = '',
    queryParams = '',
    columnsValue = () => {},
    classNameTable = '',
    classNameFiltros = '',
    multiDelete = false,
    buttonTittle1 = '',
    buttonTittle2 = '',
    buttonFunction = () => {}
  } = props;
  const [dataApi, setDataApi] = useState({});
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    };

    let url = `${api}/?page=${page + 1}&page_size=${pageSize}&${queryParams}`;
    getAxios(url, headers, setDataApi, setLoading);
  }, [reload, page, api, authTokens, pageSize, queryParams]);

  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [filteringSearch, setFilteringSearch] = useState('');

  const data = dataApi.results || [];
  const columns = columnsValue(multiDelete, setReload);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      sorting,
      globalFilter: filteringSearch,
      columnFilters,
      rowSelection,
      pagination: {
        pageIndex: page,
        pageSize: pageSize
      }
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilteringSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount: dataApi?.count,
    manualPagination: true,
    debugTable: true,
    debugHeaders: true,
    debugColumns: false
  });

  const numItemsForPage = () => {
    const { next_page, page_size, results, page } = dataApi;
    if (next_page !== null) {
      return results?.length * page || 0;
    } else {
      return page_size * (page - 1) + results?.length || 0;
    }
  };

  return (
    <>
      <div
        className={`${classNameFiltros} border-[1px] bg-white-cabecera px-3 gap-2 py-2 pb-3`}
      >
        {children}
      </div>

      <div className='listas'>
        <div className=' overflow-y-auto bg-white-linea'>
          <ListasTable
            classNameTable={classNameTable}
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={dataApi?.count}
            loading={loading}
            rowSelection={rowSelection}
            multiDelete={multiDelete}
            buttonTittle1={buttonTittle1}
            buttonTittle2={buttonTittle2}
            buttonFunction={buttonFunction}
          />
        </div>
      </div>

      <div className='flex items-start justify-end py-2 pb-4'>
        <ListasPagination
          total={dataApi?.count}
          page={page}
          setPage={setPage}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};

export default ListaUsuarios;

ListaUsuarios.propTypes = {
  children: PropTypes.node,
  api: PropTypes.string,
  queryParams: PropTypes.string,
  columnsValue: PropTypes.func,
  classNameTable: PropTypes.string,
  classNameFiltros: PropTypes.string,
  multiDelete: PropTypes.bool,
  buttonTittle1: PropTypes.string,
  buttonTittle2: PropTypes.string,
  buttonFunction: PropTypes.func
};
