import React, { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const currentDate = dayjs();

const DateWithYearsFormularios = (props) => {
  const { field, fieldState, name, placeholder, disabled, defaultDate } = props;

  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(defaultDate);
  }, [defaultDate]);

  console.log("field", field);

  const yearsOld = currentDate.diff(dayjs(value), "year");

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: "none",
          colorText: "#004F82",
          colorTextPlaceholder: "#959596",
        },
        components: {
          DatePicker: {
            colorBorder: "none",
          },
        },
      }}
    >
      <Space
        direction="vertical"
        size="middle"
        className={`w-full ${
          !fieldState.error
            ? "ring-1 ring-[#1877F2] focus:ring-[#1877F2]"
            : "ring-1 ring-red-500 focus:ring-red-500"
        }`}
      >
        <Space.Compact
          size="large"
          className="grid grid-cols-2 w-full"
          direction="horizontal"
        >
          <DatePicker
            {...field}
            suffixIcon={
              <FontAwesomeIcon className="text-blue-claro" icon={faCalendar} />
            }
            format="YYYY-MM-DD"
            placeholder={placeholder}
            name={name}
            id={name}
            value={field.value && dayjs(field.value)}
            onChange={(date, dateStr) => {
              console.log("date: ", date);
              setValue(dateStr);
              field.onChange(dateStr);
            }}
            disabled={disabled}
            maxDate={currentDate.subtract(11, "year")}
          />
          <div className="flex justify-center items-center text-[#A1A1A1] bg-white">
            {yearsOld === 0 ? "..." : yearsOld + " años"}
          </div>
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default DateWithYearsFormularios;
