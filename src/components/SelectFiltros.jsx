import React from "react";
import { Select, ConfigProvider } from "antd";

const SelectFiltros = (props) => {
  const {
    title,
    classNameTitle,
    options,
    defaultValue,
    bgSelect,
    colorFlecha,
    bgElevated,
    colorText,
    controlItemBgActive,
    controlItemBgHover,
    width,
    height,
  } = props;

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <p className={classNameTitle}>{title}:</p>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
            colorText: `${colorText}`,
            // colorBorder: "none",
          },
          components: {
            Select: {
              colorTextQuaternary: `${colorFlecha}`,
              colorTextPlaceholder: "#B5B5B5",
              colorBgContainer: `${bgSelect}`,
              colorBgElevated: `${bgElevated}`,
              controlItemBgActive: `${controlItemBgActive}`,
              controlItemBgHover: `${controlItemBgHover}`,
              colorBorder: "#003862",
            },
          },
        }}
      >
        <Select
          defaultValue={defaultValue}
          style={{
            width: width,
            height: height,
          }}
          onChange={handleChange}
          options={options}
        />
      </ConfigProvider>
    </div>
  );
};

export default SelectFiltros;
