import Filter from './Filter'
import PropTypes from 'prop-types'

const CallFilter = (props) => {
  const { headerGroup, num, title, options = [], setTimePicker } = props

  return headerGroup.headers[num].isPlaceholder ? null : (
    <>
      {headerGroup.headers[num].column.getCanFilter() ? (
        <Filter
          column={headerGroup.headers[num].column}
          title={title}
          options={options}
          setTimePicker={setTimePicker}
        />
      ) : null}
    </>
  )
}

export default CallFilter

CallFilter.propTypes = {
  headerGroup: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  setTimePicker: PropTypes.func
}
