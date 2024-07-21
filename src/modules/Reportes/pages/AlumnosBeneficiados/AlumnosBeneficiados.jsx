import React, { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { beneficioAPI, reporteBeneficiadosAPI } from '@/api/ApiRutas'
import DeudasPDF from '../../components/PDF/DeudasPDF'
import { getAxios } from '@/functions/methods'
import AuthContext from '@/contexts/AuthContext'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import AlumnosBeneficiadosPDF from '../../components/PDF/AlumnosBeneficiadosPDF'

const AlumnosBeneficiados = () => {
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

    let url = `${reporteBeneficiadosAPI}/?beneficio=${optionSelected}`

    getAxios(url, headers, setData, setLoading, setError)
  }, [triggerReporte])

  return (
    <MenuLateral>
      <Reporte
        loadingApiPDF={loading}
        apiFiltros={beneficioAPI}
        tittleFiltro='Beneficio:'
        apiReporte={data}
        nombreReporte='Beneficios'
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        triggerReporte={triggerReporte}
        setTriggerReporte={setTriggerReporte}
        idReporte={3}
      >
        <AlumnosBeneficiadosPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default AlumnosBeneficiados
