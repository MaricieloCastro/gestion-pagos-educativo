import React, { useState } from 'react';
import { Modal } from 'antd';
import "./Modal.scss"

const ModalError = (props) => {
    const { isModalOpen, setIsModalOpen, titulo, subtitulo } = props

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal className='modal-error' title={titulo} centered width={360} closeIcon={false} open={isModalOpen} cancelText="Aceptar" onOk={handleOk} onCancel={handleCancel}>
                <p>{subtitulo}</p>
            </Modal>
        </>
    );
};
export default ModalError;