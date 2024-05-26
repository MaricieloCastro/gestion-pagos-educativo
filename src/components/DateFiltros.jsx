import React from "react";
import { DatePicker, Space, ConfigProvider } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const DateFiltros = (props) => {
  const { label, placeholder } = props

  /** Manually entering any of the following formats will perform date parsing */
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const currentDate = dayjs();

  return (
    <Space direction="vertical" size={0}>
      <p className="text-blue-claro font-normal">{label}:</p>
      <ConfigProvider
        theme={{
          token: {
            colorTextPlaceholder: "#003862",
            colorBgContainer: "none",
          },
        }}
      >
        <DatePicker
          // defaultValue={dayjs("01/01/2015", dateFormatList[0])}
          format={dateFormatList[0]}
          className="rounded-none w-full min-w-36 h-height-listas bg-none text-blue-claro border-blue-claro hover:bg-none hover:border-blue-hover"
          placeholder={placeholder}
          suffixIcon={
            <FontAwesomeIcon
              className="text-blue-claro"
              icon={faCalendarDays}
            />
          }
          maxDate={currentDate}
        />
      </ConfigProvider>
    </Space>
  );
};

export default DateFiltros;
