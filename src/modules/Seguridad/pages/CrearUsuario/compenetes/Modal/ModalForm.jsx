import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.scss";

const ModalForm = (props) => {
  const { setOpen, open, confirmLoading, setConfirmLoading, handleGeneral } =
    props;

  const [modalText, setModalText] = useState(
    "Esta acción podría generar cambios dentro del sistema"
  );

  const handleOk = () => {
    setModalText("Eliminando usuario");
    setConfirmLoading(true);
    handleGeneral();
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="GUARDANDO"
        centered
        open={open}
        //onOk={false}
        //confirmLoading={confirmLoading}
        //onCancel={handleCancel}
        okText="Aceptar"
        //cancelText={false}
        width={360}
        closeIcon={false}
      ></Modal>
    </>
  );
};
export default ModalForm;
