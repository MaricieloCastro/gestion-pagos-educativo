import { useContext, useEffect, useState } from 'react'

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
  const [fechas, setFechas] = useState(InitialDates)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteIngresosAPI}/?tipo_pago=${optionSelected}&fecha_inicial=${fechas.fechaInicial}&fecha_final=${fechas.fechaFinal}`

    getAxios(url, headers, setData, setLoading)
  }, [])

  const handleClickAplicar = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteIngresosAPI}/?tipo_pago=${optionSelected}&fecha_inicial=${fechas.fechaInicial}&fecha_final=${fechas.fechaFinal}`

    getAxios(url, headers, setData, setLoading)
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
        idReporte={1}
        handleClickAplicar={handleClickAplicar}
      >
        <IngresoPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default Ingresos
