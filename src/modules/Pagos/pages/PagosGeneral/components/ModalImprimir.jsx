import React, { useState, useContext } from "react";
import { Button, Modal, Spin } from "antd";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalImprimir.scss";
import axios from "axios";
import AuthContext from "@/contexts/AuthContext";

const ModalImprimir = (props) => {
  const { modalPrint, titulo, id, urlBoleta, setModalPrint } = props;
  let { authTokens } = useContext(AuthContext);
  const ESTADOPAGO = "http://127.0.0.1:8000/pagos/api/estado-deuda";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  console.log(id);
  const ImprimirBoleta = async () => {
    setModalPrint(false);
    try {
      window.open(urlBoleta, "_blank");
      const EstadoDeuda = await axios.post(ESTADOPAGO, { id: id }, headers);
      window.location.href = "http://localhost:5173/lista-alumnos/";
      console.log("operacion exitosa:", EstadoDeuda.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };
  return (
    <Modal
      className="modal-boleta"
      closable={false}
      footer={false}
      title={titulo}
      centered
      width={360}
      closeIcon={false}
      open={modalPrint}
    >
      <Button onClick={ImprimirBoleta}>
        <FontAwesomeIcon icon={faPrint} />
        Imprimir
      </Button>
    </Modal>
  );
};

export default ModalImprimir;
