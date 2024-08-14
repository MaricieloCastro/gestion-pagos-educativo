import AuthContext from '@/contexts/AuthContext'
import { getAxiosSimple } from '@/functions/methods'
import { useContext, useEffect, useState } from 'react'

export const filterAdapterForms = (api) => {
  let { authTokens } = useContext(AuthContext)
  const [options, setOptions] = useState([])

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    }

    getAxiosSimple(api, headers, setOptions)
  }, [])

  const newOPTIONS = options
    .filter((option) => option.estado === true)
    .map((option) => ({
      value: option.id,
      label: option.nombre
    }))

  return newOPTIONS
}
