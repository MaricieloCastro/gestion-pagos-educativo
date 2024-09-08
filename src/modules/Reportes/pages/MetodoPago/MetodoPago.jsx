import { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { metodoPagoAPI, reporteMetodoPagoAPI } from '@/api/ApiRutas'
import { getAxios } from '@/functions/methods'
import AuthContext from '@/contexts/AuthContext'
import MetodoPagoPDF from '../../components/PDF/MetodoPagoPDF'

const MetodoPago = () => {
  let { authTokens } = useContext(AuthContext)
  const [optionSelected, setOptionSelected] = useState('')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteMetodoPagoAPI}/?metodo=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }, [])

  const handleClickAplicar = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteMetodoPagoAPI}/?metodo=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }

  return (
    <MenuLateral>
      <Reporte
        loadingApiPDF={loading}
        apiFiltros={metodoPagoAPI}
        tittleFiltro='Metodo de pago:'
        apiReporte={data}
        nombreReporte='Metodo de pago'
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        idReporte={4}
        activeRangePicker={false}
        handleClickAplicar={handleClickAplicar}
      >
        <MetodoPagoPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default MetodoPago
