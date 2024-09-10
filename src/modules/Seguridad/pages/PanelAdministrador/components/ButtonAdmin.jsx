import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@/contexts/AuthContext';
import { getAxios } from '@/functions/methods';
import { estudiantesAPI } from '@/api/ApiRutas';

import PropTypes from 'prop-types';

const ButtonAdmin = (props) => {
  const navigate = useNavigate();

  let { authTokens } = useContext(AuthContext);

  const { icon, title, notification, goTo } = props;

  const [solicitudDelete, setSolicitudDelete] = useState({});

  const url = `${estudiantesAPI}/?estado=true&eliminacion_pendiente=true`;

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    };

    getAxios(url, headers, setSolicitudDelete);
  }, [url, authTokens]);

  const handleClick = () => {
    navigate(goTo);
  };

  return (
    <div className='panel-administrador__seccion-2-1-2-botones-childrens bg-blue-claro'>
      <button className='h-full w-full grid' onClick={handleClick}>
        <div className='h-full flex justify-center items-center'>
          <FontAwesomeIcon icon={icon} className='text-white-texto' />
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-white-texto mb-2'>{title}</p>
        </div>
      </button>
      {notification && (
        <div className='panel-administrador__seccion-2-1-2-botones-childrens-notification'>
          {solicitudDelete.length}
        </div>
      )}
    </div>
  );
};

export default ButtonAdmin;

ButtonAdmin.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  notification: PropTypes.bool,
  goTo: PropTypes.string.isRequired
};
