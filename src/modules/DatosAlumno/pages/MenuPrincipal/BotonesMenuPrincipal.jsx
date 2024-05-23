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
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BotonesMenuPrincipal = (props) => {
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
        text="EDITAR"
        icon={faPenToSquare}
        classNameIcon="w-4 pr-1"
        classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
        onClick={handleClickEditar}
        disabled={false}
      />
      <ButtonWithIcon
        text="HP"
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-[#4776A0] hover:bg-blue-boton-hover
                w-10"
        // onClick={handleConfirmacion}
        disabled={false}
      />
      <Link to={matricula}>
        <ButtonWithIcon
          text="MA"
          classNameIcon="w-4"
          classNameVariants="rounded-sm
                bg-[#344A5F] hover:bg-blue-boton-hover
                w-10"
          // onClick={handleConfirmacion}
          disabled={false}
        />
      </Link>
      <ButtonWithIcon
        text="ME"
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-[#344A5F] hover:bg-blue-boton-hover
                w-10"
        // onClick={handleConfirmacion}
        disabled={false}
      />
      <ButtonWithIcon
        text="CD"
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-[#344A5F]  hover:bg-blue-boton-hover
                w-10"
        // onClick={handleConfirmacion}
        disabled={false}
      />

      <ButtonWithIcon
        text=""
        icon={faTrashCan}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-red-boton hover:bg-red-boton-hover
                w-10"
        onClick={handleConfirmacion}
        disabled={false}
      />

      <ModalConfirmacion
        titulo={
          id_tipo_usuario == 1
            ? "¿Estás seguro de eliminar a este estudiante?"
            : "¿Estás seguro de solicitar la eliminación del estudiante?"
        }
        subtitulo="Esta acción podria generar cambios en el sistema"
        isModalOpen={
          id_tipo_usuario == 1
            ? isModalOpenEliminar
            : isModalOpenEnviarSolicitud
        }
        setIsModalOpen={
          id_tipo_usuario == 1
            ? setIsModalOpenEliminar
            : setIsModalOpenEnviarSolicitud
        }
        func={id_tipo_usuario == 1 ? handleEliminar : handleEnviarSolicitud}
      />

      <ModalCarga
        modalLoading={modalLoading}
        titulo={
          id_tipo_usuario == 1 ? "Eliminando estudiante" : "Enviando solicitud"
        }
      />

      <ModalSucess
        titulo={
          id_tipo_usuario == 1
            ? "¡Estudiante eliminado exitosamente!"
            : "¡Solicitud enviada exitosamente!"
        }
        subtitulo=""
        modalSucessfull={modalSucessfull}
        setModalSucessfull={setModalSucessfull}
        reload={reload}
        setReload={setReload}
      />
      <ModalError
        titulo="Ups ¡Ha ocurrido un error inesperado!"
        subtitulo="Verifique su conexión a internet y vuelva a intentar la acción en unos minutos"
        modalFailed={modalFailed}
        setModalFailed={setModalFailed}
      />

      <ModalError
        titulo="No puedes eliminar a un estudiante con deudas pendientes"
        subtitulo=""
        modalFailed={isModalOpenDeuda}
        setModalFailed={setIsModalOpenDeuda}
      />
    </div>
  );
};

export default BotonesMenuPrincipal;
