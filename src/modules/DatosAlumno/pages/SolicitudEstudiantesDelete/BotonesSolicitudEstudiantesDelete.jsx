import React, { useContext, useState } from "react";

import ButtonWithIcon from "@/components/ButtonWithIcon";
import { patchModal } from "@/functions/methods";
import { estudiantesAPI } from "@/api/ApiRutas";
import AuthContext from "@/contexts/AuthContext";

import ModalConfirmacion from "@/components/Modal/ModalConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalError from "@/components/Modal/ModalError";
import ModalSucess from "@/components/Modal/ModalSucess";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const BotonesSolicitudEstudiantesDelete = (props) => {
    let { authTokens } = useContext(AuthContext);

    const { id, setReload, reload } = props;

    // MODAL SIMPLE
    const [isModalOpenCheck, setIsModalOpenCheck] = useState(false);
    const [isModalOpenAspa, setIsModalOpenAspa] = useState(false)

    // CARGAS
    const [modalLoading, setModalLoading] = useState(false);
    const [modalSucessfull, setModalSucessfull] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);

    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
    };

    const url = `${estudiantesAPI}${id}/`;

    const dataEliminar = {
        eliminacion_pendiente: false,
        estado: false,
    };

    const handleConfirmacionCheck = () => {
        setIsModalOpenCheck(true);
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

    const dataRechazar = {
        eliminacion_pendiente: false,
        estado: true,
    };

    const handleConfirmacionAspa = () => {
        setIsModalOpenAspa(true);
    };

    const handleRechazar = () => {
        patchModal(
            url,
            dataRechazar,
            headers,
            setModalLoading,
            setModalSucessfull,
            setModalFailed
        );
    };

    return (
        <div className="flex gap-2 justify-center items-center ">
            <ButtonWithIcon
                text=""
                icon={faCheck}
                classNameIcon="w-4"
                classNameVariants="rounded-sm
                bg-green-boton hover:bg-green-boton-hover
                w-10"
                onClick={handleConfirmacionCheck}
                disabled={false}
            />

            <ModalConfirmacion
                titulo="¿Estás seguro de eliminar a este estudiante?"
                subtitulo="Esta acción podria generar cambios en el sistema"
                isModalOpen={isModalOpenCheck}
                setIsModalOpen={setIsModalOpenCheck}
                func={handleEliminar}
            />

            <ButtonWithIcon
                text=""
                icon={faX}
                classNameIcon="w-4"
                classNameVariants="rounded-sm
                bg-red-boton hover:bg-red-boton-hover
                w-10"
                onClick={handleConfirmacionAspa}
                disabled={false}
            />

            <ModalConfirmacion
                titulo="¿Estás seguro rechazar la eliminación de este estudiante?"
                subtitulo="Esta acción podria generar cambios en el sistema"
                isModalOpen={isModalOpenAspa}
                setIsModalOpen={setIsModalOpenAspa}
                func={handleRechazar}
            />

            <ModalCarga modalLoading={modalLoading} titulo="Cargando" />

            <ModalSucess
                titulo="¡Acción realizada exitosamente!"
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

export default BotonesSolicitudEstudiantesDelete;
