// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ButtonWithIcon from "@/components/ButtonWithIcon";
// import { patchModal } from "@/functions/methods";
// import { estudiantesAPI } from "@/api/ApiRutas";
// import AuthContext from "@/contexts/AuthContext";
// import ListasContext from "@/contexts/ListasContext";
// import { Link } from "react-router-dom";
// import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
// import ModalCarga from "@/components/Modal/ModalCarga";
// import ModalError from "@/components/Modal/ModalError";
// import ModalSucess from "@/components/Modal/ModalSucess";
// import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

// const BotonesMenuPrincipal = (props) => {
//   let { authTokens, user, estadoCaja } = useContext(AuthContext);
//   let { reload, setReload } = useContext(ListasContext);
//   const { id, estado_deuda } = props;
//   const navigate = useNavigate();
//   // MODAL SIMPLE
//   const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
//   const [isModalOpenEnviarSolicitud, setIsModalOpenEnviarSolicitud] =
//     useState(false);
//   const [isModalOpenDeuda, setIsModalOpenDeuda] = useState(false);

//   // CARGAS
//   const [modalLoading, setModalLoading] = useState(false);
//   const [modalSucessfull, setModalSucessfull] = useState(false);
//   const [modalFailed, setModalFailed] = useState(false);

//   const id_tipo_usuario = user.id_tipo_usuario;

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + String(authTokens.access),
//   };

//   const url = `${estudiantesAPI}${id}/`;

//   const handleClickEditar = () => {
//     navigate(`info-user/${id}`);
//   };

//   const dataEliminar = {
//     eliminacion_pendiente: false,
//     estado: false,
//   };

//   const dataEnviarSolicitud = {
//     eliminacion_pendiente: true,
//     estado: true,
//   };

//   const handleConfirmacion = () => {
//     if (estado_deuda == false) {
//       setIsModalOpenDeuda(true);
//     } else {
//       if (id_tipo_usuario === 1) {
//         setIsModalOpenEliminar(true);
//       } else {
//         setIsModalOpenEnviarSolicitud(true);
//       }
//     }
//   };

//   const handleEliminar = () => {
//     patchModal(
//       url,
//       dataEliminar,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };

//   const handleEnviarSolicitud = () => {
//     patchModal(
//       url,
//       dataEnviarSolicitud,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };
//   //Para direccionar caja
//   const [isModalOpen, setIsModalOpen] = useState();
//   function NavigateMatricula() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/2`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateMensualidad() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/1`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateCursoDesaprobado() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/3`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function ModalCaja() {
//     navigate("/caja");
//   }
//   return (
//     <div className="flex gap-2 justify-center items-center ">
//       <ButtonWithIcon
//         text="EDITAR"
//         icon={faPenToSquare}
//         classNameIcon="w-4 pr-1"
//         classNameVariants="rounded-sm
//                 p-4 bg-green-boton hover:bg-green-boton-hover"
//         onClick={handleClickEditar}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="HP"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#4776A0] hover:bg-blue-boton-hover
//                 w-10"
//         // onClick={handleConfirmacion}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="MA"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F] hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateMatricula}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="ME"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F] hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateMensualidad}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="CD"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F]  hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateCursoDesaprobado}
//         disabled={false}
//       />

//       <ButtonWithIcon
//         text=""
//         icon={faTrashCan}
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-red-boton hover:bg-red-boton-hover
//                 w-10"
//         onClick={handleConfirmacion}
//         disabled={false}
//       />

//       <ModalConfirmacion
//         titulo={
//           id_tipo_usuario == 1
//             ? "¿Estás seguro de eliminar a este estudiante?"
//             : "¿Estás seguro de solicitar la eliminación del estudiante?"
//         }
//         subtitulo="Esta acción podria generar cambios en el sistema"
//         isModalOpen={
//           id_tipo_usuario == 1
//             ? isModalOpenEliminar
//             : isModalOpenEnviarSolicitud
//         }
//         setIsModalOpen={
//           id_tipo_usuario == 1
//             ? setIsModalOpenEliminar
//             : setIsModalOpenEnviarSolicitud
//         }
//         func={id_tipo_usuario == 1 ? handleEliminar : handleEnviarSolicitud}
//       />

