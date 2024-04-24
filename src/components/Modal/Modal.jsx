import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalAnt = (props) => {

    const { setOpen, open, confirmLoading, setConfirmLoading, handleGeneral } = props

    const [modalText, setModalText] = useState('Este es el texto');

    const handleOk = () => {
        setModalText('Eliminando usuario');
        setConfirmLoading(true);
        handleGeneral();
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Modal
                title="Title"
                centered
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="ACEPTAR"
                cancelText="CANCELAR"
            // width={450}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};
export default ModalAnt;