import { ConfigProvider, Select, Space } from "antd";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { departamentos } from "@/api/Departamentos";

const DepartamentosSelect = (props) => {
  const { control } = props;
  const [departamentoValue, setDepartamentoValue] = useState(null);
  const [departamenteDefaultActive, setDepartamenteDefaultActive] =
    useState(true);
  const [provinciaValue, setProvinciaValue] = useState(null);
  const [provinciaDefaultActive, setProvinciaDefaultActive] = useState(true);
  const [provincias, setProvincias] = useState({});
  const [distritoValue, setDistritoValue] = useState(null);
  const [distritoDefaultActive, setDistritoDefaultActive] = useState(true);
  const [distritos, setDistritos] = useState({});

  console.log("AAAAAA: ", departamentos);

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="departamento"
            className="block text-sm font-normal leading-6 text-white"
          >
            Departamento:
          </label>
        </div>
        <div className="mt-1">
          <Controller
            control={control}
            name="departamento"
            render={({ field, fieldState }) => (
              <div>
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: "none",
                    },
                    components: {
                      Select: {
                        colorTextQuaternary: "#B9B9B9",
                        colorTextPlaceholder: "#B9B9B9",
                        colorText: "black",
                        colorBgElevated: "white",
                        controlItemBgActive: "#CACACA",
                        controlItemBgHover: "#EBEBEB",
                        colorBorder: "#003862",
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
                      className="w-full"
                      direction="vertical"
                    >
                      <Select
                        {...field}
                        className="w-full"
                        placeholder="Seleccione un departamento"
                        id="departamento"
                        options={departamentos}
                        disabled={false}
                        value={
                          departamenteDefaultActive
                            ? field.value
                            : departamentoValue
                        }
                        onChange={(value, object) => {
                          setDepartamenteDefaultActive(false);
                          setProvinciaDefaultActive(false);
                          setDistritoDefaultActive(false);
                          setDepartamentoValue(value);
                          setProvinciaValue(null);
                          setDistritoValue(null);
                          setProvincias(object.provincia);
                          field.onChange(value);
                          console.log("run");
                        }}
                      />
                    </Space.Compact>
                  </Space>
                </ConfigProvider>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="provincia"
            className="block text-sm font-normal leading-6 text-white"
          >
            Provincia:
          </label>
        </div>
        <div className="mt-1">
          <Controller
            control={control}
            name="provincia"
            render={({ field, fieldState }) => (
              <div>
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: "none",
                    },
                    components: {
                      Select: {
                        colorTextQuaternary: "#B9B9B9",
                        colorTextPlaceholder: "#B9B9B9",
                        colorText: "black",
                        colorBgElevated: "white",
                        controlItemBgActive: "#CACACA",
                        controlItemBgHover: "#EBEBEB",
                        colorBorder: "#003862",
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
                      className="w-full"
                      direction="vertical"
                    >
                      <Select
                        {...field}
                        className="w-full"
                        placeholder="Seleccione una provincia"
                        id="provincia"
                        options={provincias}
                        disabled={false}
                        value={
                          provinciaDefaultActive ? field.value : provinciaValue
                        }
                        onChange={(value, object) => {
                          setProvinciaDefaultActive(false);
                          setDistritoDefaultActive(false);
                          setProvinciaValue(value);
                          setDistritoValue(null);
                          setDistritos(object.distrito);
                          field.onChange(value);
                        }}
                      />
                    </Space.Compact>
                  </Space>
                </ConfigProvider>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="distrito"
            className="block text-sm font-normal leading-6 text-white"
          >
            Distrito:
          </label>
        </div>
        <div className="mt-1">
          <Controller
            control={control}
            name="distrito"
            render={({ field, fieldState }) => (
              <div>
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: "none",
                    },
                    components: {
                      Select: {
                        colorTextQuaternary: "#B9B9B9",
                        colorTextPlaceholder: "#B9B9B9",
                        colorText: "black",
                        colorBgElevated: "white",
                        controlItemBgActive: "#CACACA",
                        controlItemBgHover: "#EBEBEB",
                        colorBorder: "#003862",
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
                      className="w-full"
                      direction="vertical"
                    >
                      <Select
                        {...field}
                        className="w-full"
                        placeholder="Seleccione un distrito"
                        id="distrito"
                        options={distritos}
                        disabled={false}
                        value={
                          distritoDefaultActive ? field.value : distritoValue
                        }
                        onChange={(value, object) => {
                          setDistritoDefaultActive(false);
                          setDistritoValue(value);
                          field.onChange(value);
                        }}
                      />
                    </Space.Compact>
                  </Space>
                </ConfigProvider>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DepartamentosSelect;