//       <ModalCarga
//         modalLoading={modalLoading}
//         titulo={
//           id_tipo_usuario == 1 ? "Eliminando estudiante" : "Enviando solicitud"
//         }
//       />

//       <ModalSucess
//         titulo={
//           id_tipo_usuario == 1
//             ? "¡Estudiante eliminado exitosamente!"
//             : "¡Solicitud enviada exitosamente!"
//         }
//         subtitulo=""
//         modalSucessfull={modalSucessfull}
//         setModalSucessfull={setModalSucessfull}
//         reload={reload}
//         setReload={setReload}
//       />
//       <ModalError
//         titulo="Ups ¡Ha ocurrido un error inesperado!"
//         subtitulo="Verifique su conexión a internet y vuelva a intentar la acción en unos minutos"
//         modalFailed={modalFailed}
//         setModalFailed={setModalFailed}
//       />

//       <ModalError
//         titulo="No puedes eliminar a un estudiante con deudas pendientes"
//         subtitulo=""
//         modalFailed={isModalOpenDeuda}
//         setModalFailed={setIsModalOpenDeuda}
//       />
//       <ModalConfirmacion
//         titulo="¡Error! ¡Caja Cerrada"
//         subtitulo="¿Aperturar de Caja?"
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         func={ModalCaja}
//       />
//     </div>
//   );
// };

// export default BotonesMenuPrincipal;

//con modal para editar estudiante

// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ButtonWithIcon from "@/components/ButtonWithIcon";
// import { patchModal } from "@/functions/methods";
// import { estudiantesAPI } from "@/api/ApiRutas";
// import AuthContext from "@/contexts/AuthContext";
// import ListasContext from "@/contexts/ListasContext";
// import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
// import ModalCarga from "@/components/Modal/ModalCarga";
// import ModalError from "@/components/Modal/ModalError";
// import ModalSucess from "@/components/Modal/ModalSucess";
// import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import ModalEditarEstudiante from "../InscribirAlumno/Forms/EditarDatosEstudiante";

// const BotonesMenuPrincipal = (props) => {
//   let { authTokens, user, estadoCaja } = useContext(AuthContext);
//   let { reload, setReload } = useContext(ListasContext);
//   const { id, estado_deuda } = props;
//   const navigate = useNavigate();

//   // MODAL SIMPLE
//   const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
//   const [isModalOpenEnviarSolicitud, setIsModalOpenEnviarSolicitud] =
//     useState(false);
//   const [isModalOpenDeuda, setIsModalOpenDeuda] = useState(false);
//   const [isModalOpenEditar, setIsModalOpenEditar] = useState(false); // Estado para el modal de edición

//   // CARGAS
//   const [modalLoading, setModalLoading] = useState(false);
//   const [modalSucessfull, setModalSucessfull] = useState(false);
//   const [modalFailed, setModalFailed] = useState(false);

//   const id_tipo_usuario = user.id_tipo_usuario;

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + String(authTokens.access),
//   };

//   const url = `${estudiantesAPI}${id}/`;

//   const handleClickEditar = () => {
//     setIsModalOpenEditar(true); // Abre el modal de edición
//   };

//   const dataEliminar = {
//     eliminacion_pendiente: false,
//     estado: false,
//   };

//   const dataEnviarSolicitud = {
//     eliminacion_pendiente: true,
//     estado: true,
//   };

//   const handleConfirmacion = () => {
//     if (estado_deuda == false) {
//       setIsModalOpenDeuda(true);
//     } else {
//       if (id_tipo_usuario === 1) {
//         setIsModalOpenEliminar(true);
//       } else {
//         setIsModalOpenEnviarSolicitud(true);
//       }
//     }
//   };

//   const handleEliminar = () => {
//     patchModal(
//       url,
//       dataEliminar,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };

//   const handleEnviarSolicitud = () => {
//     patchModal(
//       url,
//       dataEnviarSolicitud,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };

