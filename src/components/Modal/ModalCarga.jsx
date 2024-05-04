import React, { useState } from 'react';
import { Modal, Spin } from 'antd';
import "./Modal.scss"

const ModalCarga = (props) => {
    const { modalLoading, titulo } = props

    return (
        <>
            <Modal className='modal-carga' closable={false} footer={false} title={titulo} centered width={360} closeIcon={false} open={modalLoading}>
                <Spin />
            </Modal>
        </>
    );
}

export default ModalCarga