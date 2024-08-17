import DateTimeFiltros from '../Filtros/DateTimeFiltros'
import SelectFiltros from '../Filtros/SelectFiltros'

const Filter = ({ column, title, options, setTimePicker }) => {
  const columnFilterValue = column.getFilterValue()
  const { filterVariant } = column.columnDef.meta ?? {}

  const handleChangeSelect = (value) => {
    column.setFilterValue(value)
    console.log(value)
  }

  const handleChangeDateTime = (_, dateStr) => {
    column.setFilterValue(dateStr)
    setTimePicker(dateStr)
  }

  return filterVariant == 'dateTime' ? (
    <DateTimeFiltros
      handleChange={handleChangeDateTime}
      columnFilterValue={columnFilterValue?.toString()}
      title={title}
    />
  ) : (
    <SelectFiltros
      handleChange={handleChangeSelect}
      columnFilterValue={columnFilterValue?.toString()}
      title={title}
      options={options}
    />
  )
}

export default Filter