//   //Para direccionar caja
//   const [isModalOpen, setIsModalOpen] = useState();
//   function NavigateMatricula() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/2`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateMensualidad() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/1`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateCursoDesaprobado() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/3`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function ModalCaja() {
//     navigate("/caja");
//   }
//   return (
//     <div className="flex gap-2 justify-center items-center">
//       <ButtonWithIcon
//         text="EDITAR"
//         icon={faPenToSquare}
//         classNameIcon="w-4 pr-1"
//         classNameVariants="rounded-sm p-4 bg-green-boton hover:bg-green-boton-hover"
//         onClick={handleClickEditar}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="HP"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm bg-[#4776A0] hover:bg-blue-boton-hover w-10"
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="MA"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
//         onClick={NavigateMatricula}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="ME"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
//         onClick={NavigateMensualidad}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="CD"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
//         onClick={NavigateCursoDesaprobado}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text=""
//         icon={faTrashCan}
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm bg-red-boton hover:bg-red-boton-hover w-10"
//         onClick={handleConfirmacion}
//         disabled={false}
//       />

//       <ModalConfirmacion
//         titulo={
//           id_tipo_usuario == 1
//             ? "¿Estás seguro de eliminar a este estudiante?"
//             : "¿Estás seguro de solicitar la eliminación del estudiante?"
//         }
//         subtitulo="Esta acción podría generar cambios en el sistema"
//         isModalOpen={
//           id_tipo_usuario == 1
//             ? isModalOpenEliminar
//             : isModalOpenEnviarSolicitud
//         }
//         setIsModalOpen={
//           id_tipo_usuario == 1
//             ? setIsModalOpenEliminar
//             : setIsModalOpenEnviarSolicitud
//         }
//         func={id_tipo_usuario == 1 ? handleEliminar : handleEnviarSolicitud}
//       />

//       <ModalCarga
//         modalLoading={modalLoading}
//         titulo={
//           id_tipo_usuario == 1 ? "Eliminando estudiante" : "Enviando solicitud"
//         }
//       />

//       <ModalSucess
//         titulo={
//           id_tipo_usuario == 1
//             ? "¡Estudiante eliminado exitosamente!"
//             : "¡Solicitud enviada exitosamente!"
//         }
//         subtitulo=""
//         modalSucessfull={modalSucessfull}
//         setModalSucessfull={setModalSucessfull}
//         reload={reload}
//         setReload={setReload}
//       />
//       <ModalError
//         titulo="Ups ¡Ha ocurrido un error inesperado!"
//         subtitulo="Verifique su conexión a internet y vuelva a intentar la acción en unos minutos"
//         modalFailed={modalFailed}
//         setModalFailed={setModalFailed}
//       />
//       <ModalError
//         titulo="No puedes eliminar a un estudiante con deudas pendientes"
//         subtitulo=""
//         modalFailed={isModalOpenDeuda}
//         setModalFailed={setIsModalOpenDeuda}
//       />
//       <ModalConfirmacion
//         titulo="¡Error! ¡Caja Cerrada"
//         subtitulo="¿Aperturar de Caja?"
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         func={ModalCaja}
//       />
//       <ModalEditarEstudiante
//         isOpen={isModalOpenEditar}
//         onRequestClose={() => setIsModalOpenEditar(false)}
//         studentId={id}
//         headers={headers}
//       />
//     </div>
//   );
// };

// export default BotonesMenuPrincipal;

// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ButtonWithIcon from "@/components/ButtonWithIcon";
// import { patchModal } from "@/functions/methods";
// import { estudiantesAPI } from "@/api/ApiRutas";
// import AuthContext from "@/contexts/AuthContext";
// import ListasContext from "@/contexts/ListasContext";
// import { Link } from "react-router-dom";
// import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
// import ModalCarga from "@/components/Modal/ModalCarga";
// import ModalError from "@/components/Modal/ModalError";
// import ModalSucess from "@/components/Modal/ModalSucess";
// import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

// const BotonesMenuPrincipal = (props) => {
//   let { authTokens, user, estadoCaja } = useContext(AuthContext);
//   let { reload, setReload } = useContext(ListasContext);
//   const { id, estado_deuda } = props;
//   const navigate = useNavigate();
//   // MODAL SIMPLE
//   const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
//   const [isModalOpenEnviarSolicitud, setIsModalOpenEnviarSolicitud] =
//     useState(false);
//   const [isModalOpenDeuda, setIsModalOpenDeuda] = useState(false);

