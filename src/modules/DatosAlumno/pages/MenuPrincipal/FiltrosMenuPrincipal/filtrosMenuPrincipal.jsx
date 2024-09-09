import { beneficioAPI, CONFIGURACION_API } from '@/api/ApiRutas';
import { filterAdapter } from '@/components/Listas/CallFilter/filterAdapter';
import InputConsult from '@/components/Listas/ConsultFilter/InputConsult';
import SelectConsult from '@/components/Listas/ConsultFilter/SelectConsult';

import './FiltrosMenuPrincipal.scss';

import PropTypes from 'prop-types';

const FiltrosMenuPrincipal = ({ classNameFiltros, setParams }) => {
  const optionsBeneficio = filterAdapter(beneficioAPI);
  const optionsTurno = filterAdapter(`${CONFIGURACION_API}=TURNO`);
  const optionsGrado = filterAdapter(`${CONFIGURACION_API}=GRADO`);
  const optionsSeccion = filterAdapter(`${CONFIGURACION_API}=SECCION`);

  const handleDeuda = (value) => {
    setParams((prev) => ({ ...prev, deuda: value }));
  };

  const handleBeneficio = (value) => {
    setParams((prev) => ({ ...prev, beneficio: value }));
  };

  const handleTurno = (value) => {
    setParams((prev) => ({ ...prev, turno: value }));
  };

  const handleGrado = (value) => {
    setParams((prev) => ({ ...prev, grado: value }));
  };

  const handleSeccion = (value) => {
    setParams((prev) => ({ ...prev, seccion: value }));
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
          handleChange={handleDeuda}
          title='DEUDA:'
          options={[
            { value: '', label: 'TODOS' },
            { value: 'false', label: 'DEUDOR' },
            { value: 'true', label: 'SIN DEUDA' }
          ]}
        />

        <SelectConsult
          handleChange={handleBeneficio}
          title='BENEFICIO:'
          options={optionsBeneficio}
        />

        <SelectConsult
          handleChange={handleTurno}
          title='TURNO:'
          options={optionsTurno}
        />

        <SelectConsult
          handleChange={handleGrado}
          title='GRADO:'
          options={optionsGrado}
        />

        <SelectConsult
          handleChange={handleSeccion}
          title='SECCION:'
          options={optionsSeccion}
        />
      </div>
      <div
        className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}
      >
        <InputConsult handleChange={handleBuscador} />
      </div>
    </div>
  );
};

export default FiltrosMenuPrincipal;

FiltrosMenuPrincipal.propTypes = {
  classNameFiltros: PropTypes.string,
  setParams: PropTypes.func
};
