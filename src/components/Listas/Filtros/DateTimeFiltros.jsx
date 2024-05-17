import React from 'react';
import { ConfigProvider, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import en from 'antd/es/date-picker/locale/en_US';

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
        },
      }}
    >
      <Space direction="vertical" size="middle">
        <Space.Compact
          size="large"
          className="w-full gap-1 min-w-28"
          direction="vertical"
        >
          <p className="text-sm pl-1">{title}</p>
          <DatePicker
            className="w-full"
            locale={buddhistLocale}
            maxDate={currentDate}
            showTime
            onChange={handleChange}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default DateTimeFiltros;
