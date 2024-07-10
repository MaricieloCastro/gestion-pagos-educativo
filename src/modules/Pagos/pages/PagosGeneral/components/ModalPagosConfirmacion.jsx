import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./ModalPagosConfirmacion.scss";
import yape from "../../../../../assets/img/yape.png";
import plin from "../../../../../assets/img/plin.png";
const ModalPagosConfirmacion = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    func,
    funcII,
    setModalLoading,
    form,
    modalPrint,
  } = props;

  const showModal = async () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    setModalLoading(true);
    await func();
    setModalLoading(false);
    modalPrint(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        className="ModalPagos"
        title="Confirmar el Pago"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Aceptar"
        cancelText="Cancelar"
      >
        <div className="pago">
          <div className="pago-url">
            <div>
              <label>YAPE:</label>
              <img src={yape}></img>
            </div>
            <div>
              <label>PLIN:</label>
              <img src={plin}></img>
            </div>
          </div>
          <div className="pago-cuentas">
            <div className="pago-cuentas_uno">
              <label>BCP:</label>
              <label>INTERBANK:</label>
            </div>
            <div className="pago-cuentas_dos">
              <p>55093812977015</p>
              <p>00255019381297701522</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPagosConfirmacion;
