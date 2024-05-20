import React from 'react';
import { ConfigProvider, Select, Space } from 'antd';

const SelectPrueba = (props) => {

    const { handleChange, columnFilterValue, title, options } = props;

    console.log(columnFilterValue)

    return (
        <ConfigProvider theme={{
            token: {
                borderRadius: "none",
                colorText: "#D9D9D9",
            },
            components: {
                Select: {
                    colorTextQuaternary: '#D9D9D9',
                    colorTextPlaceholder: "#B5B5B5",
                    colorBgContainer: "#003862",
                    colorBgElevated: "#003768",
                    controlItemBgActive: "#004988",
                    controlItemBgHover: "#002A50",
                    colorBorder: "#003862",
                },
            },
        }}>
            <Space direction="vertical" size="middle">
                <Space.Compact size="large" className='w-full gap-1 min-w-36' direction='vertical'>
                    <p className='font-inter text-blue-950 text-sm pl-1'>{title}</p>
                    <Select
                        className='w-full'
                        defaultValue=''
                        onChange={handleChange}
                        value={columnFilterValue === undefined ? "TODOS" : columnFilterValue}
                        options={options}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    )
}

export default SelectPrueba