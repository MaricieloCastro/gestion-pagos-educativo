import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.css"; //archivo CSS 

const ModalAnt = (props) => {
  const { setOpen, open } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "SAJDASJDJASDJASDJSDMASJCZJXC ZJXC ZXJC ZJXCZXCMASJCAMJSCASMCAJSCMAJSCMASJC"
  );
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Title"
        centered
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="ACEPTAR"
        cancelText="CANCELAR"
        width={400}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default ModalAnt;
