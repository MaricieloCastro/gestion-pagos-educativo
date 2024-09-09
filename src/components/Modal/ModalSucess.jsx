import { Modal } from 'antd';

import PropTypes from 'prop-types';

import './Modal.scss';

const ModalSucess = (props) => {
  const { modalSucessfull, setModalSucessfull, setReload, titulo, subtitulo } =
    props;

  const handleOk = () => {
    setModalSucessfull(false);
    setReload((prev) => !prev);
  };

  return (
    <>
      <Modal
        closable={false}
        className='modal-sucess'
        title={titulo}
        centered
        width={360}
        closeIcon={false}
        open={modalSucessfull}
        okText='Aceptar'
        onOk={handleOk}
      >
        <p>{subtitulo}</p>
      </Modal>
    </>
  );
};

export default ModalSucess;

ModalSucess.propTypes = {
  modalSucessfull: PropTypes.bool,
  setModalSucessfull: PropTypes.func,
  setReload: PropTypes.func,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string
};
