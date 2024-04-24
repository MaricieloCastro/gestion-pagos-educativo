import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.scss"

const ModalAnt = (props) => {

  const { setOpen, open, confirmLoading, setConfirmLoading, handleGeneral } = props

  const [modalText, setModalText] = useState("Esta acción podría generar cambios dentro del sistema");

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
        title="¿Estás seguro de realizar esta acción?"
        centered
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Aceptar"
        cancelText="Cancelar"
        width={360}
        closeIcon={false}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default ModalAnt;
