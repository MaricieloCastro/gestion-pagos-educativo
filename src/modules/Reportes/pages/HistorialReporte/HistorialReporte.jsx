import React from 'react'

import MenuLateral from '@/components/MenuLateral'
import Listas from '@/components/Listas'

import { filtrosHistorialReporte } from './FiltrosHistorialReporte/filtrosHistorialReporte'
import { HISTORIAL_REPORTES_API } from '@/api/ApiRutas'
import { columnsValue } from './columnsHistorialReporte'

import './HistorialReporte.scss'
import './FiltrosHistorialReporte/FiltrosHistorialReporte.scss'

const HistorialReporte = () => {
  return (
    <MenuLateral>
      <div className='historial-reporte h-full gap-3 min-w-[600px]'>
        <Listas
          api={HISTORIAL_REPORTES_API}
          columnsValue={columnsValue}
          classNameTable='historial-reporte-table'
          classNameFiltros='historial-reporte-filtros'
          filtrosLista={filtrosHistorialReporte}
          multiDelete={false}
        />
      </div>
    </MenuLateral>
  )
}

export default HistorialReporte
