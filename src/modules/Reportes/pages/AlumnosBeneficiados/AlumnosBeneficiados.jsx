import { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { beneficioAPI, reporteBeneficiadosAPI } from '@/api/ApiRutas'
import { getAxios } from '@/functions/methods'
import AuthContext from '@/contexts/AuthContext'
import AlumnosBeneficiadosPDF from '../../components/PDF/AlumnosBeneficiadosPDF'

const AlumnosBeneficiados = () => {
  let { authTokens } = useContext(AuthContext)

  const [optionSelected, setOptionSelected] = useState('')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteBeneficiadosAPI}/?beneficio=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }, [])

  const handleClickAplicar = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteBeneficiadosAPI}/?beneficio=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }

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
        idReporte={3}
        activeRangePicker={false}
        handleClickAplicar={handleClickAplicar}
      >
        <AlumnosBeneficiadosPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default AlumnosBeneficiados
