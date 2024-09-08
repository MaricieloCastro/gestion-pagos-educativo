import { ConfigProvider, DatePicker, Space } from 'antd'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'

const currentDate = dayjs()

const DateFormularios = (props) => {
  const { field, fieldState, name, placeholder, disabled } = props

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
          colorText: '#004F82',
          colorTextPlaceholder: '#959596'
        },
        components: {
          DatePicker: {
            colorBorder: 'none'
          }
        }
      }}
    >
      <Space
        direction='vertical'
        size='middle'
        className={`w-full ${
          !fieldState.error
            ? 'ring-1 ring-[#1877F2] focus:ring-[#1877F2]'
            : 'ring-1 ring-red-500 focus:ring-red-500'
        }`}
      >
        <Space.Compact
          size='large'
          className='w-full gap-1'
          direction='vertical'
        >
          <DatePicker
            {...field}
            suffixIcon={
              <FontAwesomeIcon className='text-blue-claro' icon={faCalendar} />
            }
            format='YYYY-MM-DD'
            placeholder={placeholder}
            name={name}
            id={name}
            defaultValue={''}
            value={field.value && dayjs(field.value)}
            onChange={(date, dateStr) => {
              field.onChange(dateStr)
            }}
            disabled={disabled}
            maxDate={currentDate}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  )
}
export default DateFormularios

DateFormularios.propTypes = {
  field: PropTypes.object,
  fieldState: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  defaultDate: PropTypes.string
}
