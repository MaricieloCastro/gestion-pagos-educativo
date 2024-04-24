import React, { useContext, useEffect, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom'
import { putAxios } from "@/functions/methods";
import { usuarioAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalSimple from "@/components/Modal/ModalSimple";

const BotonesListaUsuarios = (props) => {

  let { authTokens, logoutUser, user } = useContext(AuthContext);

  const user_id = user.user_id

  const { id, username, password, id_tipo_usuario, setReload, reload } = props

  // MODAL DE CONFIRMACIÓN
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // MODAL SIMPLE
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const navigate = useNavigate()

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const url = `${usuarioAPI}${id}/`

  const handleClickEditar = () => {
    navigate(`info-user/${id}`);
  };

  const data = {
    username: username,
    password: password,
    id_tipo_usuario: id_tipo_usuario,
    is_active: false,
  }

  const handleClickEliminar = () => {
    putAxios(url, data, headers, setReload, reload, setError)
    setDisabled(true)
  };

  const handleClickModal = () => {
    if (user_id === id) {
      setIsModalOpen(true);
    } else {
      setOpen(true);
    }
  }

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
        onClick={handleClickModal}
        disabled={disabled}
      />
      <ModalConfirmacion setOpen={setOpen} open={open} handleGeneral={handleClickEliminar} confirmLoading={confirmLoading} setConfirmLoading={setConfirmLoading} />
      <ModalSimple isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default BotonesListaUsuarios;
