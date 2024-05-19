import React from 'react';
import { ConfigProvider, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import en from 'antd/es/date-picker/locale/en_US';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

dayjs.extend(buddhistEra);

const buddhistLocale = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: 'MM/DD/YYYY',
    fieldDateTimeFormat: 'MM/DD/YYYY H',
    yearFormat: 'YYYY',
    cellYearFormat: 'YYYY',
  },
};

const currentDate = dayjs();

const DateTimeFiltros = (props) => {
  const { title, handleChange, columnFilterValue } = props;

  // const onChange = (_, dateStr) => {
  //   console.log('onChange:', dateStr);
  // };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
          colorText: "#004F82",
          colorTextPlaceholder: "#003862",
        },
        components: {
          DatePicker: {
            colorBgContainer: "none",
          }
        }
      }}
    >
      <Space direction="vertical" size="middle">
        <Space.Compact
          size="large"
          className="w-full gap-1 min-w-36"
          direction="vertical"
        >
          <p className="font-inter text-blue-claro text-sm pl-1">{title}</p>
          <DatePicker
            className="w-full border-1 border-blue-claro"
            locale={buddhistLocale}
            maxDate={currentDate}
            showTime
            placeholder=''
            onChange={handleChange}
            suffixIcon={<FontAwesomeIcon className='text-blue-claro' icon={faCalendar} />}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default DateTimeFiltros;
