import React, { useContext, useEffect, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom'
import { putAxios } from "@/functions/methods";
import { usuarioAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";

const BotonesListaUsuarios = (props) => {

  let { authTokens } = useContext(AuthContext);

  const { id } = props

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const handleClickEditar = () => {
    navigate(`info-user/${id}`)
    navigate(`info-user/${id}`)
  }

  const handleClickEliminar = () => {

    setUsuario({
      ...usuario,
      is_active: false,
    })

    console.log("data2", usuario)

    const url = usuarioAPI + id

    putAxios(url, usuario, headers, setLoading)
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
      />
      <ButtonWithIcon
        text=""
        icon={faTrashCan}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-red-boton-listas hover:bg-red-boton-listas-hover
                w-10 "
        onClick={handleClickEliminar}
      />
    </div>
  );
};

export default BotonesListaUsuarios;
