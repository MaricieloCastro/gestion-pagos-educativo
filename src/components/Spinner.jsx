import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Flex } from 'antd';
const Spinner = () => (
    <div className='h-full flex flex-col justify-center items-center p-48'>
        <Flex>
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 24,
                        }}
                        className='text-gray-400'
                        spin
                    />
                }
                tip="Loading"
                size="large"
            >
                <div className='w-14 content' />
            </Spin>
        </Flex>
    </div>
);
export default Spinner;