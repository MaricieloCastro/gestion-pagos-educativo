import React from 'react';
import { ConfigProvider, Select, Space } from 'antd';

const SelectPrueba = (props) => {

    const { handleChange, columnFilterValue, title, options } = props;

    return (
        <ConfigProvider theme={{
            token: {
                borderRadius: "none"
            }
        }}>
            <Space direction="vertical" size="middle">
                <Space.Compact size="large" className='w-full gap-1 min-w-28' direction='vertical'>
                    <p className='text-sm pl-1'>{title}</p>
                    <Select
                        className='w-full'
                        defaultValue=''
                        onChange={handleChange}
                        value={columnFilterValue}
                        options={options}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    )
}

export default SelectPrueba