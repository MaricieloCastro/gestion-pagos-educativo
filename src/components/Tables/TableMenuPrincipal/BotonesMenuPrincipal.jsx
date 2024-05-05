import React, { useContext, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { putAxios, putAxiosPrueba } from "@/functions/methods";
import { alumnosApi } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
//Paa pagos
import { Link } from "react-router-dom";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";
import FormPagos from "@/modules/Pagos/pages/PagosGeneral/components/FormPagos";
import {
  faArrowsRotate,
  faCheck,
  faPenToSquare,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const BotonesMenuPrincipal = (props) => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  const { id, id_beneficio, setReload, reload, dato } = props;

  // MODAL SIMPLE
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CARGAS
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };

  const url = `${alumnosApi}${id}/`;

  const handleClickEditar = () => {
    navigate(`info-user/${id}`);
  };
  const data = {
    id_beneficio: id_beneficio,
    estado: true,
  };

  const handleConfirmacion = () => {
    setIsModalOpen(true);
  };

  const handleEliminar = () => {
    putAxiosPrueba(
      url,
      data,
      headers,
      setModalLoading,
      setModalSucessfull,
      setModalFailed
    );
  };
  const mensualidad = 1;
  const curso = 2;
  const matricula = 3;

  return (
    <div className="flex gap-2 justify-center items-center ">
      <ButtonWithIcon
        text="EDITAR"
        icon={faPenToSquare}
        classNameIcon="w-4 pr-1"
        classNameVariants="rounded-sm
                p-4 bg-green-boton hover:bg-green-boton-hover"
        onClick={""}
        disabled={false}
      />
      <ButtonWithIcon
        text="HP"
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-[#4776A0] hover:bg-blue-boton-hover
                w-10"
        disabled={false}
      />
      <Link to={`http://localhost:5173/pagos/${id}/${matricula}`}>
        <ButtonWithIcon
          text="MA"
          classNameIcon="w-4"
          classNameVariants="rounded-sm
                bg-[#344A5F] hover:bg-blue-boton-hover
                w-10"
          disabled={false}
          pago={1}
        />
      </Link>
      <Link to={`http://localhost:5173/pagos/${id}/${mensualidad}`}>
        <ButtonWithIcon
          text="ME"
          classNameIcon="w-4"
          classNameVariants="rounded-sm
                bg-[#344A5F] hover:bg-blue-boton-hover
                w-10"
          //onClick={() => setPago(2)}
          disabled={false}
        />
      </Link>
      <Link to={`http://localhost:5173/pagos/${id}/${curso}`}>
        <ButtonWithIcon
          text="CD"
          classNameIcon="w-4"
          classNameVariants="rounded-sm
                bg-[#344A5F]  hover:bg-blue-boton-hover
                w-10"
          onClick={handleConfirmacion}
          disabled={false}
        />
      </Link>
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
    </div>
  );
};

export default BotonesMenuPrincipal;
