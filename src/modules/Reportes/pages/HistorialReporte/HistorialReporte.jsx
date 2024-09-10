import { useState } from 'react';

import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';

import { HISTORIAL_REPORTES_API } from '@/api/ApiRutas';
import { columnsValue } from './columnsHistorialReporte';

import './HistorialReporte.scss';
import './FiltrosHistorialReporte/FiltrosHistorialReporte.scss';
import { paramsConstructor } from '@/utils/querys';
import FiltrosHistorialReporte from './FiltrosHistorialReporte';

const HistorialReporte = () => {
  const [params, setParams] = useState({
    tipo_usuario: '',
    tipo_reporte: '',
    fecha: '',
    buscador: ''
  });

  let queryParams = paramsConstructor(params);

  return (
    <MenuLateral>
      <div className='historial-reporte h-full gap-3 min-w-[600px]'>
        <Listas
          api={HISTORIAL_REPORTES_API}
          queryParams={queryParams}
          columnsValue={columnsValue}
          classNameTable='historial-reporte-table'
          multiDelete={false}
        >
          <FiltrosHistorialReporte
            classNameFiltros='historial-reporte-filtros'
            setParams={setParams}
          />
        </Listas>
      </div>
    </MenuLateral>
  );
};

export default HistorialReporte;
