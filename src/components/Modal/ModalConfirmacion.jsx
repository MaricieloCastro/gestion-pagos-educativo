import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.scss"
import ModalError from "./ModalError";

const ModalConfirmacion = (props) => {

  const { setOpen, open, confirmLoading, setConfirmLoading, handleGeneral, error } = props

  const [modalText, setModalText] = useState("Esta acción podría generar cambios dentro del sistema");

  const handleOk = () => {
    setConfirmLoading(true)
    setModalText('Eliminando usuario');
    handleGeneral();
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {error == 400 ? (
        <ModalError titulo="Error" subtitulo="Soy un subtitulo" isModalOpen={open} setIsModalOpen={setOpen} />
      ) : (
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
      )}
    </>
  );
};
export default ModalConfirmacion;
