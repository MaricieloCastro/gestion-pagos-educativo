import React, { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { reporteDeudasAPI, tipoPagoAPI } from '@/api/ApiRutas'
import DeudasPDF from '../../components/PDF/DeudasPDF'
import AuthContext from '@/contexts/AuthContext'
import { getAxios } from '@/functions/methods'

const Deudas = () => {
  let { authTokens } = useContext(AuthContext)
  const [optionSelected, setOptionSelected] = useState('')
  const [triggerReporte, setTriggerReporte] = useState(true)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteDeudasAPI}/?nombre=${optionSelected}`

    getAxios(url, headers, setData, setLoading, setError)
  }, [triggerReporte])

  return (
    <MenuLateral>
      <Reporte
        loadingApiPDF={loading}
        apiFiltros={tipoPagoAPI}
        tittleFiltro='Tipo de pago:'
        apiReporte={data}
        nombreReporte='Deudas'
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        triggerReporte={triggerReporte}
        setTriggerReporte={setTriggerReporte}
        idReporte={2}
      >
        <DeudasPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default Deudas
