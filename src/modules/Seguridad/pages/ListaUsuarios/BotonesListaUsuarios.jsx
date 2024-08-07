import React, { useContext, useEffect, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { patchModal } from "@/functions/methods";
import { usuarioAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";

import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";

const BotonesListaUsuarios = (props) => {
  let { authTokens } = useContext(AuthContext);

  const { id, id_tipo_usuario, setReload, reload } = props;

  // MODAL SIMPLE
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CARGAS
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const url = `${usuarioAPI}${id}/`;

  const handleClickEditar = () => {
    navigate(`info-user/${id}`);
  };

  const data = {
    is_active: false,
  };

  const handleConfirmacion = () => {
    setIsModalOpen(true);
  };

  const handleEliminar = () => {
    if (id_tipo_usuario != 1) {
      patchModal(
        url,
        data,
        headers,
        setModalLoading,
        setModalSucessfull,
        setModalFailed
      );
    } else {
      setModalFailed(true);
    }
  };

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
        text=""
        icon={faTrashCan}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-red-boton-listas hover:bg-red-boton-listas-hover
                w-10"
        onClick={handleConfirmacion}
        disabled={false}
      />

      <ModalConfirmacion
        titulo="¿Estás seguro de realizar esta acción?"
        subtitulo="Esta acción podria generar cambios en el sistema"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={handleEliminar}
      />
      <ModalCarga modalLoading={modalLoading} titulo="Cargando" />
      <ModalSucess
        titulo="¡Usuario eliminado exitosamente!"
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

      {id_tipo_usuario === 1 && (
        <ModalError
          titulo="No puedes eliminar a un administrador"
          subtitulo="Esta acción está restringida por motivos de seguridad"
          modalFailed={modalFailed}
          setModalFailed={setModalFailed}
        />
      )}
    </div>
  );
};

export default BotonesListaUsuarios;
