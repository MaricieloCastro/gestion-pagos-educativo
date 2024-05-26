import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const ButtonAnt = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: '4px',
                    colorBorder: 'none'
                },
                components: {
                    Button: {
                        colorBorderBg: 'red',
                    }
                }
            }}
        >
            <Space direction="vertical" size="large">
                <Space.Compact size="large" className="w-full min-w-28">
                    <Button className='w-full text-sm font-inter text-white bg-green-boton hover:border-none hover:text-white' icon={<FontAwesomeIcon icon={faPlus} className='text-xs' />} iconposition='start'>
                        CREAR USUARIO
                    </Button>
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};
export default ButtonAnt;