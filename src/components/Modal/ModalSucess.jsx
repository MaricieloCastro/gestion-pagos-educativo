import React, { useState } from 'react';
import { Modal } from 'antd';

import "./Modal.scss"

const ModalSucess = (props) => {
    const { modalSucessfull, setModalSucessfull, reload, setReload, titulo, subtitulo } = props

    const handleOk = () => {
        setModalSucessfull(false);
        setReload(!reload)
    };

    return (
        <>
            <Modal closable={false} className='modal-sucess' title={titulo} centered width={360} closeIcon={false} open={modalSucessfull} okText="Aceptar" onOk={handleOk}>
                <p>{subtitulo}</p>
            </Modal>
        </>
    );
}

export default ModalSucess