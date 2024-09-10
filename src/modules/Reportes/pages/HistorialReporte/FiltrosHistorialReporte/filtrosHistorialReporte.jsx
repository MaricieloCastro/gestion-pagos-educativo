import { TIPO_REPORTES_API, tipoUsuariosAPI } from '@/api/ApiRutas';
import { filterAdapter } from '@/components/Listas/CallFilter/filterAdapter';
import InputConsult from '@/components/Listas/ConsultFilter/InputConsult';
import SelectConsult from '@/components/Listas/ConsultFilter/SelectConsult';

import './FiltrosHistorialReporte.scss';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import DateConsult from '@/components/Listas/ConsultFilter/DateConsult';

const FiltrosHistorialReporte = ({ classNameFiltros, setParams }) => {
  const optionsTipoUsuarios = filterAdapter(tipoUsuariosAPI);
  const optionsTipoReportes = filterAdapter(TIPO_REPORTES_API);

  const handleTipoUsuario = (value) => {
    setParams((prev) => ({ ...prev, tipo_usuario: value }));
  };

  const handleTipoReporte = (value) => {
    setParams((prev) => ({ ...prev, tipo_reporte: value }));
  };

  const handleFecha = (value) => {
    const formatDate = dayjs(value).format('YYYY-MM-DD');
    setParams((prev) => ({ ...prev, fecha: value ? formatDate : '' }));
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
      <div
        className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
      >
        <SelectConsult
          handleChange={handleTipoUsuario}
          title='TIPO USUARIO:'
          options={optionsTipoUsuarios}
        />

        <SelectConsult
          handleChange={handleTipoReporte}
          title='TIPO REPORTE:'
          options={optionsTipoReportes}
        />

        <DateConsult title='FECHA:' handleChange={handleFecha} />
      </div>
      <div
        className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}
      >
        <InputConsult handleChange={handleBuscador} />
      </div>
    </div>
  );
};

export default FiltrosHistorialReporte;

FiltrosHistorialReporte.propTypes = {
  classNameFiltros: PropTypes.string,
  setParams: PropTypes.func
};
