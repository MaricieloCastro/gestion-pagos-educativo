import { CONFIGURACION_API } from '@/api/ApiRutas'
import AuthContext from '@/contexts/AuthContext'
import { getAxiosSimple } from '@/functions/methods'
import { ConfigProvider, Select, Space } from 'antd'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'

const SelectAsyncFormularios = (props) => {
  let { authTokens } = useContext(AuthContext)
  const {
    field,
    fieldState,
    name,
    placeholder,
    disabled,
    tabla = null,
    urlAPI = null
  } = props

  const [options, setOptions] = useState(null)
  const [newOPTIONS, setNewOPTIONS] = useState([])

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + String(authTokens?.access)
    }

    if (tabla !== null) {
      const url = `${CONFIGURACION_API}=${tabla}`

      getAxiosSimple(url, headers, setOptions)
    }

    if (urlAPI !== null) {
      getAxiosSimple(urlAPI, headers, setOptions)
    }
  }, [authTokens, tabla, urlAPI])

  useEffect(() => {
    if (options === null) return

    if (tabla !== null) {
      const newValues = options
        ?.filter((option) => option.estado === true)
        .map((option) => ({
          value: option.nombre,
          label: option.nombre
        }))

      setNewOPTIONS(newValues)
    }

    if (urlAPI !== null) {
      const newValues = options
        ?.filter((option) => option.estado === true)
        .map((option) => ({
          value: option.id,
          label: option.nombre
        }))

      setNewOPTIONS(newValues)
    }
  }, [options, tabla, urlAPI])

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none'
        },
        components: {
          Select: {
            colorTextQuaternary: '#B9B9B9',
            colorTextPlaceholder: '#B9B9B9',
            colorText: 'black',
            colorBgElevated: 'white',
            controlItemBgActive: '#CACACA',
            controlItemBgHover: '#EBEBEB',
            colorBorder: 'white',
            colorBgContainerDisabled: '#485e6e',
            colorTextDisabled: '#DBDBDB'
          }
        }
      }}
    >
      <Space
        direction='vertical'
        size='middle'
        className={`w-full ${
          !fieldState.error
            ? 'ring-2 ring-[#1e40af] focus:ring-[#1877F2]'
            : 'ring-2 ring-red-500 focus:ring-red-500'
        }`}
      >
        <Space.Compact size='large' className='w-full' direction='vertical'>
          {options ? (
            <Select
              {...field}
              id={name}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              options={newOPTIONS}
              style={{ width: '100%' }}
            />
          ) : (
            <input
              className={`block w-full py-1.5 px-2 ${
                disabled ? '#A4A4A4' : 'text-gray-900'
              } shadow-sm ring-1 ring-inset h-10 ${
                !fieldState.error
                  ? 'ring-gray-300 focus:ring-[#1877F2] focus:border-0'
                  : 'ring-red-500 focus:ring-red-500'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:outline-none sm:text-sm sm:leading-6 `}
              disabled={true}
              value='CARGANDO...'
              // style={style}
            />
          )}
        </Space.Compact>
      </Space>
    </ConfigProvider>
  )
}

export default SelectAsyncFormularios

SelectAsyncFormularios.propTypes = {
  field: PropTypes.object,
  fieldState: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  tabla: PropTypes.string,
  urlAPI: PropTypes.string
}
