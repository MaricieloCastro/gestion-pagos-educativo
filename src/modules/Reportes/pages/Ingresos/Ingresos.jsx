import React, { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { reporteIngresosAPI, tipoPagoAPI } from '@/api/ApiRutas'
import AuthContext from '@/contexts/AuthContext'
import { getAxios } from '@/functions/methods'
import IngresoPDF from '../../components/PDF/IngresosPDF'

const InitialDates = {
  fechaInicial: '',
  fechaFinal: ''
}

const Ingresos = () => {
  let { authTokens } = useContext(AuthContext)
  const [optionSelected, setOptionSelected] = useState('')
  const [triggerReporte, setTriggerReporte] = useState(true)

  const [fechas, setFechas] = useState(InitialDates)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // console.log('fechaInicial', fechaInicial)
  // console.log('fechaFinal', fechaFinal)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteIngresosAPI}/?tipo_pago=${optionSelected}&fecha_inicial=${fechas.fechaInicial}&fecha_final=${fechas.fechaFinal}`

    getAxios(url, headers, setData, setLoading, setError)
  }, [])

  const handleClickAplicar = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteIngresosAPI}/?tipo_pago=${optionSelected}&fecha_inicial=${fechas.fechaInicial}&fecha_final=${fechas.fechaFinal}`

    getAxios(url, headers, setData, setLoading, setError)
  }

  return (
    <MenuLateral>
      <Reporte
        loadingApiPDF={loading}
        apiFiltros={tipoPagoAPI}
        tittleFiltro='Tipo de pago:'
        apiReporte={data}
        nombreReporte='Ingresos'
        optionSelected={optionSelected}
        setFechas={setFechas}
        setOptionSelected={setOptionSelected}
        triggerReporte={triggerReporte}
        setTriggerReporte={setTriggerReporte}
        idReporte={1}
        handleClickAplicar={handleClickAplicar}
      >
        <IngresoPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default Ingresos
