import CallFilter from '@/components/Listas/CallFilter'
import InputFiltros from '@/components/Listas/Filtros/InputFiltros'
import { filterAdapter } from '@/components/Listas/CallFilter/filterAdapter'
import { CONFIGURACION_API } from '@/api/ApiRutas'
import './FiltrosHistorialPago.scss'

export const filtrosHistorialPagos = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  const optionsBeneficio = filterAdapter(`${CONFIGURACION_API}=TIPO_PAGO`)

  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={2}
            title='TIPO PAGO:'
            options={optionsBeneficio}
          />
          {/* <CallFilter headerGroup={headerGroup} num={4} title='FECHA' /> */}
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
  )
}
