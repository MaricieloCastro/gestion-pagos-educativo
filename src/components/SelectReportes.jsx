import React, { useState } from "react";
import { ConfigProvider, Select, Space } from "antd";
import { filterAdapter } from "./Listas/CallFilter/filterAdapter";

const SelectReportes = (props) => {
    const { handleChange, options, optionSelected } = props;

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: "none",
                },
                components: {
                    Select: {
                        colorTextQuaternary: "#003862",
                    },
                },
            }}
        >
            <Space direction="vertical" size="middle">
                <Space.Compact
                    size="large"
                    className="w-full gap-1 min-w-48"
                    direction="vertical"
                >
                    <Select
                        className="w-full"
                        defaultValue=""
                        value={optionSelected}
                        onChange={handleChange}
                        options={options}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};

export default SelectReportes;
