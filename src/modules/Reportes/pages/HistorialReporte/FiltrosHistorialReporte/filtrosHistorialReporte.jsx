import CallFilter from '@/components/Listas/CallFilter'
import InputFiltros from '@/components/Listas/Filtros/InputFiltros'
import { filterAdapter } from '@/components/Listas/CallFilter/filterAdapter'
import { gradoAPI, TIPO_REPORTES_API, tipoUsuariosAPI } from '@/api/ApiRutas'

export const filtrosHistorialReporte = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  const optionsTipoUsuarios = filterAdapter(tipoUsuariosAPI)
  const optionsTipoReportes = filterAdapter(TIPO_REPORTES_API)

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
            title='TIPO DE USUARIO:'
            options={optionsTipoUsuarios}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={3}
            title='TIPO DE REPORTE:'
            options={optionsTipoReportes}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={5}
            title='FECHA:'
            options={optionsTipoUsuarios}
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
  )
}
