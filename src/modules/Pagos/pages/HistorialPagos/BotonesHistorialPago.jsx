import React, { useContext, useState } from "react";
import axios from "axios";
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
import ModalPermisoAnular from "./FiltrosHistorialPago/ModalPermisoAnular";
import {
  faDeleteLeft,
  faPenToSquare,
  faTrashCan,
  faUpload,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import ModalAnulacion from "./FiltrosHistorialPago/ModalAnulacion";

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

  //USESTATE PARA ABRIR Y CERRAR EL MODAL DE AGREGAR DESCRIPCIÓN
  const [anular, setAnular] = useState(false);
  // PARA MANEJAR LAS CONTRASEÑAS INCORRECTAS
  const [passwordFail, setPasswordFail] = useState(false);
  //DELETE CONST

  //FUNCIÓN PARA GENERAR EL ARCHIO PDF SEGÚN EL Document ID
  const ViewRecibo = async () => {
    try {
      //Guardamos el id del documento que hemos generado
      const documentId = id;
      console.log(documentId);
      // Generamos el archiv PDF
      const responses = await axios.get(
        `https://back.apisunat.com/documents/${documentId}/getById`
      );
      console.log("operacion exitosa:", responses.data);
      const file = responses.data.fileName;
      console.log(file);
      const url = `https://back.apisunat.com/documents/${documentId}/getPDF/A4/${file}.pdf`;
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  const deleteDocument = async () => {};

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

  //ABRIR Y CERRAR EL MODAL PARA CONTRASEÑA DEL ADMINISTRADOR
  return (
    <div className="flex gap-2 justify-center items-center ml-2 ">
      {/* <!--Boton para ver--> */}
      <ButtonWithIcon
        text=""
        icon={faUpload}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-green-boton hover:bg-green-boton-hover
                w-10"
        onClick={ViewRecibo}
        disabled={false}
      />
      <ButtonWithIcon
        text=""
        icon={faX}
        classNameIcon="w-4"
        classNameVariants="rounded-sm
                bg-red-boton hover:bg-red-boton-hover
                w-10"
        onClick={() => setModalSucessfull(true)}
        disabled={false}
      />

      <ModalPermisoAnular
        modalSucessfull={modalSucessfull}
        setModalSucessfull={setModalSucessfull}
        titulo="PERMISOS REQUERIDOS"
        subtitulo="Para realizar esta acción se requiere de permisos específicos"
        anular={anular}
        setAnular={setAnular}
        setPasswordFail={setPasswordFail}
      />
      <ModalAnulacion
        idDocument={id}
        anular={anular}
        setAnular={setAnular}
        titulo=""
        subtitulo="Para realizar esta acción se requiere de permisos específicos"
      />
      <ModalSucess
        modalSucessfull={passwordFail}
        setModalSucessfull={setPasswordFail}
        titulo="CONTRASEÑA INCORRECTA"
        subtitulo="Para realizar esta acción se requiere de permisos específicos"
      />
    </div>
  );
};

export default BotonesHistorialPago;
