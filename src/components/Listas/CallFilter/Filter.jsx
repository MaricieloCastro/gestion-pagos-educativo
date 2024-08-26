import DateTimeFiltros from '../Filtros/DateTimeFiltros'
import SelectFiltros from '../Filtros/SelectFiltros'
import PropTypes from 'prop-types'

const Filter = ({ column, title, options, setTimePicker }) => {
  const columnFilterValue = column.getFilterValue()
  const { filterVariant } = column.columnDef.meta ?? {}

  const handleChangeSelect = (value) => {
    column.setFilterValue(value)
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

Filter.propTypes = {
  column: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  setTimePicker: PropTypes.func
}
