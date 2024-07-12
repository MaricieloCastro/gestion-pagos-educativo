import { useEffect, useState } from 'react'
import axios from 'axios'
import { URLAPIUSUARIO } from '../../compenetes/reuse/ConstObj'
import InputFormI from './InputForm'
import { Spin } from 'antd'
import { Usuario } from '../../compenetes/reuse/ConstObj'
export default function ApiUser(props) {
  const { disabled, indice, ButtonView, textButton, load } = props
  const [usuarios, setUsuarios] = useState([])
  const [tipoUsuario, setTipoUsuario] = useState([])
  const [loading, setLoading] = useState(true)

  if (load == true) {
    return (
      <InputFormI
        usuarios={Usuario}
        disabled={disabled}
        indice={indice}
        ButtonView={ButtonView}
        textButton={textButton}
        load={load}
        edad=''
      ></InputFormI>
    )
  }
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(`${URLAPIUSUARIO}${indice}/`)
        const select = await axios.get(
          'http://127.0.0.1:8000/api/tipo_usuario/'
        )
        setUsuarios(response.data)
        setTipoUsuario(select.data)
        setLoading(false)
      } catch (error) {
        console.error('Error al obtener los usuarios:', error)
        setLoading(false)
      }
    }

    fetchUsuarios()
  }, [])
  if (loading) {
    return (
      <div className='h-full flex justify-center items-center'>
        <Spin />
      </div>
    )
  }

  return (
    <InputFormI
      usuarios={usuarios}
      disabled={disabled}
      indice={indice}
      ButtonView={ButtonView}
      textButton={textButton}
      load={load}
      tipoUsuario={tipoUsuario}
      edad='20'
    ></InputFormI>
  )
}
