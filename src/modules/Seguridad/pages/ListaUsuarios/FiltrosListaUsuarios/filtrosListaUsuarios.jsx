import { tipoUsuariosAPI } from '@/api/ApiRutas';
import ButtonWithIcon from '@/components/ButtonWithIcon';
import { filterAdapter } from '@/components/Listas/CallFilter/filterAdapter';
import SelectConsult from '@/components/Listas/ConsultFilter/SelectConsult';
import { enlaces } from '@/utils/rutas';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FiltrosListaUsuarios.scss';
import DateConsult from '@/components/Listas/ConsultFilter/DateConsult';
import dayjs from 'dayjs';
import InputConsult from '@/components/Listas/ConsultFilter/InputConsult';

const FiltrosListaUsuarios = ({ classNameFiltros, setParams }) => {
  const optionsTipoUsuario = filterAdapter(tipoUsuariosAPI);

  const handleTipoUsuario = (value) => {
    setParams((prev) => ({ ...prev, tipo_usuario: value }));
  };

  const handleFecha = (value) => {
    const formatDate = dayjs(value).format('YYYY-MM-DD');
    setParams((prev) => ({ ...prev, last_login: value ? formatDate : '' }));
  };

  const handleBuscador = (e) => {
    const { value } = e.target;

    if (value.length > 2) {
      setParams((prev) => ({ ...prev, buscador: value }));
    } else {
      setParams((prev) => ({ ...prev, buscador: '' }));
    }
  };

  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      <div className={`${classNameFiltros}__caja-filtros gap-3`}>
        <div
          className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
        >
          <SelectConsult
            handleChange={handleTipoUsuario}
            title='TIPO:'
            options={optionsTipoUsuario}
          />

          <DateConsult title='ULT. INGRESO' handleChange={handleFecha} />
        </div>
        <div
          className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}
        >
          <InputConsult handleChange={handleBuscador} />
        </div>
      </div>
      <div
        className={`${classNameFiltros}__caja-boton flex justify-end items-center`}
      >
        <Link to={enlaces[7].path}>
          <ButtonWithIcon
            text='CREAR USUARIO'
            icon={faPlus}
            classNameVariants='gap-2 bg-green-boton hover:bg-green-boton-hover rounded-1'
          />
        </Link>
      </div>
    </div>
  );
};

export default FiltrosListaUsuarios;

FiltrosListaUsuarios.propTypes = {
  classNameFiltros: PropTypes.string,
  setParams: PropTypes.func.isRequired
};
