import React from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom'

const BotonesListaUsuarios = (props) => {

  const { id, dni } = props

  console.log(id, dni)

  const navigate = useNavigate()

  const handleClickEditar = () => {
    navigate(`info-user/${dni}`)
  }

  const handleClickEliminar = () => {
    alert("ELIMINAR")
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
