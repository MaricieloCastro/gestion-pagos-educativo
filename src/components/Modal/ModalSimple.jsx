import React, { useState } from 'react';
import { Modal } from 'antd';
import "./Modal.scss"

const ModalSimple = (props) => {
    const { isModalOpen, setIsModalOpen, titulo, subtitulo } = props

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal className='modal-simple' title={titulo} centered width={360} closeIcon={false} open={isModalOpen} okText="Aceptar" onOk={handleOk} onCancel={handleCancel}>
                <p>{subtitulo}</p>
            </Modal>
        </>
    );
};
export default ModalSimple;