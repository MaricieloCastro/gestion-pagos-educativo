import React from "react";
import { ConfigProvider, Space, TimePicker } from "antd";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const HourFiltros = (props) => {
  const { label, placeholder } = props;

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
        <TimePicker
          className="rounded-none w-date-listas h-height-listas bg-none text-blue-claro border-blue-claro hover:bg-none hover:border-blue-hover"
          placeholder={placeholder}
          suffixIcon={
            <FontAwesomeIcon className="text-blue-claro" icon={faClock} />
          }
        />
      </ConfigProvider>
    </Space>
  );
};
export default HourFiltros;
