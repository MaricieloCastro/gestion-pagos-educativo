import React, { useState } from "react";
import { Modal } from "antd";
import "./Modal.scss";

const ModalError = (props) => {
  const { modalFailed, setModalFailed, titulo, subtitulo } = props;

  const handleCancel = () => {
    setModalFailed(false);
  };

  return (
    <Modal
      className="modal-error"
      title={titulo}
      centered
      width={360}
      closeIcon={false}
      open={modalFailed}
      cancelText="Aceptar"
      onCancel={handleCancel}
    >
      <p>{subtitulo}</p>
    </Modal>
  );
};
export default ModalError;
