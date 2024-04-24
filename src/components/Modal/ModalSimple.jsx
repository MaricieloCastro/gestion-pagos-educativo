import React, { useState } from 'react';
import { Modal } from 'antd';
import "./Modal.scss"

const ModalSimple = (props) => {
    const { isModalOpen, setIsModalOpen } = props

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal className='modal-simple' title="Acción denegada" centered width={360} closeIcon={false} open={isModalOpen} okText="Aceptar" onOk={handleOk} onCancel={handleCancel}>
                <p>No puede eliminar su usuario con la sesión activa</p>
            </Modal>
        </>
    );
};
export default ModalSimple;