import { useContext, useEffect, useState } from 'react';
import AuthContext from '@/contexts/AuthContext';
import { getAxiosSimple } from '@/functions/methods';
import PropTypes from 'prop-types';

const OPTIONS = [
  {
    value: '',
    label: 'TODOS'
  }
];

export const filterAdapter = (api) => {
  let { authTokens } = useContext(AuthContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    };

    getAxiosSimple(api, headers, setOptions);
  }, []);

  const newOPTIONS = Array.isArray(options)
    ? options
        .filter((option) => option.estado === true)
        .map((option) => ({
          value: option.nombre,
          label: option.nombre
        }))
    : [];

  const completeOptions = [...OPTIONS, ...newOPTIONS];

  return completeOptions;
};

filterAdapter.propTypes = {
  api: PropTypes.string.isRequired
};
