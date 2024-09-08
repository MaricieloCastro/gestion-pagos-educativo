import { useContext, useEffect, useState } from 'react'

import MenuLateral from '@/components/MenuLateral'
import Reporte from '../../components/Reporte'

import { reporteDeudasAPI, tipoPagoAPI } from '@/api/ApiRutas'
import DeudasPDF from '../../components/PDF/DeudasPDF'
import AuthContext from '@/contexts/AuthContext'
import { getAxios } from '@/functions/methods'

const Deudas = () => {
  let { authTokens } = useContext(AuthContext)
  const [optionSelected, setOptionSelected] = useState('')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteDeudasAPI}/?nombre=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }, [])

  const handleClickAplicar = () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens.access)
    }

    let url = `${reporteDeudasAPI}/?nombre=${optionSelected}`

    getAxios(url, headers, setData, setLoading)
  }

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
        idReporte={2}
        activeRangePicker={false}
        handleClickAplicar={handleClickAplicar}
      >
        <DeudasPDF data={data} />
      </Reporte>
    </MenuLateral>
  )
}

export default Deudas
