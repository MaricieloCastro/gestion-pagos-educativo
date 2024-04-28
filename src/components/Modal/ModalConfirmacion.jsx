import React, { useState } from "react";
import { Modal } from "antd";
import "./Modal.scss";

const ModalConfirmacion = (props) => {
  const { isModalOpen, setIsModalOpen, titulo, subtitulo, func } = props;

  const handleOk = () => {
    setIsModalOpen(false);
    func();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      className="modal-confirmacion"
      title={titulo}
      centered
      width={360}
      closeIcon={false}
      open={isModalOpen}
      okText="Aceptar"
      onOk={handleOk}
      cancelText="Cancelar"
      onCancel={handleCancel}
    >
      <p>{subtitulo}</p>
    </Modal>
  );
};

export default ModalConfirmacion;
