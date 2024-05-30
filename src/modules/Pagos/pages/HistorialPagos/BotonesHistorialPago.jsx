import React, { useContext, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { patchModal } from "@/functions/methods";
import { estudiantesAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
import ListasContext from "@/contexts/ListasContext";
import { Link } from "react-router-dom";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";
import { faPenToSquare, faTrashCan, faUpload } from "@fortawesome/free-solid-svg-icons";

const BotonesHistorialPago = (props) => {
  let { authTokens, user } = useContext(AuthContext);
  let { reload, setReload } = useContext(ListasContext);

  const { id, estado_deuda } = props;

  // MODAL SIMPLE
  const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
  const [isModalOpenEnviarSolicitud, setIsModalOpenEnviarSolicitud] =
    useState(false);
  const [isModalOpenDeuda, setIsModalOpenDeuda] = useState(false);

  // CARGAS
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const id_tipo_usuario = user.id_tipo_usuario;

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const url = `${estudiantesAPI}${id}/`;

  const handleClickEditar = () => {
    navigate(`info-user/${id}`);
  };

  const dataEliminar = {
    eliminacion_pendiente: false,
    estado: false,
  };

  const dataEnviarSolicitud = {
    eliminacion_pendiente: true,
    estado: true,
  };

  const handleConfirmacion = () => {
    if (estado_deuda == false) {
      setIsModalOpenDeuda(true);
    } else {
      if (id_tipo_usuario === 1) {
        setIsModalOpenEliminar(true);
      } else {
        setIsModalOpenEnviarSolicitud(true);
      }
    }
  };

  const handleEliminar = () => {
    patchModal(
      url,
      dataEliminar,
      headers,
      setModalLoading,
      setModalSucessfull,
      setModalFailed
    );
  };

  const handleEnviarSolicitud = () => {
    patchModal(
      url,
      dataEnviarSolicitud,
      headers,
      setModalLoading,
      setModalSucessfull,
      setModalFailed
    );
  };

  const matricula = `http://localhost:5173/pagos/${id}/1`;
  const mensualidad = `http://localhost:5173/pagos/${id}/2`;
  const cursoDesaprobado = `http://localhost:5173/pagos/${id}/3`;

  return (
    <div className="flex gap-2 justify-center items-center ">
      <ButtonWithIcon
        text=""
        icon={faUpload}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-green-boton hover:bg-green-boton-hover
                w-10"
        onClick={handleConfirmacion}
        disabled={false}
      />
    </div>
  );
};

export default BotonesHistorialPago;