//   // CARGAS
//   const [modalLoading, setModalLoading] = useState(false);
//   const [modalSucessfull, setModalSucessfull] = useState(false);
//   const [modalFailed, setModalFailed] = useState(false);

//   const id_tipo_usuario = user.id_tipo_usuario;

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + String(authTokens.access),
//   };

//   const url = `${estudiantesAPI}${id}/`;

//   const handleClickEditar = () => {
//     navigate(`info-user/${id}`);
//   };

//   const dataEliminar = {
//     eliminacion_pendiente: false,
//     estado: false,
//   };

//   const dataEnviarSolicitud = {
//     eliminacion_pendiente: true,
//     estado: true,
//   };

//   const handleConfirmacion = () => {
//     if (estado_deuda == false) {
//       setIsModalOpenDeuda(true);
//     } else {
//       if (id_tipo_usuario === 1) {
//         setIsModalOpenEliminar(true);
//       } else {
//         setIsModalOpenEnviarSolicitud(true);
//       }
//     }
//   };

//   const handleEliminar = () => {
//     patchModal(
//       url,
//       dataEliminar,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };

//   const handleEnviarSolicitud = () => {
//     patchModal(
//       url,
//       dataEnviarSolicitud,
//       headers,
//       setModalLoading,
//       setModalSucessfull,
//       setModalFailed
//     );
//   };
//   //Para direccionar caja
//   const [isModalOpen, setIsModalOpen] = useState();
//   function NavigateMatricula() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/2`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateMensualidad() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/1`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function NavigateCursoDesaprobado() {
//     if (estadoCaja == true) {
//       navigate(`/pagos/${id}/3`);
//     } else {
//       setIsModalOpen(true);
//     }
//   }
//   function ModalCaja() {
//     navigate("/caja");
//   }
//   return (
//     <div className="flex gap-2 justify-center items-center ">
//       <ButtonWithIcon
//         text="EDITAR"
//         icon={faPenToSquare}
//         classNameIcon="w-4 pr-1"
//         classNameVariants="rounded-sm
//                 p-4 bg-green-boton hover:bg-green-boton-hover"
//         onClick={handleClickEditar}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="HP"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#4776A0] hover:bg-blue-boton-hover
//                 w-10"
//         // onClick={handleConfirmacion}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="MA"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F] hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateMatricula}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="ME"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F] hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateMensualidad}
//         disabled={false}
//       />
//       <ButtonWithIcon
//         text="CD"
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-[#344A5F]  hover:bg-blue-boton-hover
//                 w-10"
//         onClick={NavigateCursoDesaprobado}
//         disabled={false}
//       />

//       <ButtonWithIcon
//         text=""
//         icon={faTrashCan}
//         classNameIcon="w-4"
//         classNameVariants="rounded-sm
//                 bg-red-boton hover:bg-red-boton-hover
//                 w-10"
//         onClick={handleConfirmacion}
//         disabled={false}
//       />

//       <ModalConfirmacion
//         titulo={
//           id_tipo_usuario == 1
//             ? "¿Estás seguro de eliminar a este estudiante?"
//             : "¿Estás seguro de solicitar la eliminación del estudiante?"
//         }
//         subtitulo="Esta acción podria generar cambios en el sistema"
//         isModalOpen={
//           id_tipo_usuario == 1
//             ? isModalOpenEliminar
//             : isModalOpenEnviarSolicitud
//         }
//         setIsModalOpen={
//           id_tipo_usuario == 1
//             ? setIsModalOpenEliminar
//             : setIsModalOpenEnviarSolicitud
//         }
//         func={id_tipo_usuario == 1 ? handleEliminar : handleEnviarSolicitud}
//       />

//       <ModalCarga
//         modalLoading={modalLoading}
//         titulo={
//           id_tipo_usuario == 1 ? "Eliminando estudiante" : "Enviando solicitud"
//         }
//       />

//       <ModalSucess
//         titulo={
//           id_tipo_usuario == 1
//             ? "¡Estudiante eliminado exitosamente!"
//             : "¡Solicitud enviada exitosamente!"
//         }
//         subtitulo=""
//         modalSucessfull={modalSucessfull}
//         setModalSucessfull={setModalSucessfull}
//         reload={reload}
//         setReload={setReload}
//       />
//       <ModalError
//         titulo="Ups ¡Ha ocurrido un error inesperado!"
//         subtitulo="Verifique su conexión a internet y vuelva a intentar la acción en unos minutos"
//         modalFailed={modalFailed}
//         setModalFailed={setModalFailed}
//       />

//       <ModalError
//         titulo="No puedes eliminar a un estudiante con deudas pendientes"
//         subtitulo=""
//         modalFailed={isModalOpenDeuda}
//         setModalFailed={setIsModalOpenDeuda}
//       />
//       <ModalConfirmacion
//         titulo="¡Error! ¡Caja Cerrada"
//         subtitulo="¿Aperturar de Caja?"
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         func={ModalCaja}
//       />
//     </div>
//   );
// };

// export default BotonesMenuPrincipal;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { patchModal } from "@/functions/methods";
import { estudiantesAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";
import ListasContext from "@/contexts/ListasContext";
import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BotonesMenuPrincipal = (props) => {
  let { authTokens, user } = useContext(AuthContext);
  let { reload, setReload } = useContext(ListasContext);
  const { id, estado_deuda } = props;
  const navigate = useNavigate();

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
    navigate(`/editar-alumno/${id}`);
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

  //Para direccionar caja
  const [isModalOpen, setIsModalOpen] = useState();
  const estadoCaja = JSON.parse(localStorage.getItem("estadoCaja"));
  function NavigateMatricula() {
    if (estadoCaja == true) {
      navigate(`/pagos/${id}/2`);
    } else {
      setIsModalOpen(true);
    }
  }
  function NavigateMensualidad() {
    if (estadoCaja == true) {
      navigate(`/pagos/${id}/1`);
    } else {
      setIsModalOpen(true);
    }
  }
  function NavigateCursoDesaprobado() {
    if (estadoCaja == true) {
      navigate(`/pagos/${id}/3`);
    } else {
      setIsModalOpen(true);
    }
  }
  function ModalCaja() {
    navigate("/caja");
  }
  return (
    <div className="flex gap-2 justify-center items-center">
      <ButtonWithIcon
        text="EDITAR"
        icon={faPenToSquare}
        classNameIcon="w-4 pr-1"
        classNameVariants="rounded-sm p-4 bg-green-boton hover:bg-green-boton-hover"
        onClick={handleClickEditar}
        disabled={false}
      />
      <ButtonWithIcon
        text="HP"
        classNameIcon="w-4"
        classNameVariants="rounded-sm bg-[#4776A0] hover:bg-blue-boton-hover w-10"
        disabled={false}
      />
      <ButtonWithIcon
        text="MA"
        classNameIcon="w-4"
        classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
        onClick={NavigateMatricula}
        disabled={false}
      />
      <ButtonWithIcon
        text="ME"
        classNameIcon="w-4"
        classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
        onClick={NavigateMensualidad}
        disabled={false}
      />
      <ButtonWithIcon
        text="CD"
        classNameIcon="w-4"
        classNameVariants="rounded-sm bg-[#344A5F] hover:bg-blue-boton-hover w-10"
        onClick={NavigateCursoDesaprobado}
        disabled={false}
      />
      <ButtonWithIcon
        text=""
        icon={faTrashCan}
        classNameIcon="w-4"
        classNameVariants="rounded-sm bg-red-boton hover:bg-red-boton-hover w-10"
        onClick={handleConfirmacion}
        disabled={false}
      />

      <ModalConfirmacion
        titulo={
          id_tipo_usuario == 1
            ? "¿Estás seguro de eliminar a este estudiante?"
            : "¿Estás seguro de solicitar la eliminación del estudiante?"
        }
        subtitulo="Esta acción podría generar cambios en el sistema"
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
      <ModalConfirmacion
        titulo="¡Error! ¡Caja Cerrada"
        subtitulo="¿Aperturar de Caja?"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={ModalCaja}
      />
    </div>
  );
};

export default BotonesMenuPrincipal;
