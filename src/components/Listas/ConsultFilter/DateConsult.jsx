import { ConfigProvider, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import es from 'antd/es/date-picker/locale/es_ES';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

dayjs.extend(buddhistEra);

const buddhistLocale = {
  ...es,
  lang: {
    ...es.lang,
    fieldDateFormat: 'DD/MM/YYYY',
    fieldDateTimeFormat: 'DD/MM/YYYY',
    yearFormat: 'YYYY',
    cellYearFormat: 'YYYY'
  }
};

const currentDate = dayjs();

const DateConsult = (props) => {
  const { title, handleChange } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
          colorText: '#004F82',
          colorTextPlaceholder: '#003862'
        },
        components: {
          DatePicker: {
            colorBgContainer: 'none'
          }
        }
      }}
    >
      <Space direction='vertical' size='middle'>
        <Space.Compact
          size='large'
          className='w-full gap-1 min-w-36'
          direction='vertical'
        >
          <p className='font-inter text-blue-claro text-sm pl-1'>{title}</p>
          <DatePicker
            className='w-full border-1 border-blue-claro'
            locale={buddhistLocale}
            maxDate={currentDate}
            placeholder=''
            onChange={handleChange}
            suffixIcon={
              <FontAwesomeIcon className='text-blue-claro' icon={faCalendar} />
            }
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default DateConsult;

DateConsult.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  columnFilterValue: PropTypes.string
};
