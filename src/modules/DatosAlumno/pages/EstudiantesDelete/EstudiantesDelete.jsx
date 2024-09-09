import { useContext, useState } from 'react';

import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';

import { estudiantesAPI } from '@/api/ApiRutas';
import { columnsValue } from './columnsEstudiantesDelete';

import AuthContext from '@/contexts/AuthContext';
import ListasContext from '@/contexts/ListasContext';
import ModalConfirmacion from '@/components/Modal/ModalConfirmacion';
import ModalCarga from '@/components/Modal/ModalCarga';
import ModalSucess from '@/components/Modal/ModalSucess';
import ModalError from '@/components/Modal/ModalError';
import { multiPatchModal } from '@/functions/multiMethods';
import { paramsConstructor } from '@/utils/querys';

import './EstudiantesDelete.scss';
import FiltrosEstudiantesDelete from './FiltrosEstudiantesDelete';

const MenuPrincipal = () => {
  let { authTokens } = useContext(AuthContext);
  let { reload, setReload } = useContext(ListasContext);

  const [params, setParams] = useState({
    estado: false,
    deuda: '',
    eliminacion_pendiente: '',
    beneficio: '',
    turno: '',
    grado: '',
    seccion: '',
    buscador: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  const [modalFailed, setModalFailed] = useState(false);

  const [eliminadosData, setEliminadosData] = useState([]);

  const handleModal = (estudiantes) => {
    setIsModalOpen(true);
    setEliminadosData(estudiantes);
  };

  const restaurarEstudiantes = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    };

    const data = {
      estado: true
    };

    await multiPatchModal(
      estudiantesAPI,
      eliminadosData,
      data,
      headers,
      setModalLoading,
      setModalSucessfull,
      setModalFailed
    );
  };

  let queryParams = paramsConstructor(params);

  return (
    <MenuLateral>
      <div className='estudiantes-delete h-full gap-3 min-w-[600px]'>
        <Listas
          api={estudiantesAPI}
          queryParams={queryParams}
          columnsValue={columnsValue}
          classNameTable='estudiantes-delete-table'
          multiDelete={true}
          buttonTittle1='Restaurar'
          buttonTittle2='estudiante(s)'
          buttonFunction={handleModal}
        >
          <FiltrosEstudiantesDelete
            classNameFiltros='estudiantes-delete-filtros'
            setParams={setParams}
          />
        </Listas>
      </div>

      <ModalConfirmacion
        titulo='¿Estás seguro de restaurar a este(os) estudiante(s)?'
        subtitulo='Esta acción podria generar cambios en el sistema'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={restaurarEstudiantes}
      />

      <ModalCarga modalLoading={modalLoading} titulo='Cargando' />

      <ModalSucess
        titulo='¡Acción realizada exitosamente!'
        subtitulo=''
        modalSucessfull={modalSucessfull}
        setModalSucessfull={setModalSucessfull}
        reload={reload}
        setReload={setReload}
      />

      <ModalError
        titulo='Ups ¡Ha ocurrido un error inesperado!'
        subtitulo='Verifique su conexión a internet y vuelva a intentar la acción en unos minutos'
        modalFailed={modalFailed}
        setModalFailed={setModalFailed}
      />
    </MenuLateral>
  );
};

export default MenuPrincipal;
