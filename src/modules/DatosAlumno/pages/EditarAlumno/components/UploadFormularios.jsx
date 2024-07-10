import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const UploadFormularios = () => (
    <Upload {...props}>
        <Button size='middle' className='flex justify-center items-center rounded-none h-7 bg-[#8B8787] hover:border-none'>
            <p className='text-xs text-[#27445A]'>Cargar foto</p>
        </Button>
    </Upload>
);
export default UploadFormularios;