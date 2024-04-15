import React from "react";
import MenuLateral from "@/components/MenuLateral";
import { Select, ConfigProvider } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    value: "TODOS",
    label: "TODOS",
  },
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
    disabled: true,
  },
];

const ListaUsuarios = () => {
  return (
    <div className="flex h-screen blue-oscuro overflow-hidden">
      <MenuLateral>
        <div className="h-screen px-caja-contenido grid grid-rows-caja-contenido">
          <div className="bg-white-texto flex justify-between">
            <div className="w-2/3 flex justify-center items-center">
              <div>
                <p className="text-blue-claro font-normal">TIPO:</p>
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: 0,
                      colorBgContainer: "none",
                      colorText: "#D9D9D9",
                      colorBorder: "none",
                    },
                    components: {
                      Select: {
                        colorTextQuaternary: "#D9D9D9",
                        color: "#D9D9D9",
                        multipleItemBg: "red",
                      },
                    },
                  }}
                >
                  <Select
                    defaultValue="TODOS"
                    style={{
                      width: 120,
                      height: 40,
                    }}
                    onChange={handleChange}
                    options={options}
                    className="bg-blue-claro"
                  />
                </ConfigProvider>
              </div>
            </div>
            <div className="bg-pink-600 w-1/3">crearBTN</div>
          </div>
          <div className="bg-white-texto mt-2.5">ay</div>
        </div>
      </MenuLateral>
    </div>
  );
};

export default ListaUsuarios;
