import React, { useEffect } from "react";
import { useController } from "react-hook-form";
import { Select, ConfigProvider, Space } from "antd";
import { departamentos } from "../Forms/data/DatosEstudianteData";

const { Option } = Select;

const DepartamentosSelect = ({ control }) => {
  const { field: departamentoField } = useController({
    name: "departamento",
    control,
  });

  const { field: provinciaField } = useController({
    name: "provincia",
    control,
  });

  const { field: distritoField } = useController({ name: "distrito", control });

  useEffect(() => {
    // Reset provincia and distrito when departamento changes
    provinciaField.onChange("");
    distritoField.onChange("");
  }, [departamentoField.value]);

  useEffect(() => {
    // Reset distrito when provincia changes
    distritoField.onChange("");
  }, [provinciaField.value]);

  // Helper functions to get selected objects
  const getSelectedDepartamento = () => {
    return departamentos.find((dept) => dept.id === departamentoField.value);
  };

  const getSelectedProvincia = () => {
    const selectedDepartamento = getSelectedDepartamento();
    return selectedDepartamento
      ? selectedDepartamento.provincias.find(
          (prov) => prov.id === provinciaField.value
        )
      : null;
  };

  const selectedDepartamento = getSelectedDepartamento();
  const selectedProvincia = getSelectedProvincia();

  return (
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
      <Space direction="vertical" size="middle" className="w-full">
        <Space.Compact size="large" className="w-full" direction="vertical">
          <label
            htmlFor="departamento"
            className="block text-sm font-normal leading-6 text-white"
          >
            Departamento:
          </label>
          <Select
            {...departamentoField}
            className="w-full"
            id="departamento"
            placeholder="Seleccione el departamento"
          >
            {departamentos.map((dept) => (
              <Option key={dept.id} value={dept.id}>
                {dept.name}
              </Option>
            ))}
          </Select>
        </Space.Compact>
        <Space.Compact size="large" className="w-full" direction="vertical">
          <label
            htmlFor="departamento"
            className="block text-sm font-normal leading-6 text-white"
          >
            Provincia:
          </label>
          <Select
            {...provinciaField}
            className="w-full"
            id="provincia"
            placeholder="Seleccione la provincia"
          >
            {selectedDepartamento &&
              selectedDepartamento.provincias.map((prov) => (
                <Option key={prov.id} value={prov.id}>
                  {prov.name}
                </Option>
              ))}
          </Select>
        </Space.Compact>
        <Space.Compact size="large" className="w-full" direction="vertical">
          <label
            htmlFor="departamento"
            className="block text-sm font-normal leading-6 text-white"
          >
            Distrito:
          </label>
          <Select
            {...distritoField}
            className="w-full"
            id="distrito"
            placeholder="Seleccione el distrito"
          >
            {selectedProvincia &&
              selectedProvincia.distritos.map((dist) => (
                <Option key={dist.id} value={dist.id}>
                  {dist.name}
                </Option>
              ))}
          </Select>
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};

export default DepartamentosSelect;
