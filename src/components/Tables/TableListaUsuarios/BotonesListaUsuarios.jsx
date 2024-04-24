import React, { useContext, useEffect, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom'
import { putAxios } from "@/functions/methods";
import { usuarioAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
import ModalAnt from "@/components/Modal/Modal";

const BotonesListaUsuarios = (props) => {

  let { authTokens, logoutUser, user } = useContext(AuthContext);

  const user_id = user.user_id

  const { id, username, password, id_tipo_usuario, setReload, reload } = props

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const url = `${usuarioAPI}${id}/`

  const handleClickEditar = () => {
    navigate(`info-user/${id}`);
  };

  const handleClickEliminar = () => {

    if (user_id === id) {
      alert("Estás tratando de eliminar tu propio usuario")
      // logoutUser()
    } else {
      const data = {
        username: username,
        password: password,
        id_tipo_usuario: id_tipo_usuario,
        is_active: false,
      }

      putAxios(url, data, headers, setReload, reload, setError)
      setDisabled(true)
    }
  };

  const showModal = () => {
    setOpen(true);
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
        onClick={showModal}
        disabled={disabled}
      />
      <ModalAnt setOpen={setOpen} open={open} />
    </div>
  );
};

export default BotonesListaUsuarios;
