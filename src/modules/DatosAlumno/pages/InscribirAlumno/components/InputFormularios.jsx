import PropTypes from 'prop-types'

const InputFormularios = (props) => {
  const { field, fieldState, type, name, placeholder, disabled, style } = props

  return (
    <input
      {...field}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`block w-full py-1.5 px-2 ${
        disabled ? '#A4A4A4' : 'text-gray-900'
      } shadow-sm ring-1 ring-inset h-10 ${
        !fieldState.error
          ? 'ring-gray-300 focus:ring-[#1877F2] border-[2px] border-blue-800 focus:border-0'
          : 'ring-red-500 focus:ring-red-500'
      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:outline-none sm:text-sm sm:leading-6 `}
      disabled={disabled}
      style={style}
    />
  )
}

export default InputFormularios

InputFormularios.propTypes = {
  field: PropTypes.object,
  fieldState: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object
}
