import { useState, useEffect, useContext } from 'react'
import MenuLateral from '@/components/MenuLateral'
import { Button, ConfigProvider, message, Steps } from 'antd'
import './InscribirAlumno.scss'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  DEFAULT_VALUES_DATOS_ESTUDIANTE,
  FORM_SCHEMA_DATOS_ESTUDIANTE
} from './Forms/constants/DatosEstudianteConstans'
import {
  DEFAULT_VALUES_DATOS_PADRE,
  FORM_SCHEMA_DATOS_PADRE
} from './Forms/constants/DatosPadreConstans'
import {
  DEFAULT_VALUES_DATOS_MADRE,
  FORM_SCHEMA_DATOS_MADRE
} from './Forms/constants/DatosMadreConstans'
import {
  DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA,
  FORM_SCHEMA_DATOS_FAMILIAR_EXTRA
} from './Forms/constants/DatosFamiliarExtraConstans'
import DatosEstudiante from './Forms/DatosEstudiante'
import DatosPadre from './Forms/DatosPadre'
import DatosMadre from './Forms/DatosMadre'
import DatosFamiliarExtra from './Forms/DatosFamiliarExtra'
import ApoderadoContext from '@/contexts/FomularioContext'
import { postAxiosWithReturn } from '@/functions/methods'
import { INCRIRIBIR_ALUMNO_API } from '@/api/ApiRutas'
import AuthContext from '@/contexts/AuthContext'
import Confirmación from './Confirmación'
import { useNavigate } from 'react-router-dom'

const removeSuffix = (data, suffix) => {
  const result = {}
  for (const key in data) {
    if (key.endsWith(suffix)) {
      result[key.slice(0, -suffix.length)] = data[key]
    }
  }
  return result
}

const InscribirAlumno = () => {
  let { authTokens } = useContext(AuthContext)
  let { apoderadoPadre, setApoderadoPadre, apoderadoMadre, setApoderadoMadre } =
    useContext(ApoderadoContext)

  const navigate = useNavigate()

  const [current, setCurrent] = useState(0)
  const [formDataEstudiante, setFormDataEstudiante] = useState(
    DEFAULT_VALUES_DATOS_ESTUDIANTE
  )
  const [formDataPadre, setFormDataPadre] = useState(DEFAULT_VALUES_DATOS_PADRE)
  const [formDataMadre, setFormDataMadre] = useState(DEFAULT_VALUES_DATOS_MADRE)
  const [formDataFamiliarExtra, setFormDataFamiliarExtra] = useState(
    DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA
  )
  const [loading, setLoading] = useState(false)

  const getDefaultValues = (step) => {
    switch (step) {
      case 0:
        return DEFAULT_VALUES_DATOS_ESTUDIANTE
      case 1:
        return DEFAULT_VALUES_DATOS_PADRE
      case 2:
        return DEFAULT_VALUES_DATOS_MADRE
      case 3:
        return DEFAULT_VALUES_DATOS_FAMILIAR_EXTRA
      default:
        return {}
    }
  }

  const formSchema = z.object(
    current === 0
      ? FORM_SCHEMA_DATOS_ESTUDIANTE
      : current === 1
      ? FORM_SCHEMA_DATOS_PADRE
      : current === 2
      ? FORM_SCHEMA_DATOS_MADRE
      : FORM_SCHEMA_DATOS_FAMILIAR_EXTRA
  )

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(current)
  })

  let paginado = [
    {
      title: 'Datos del estudiante',
      content: <DatosEstudiante control={form.control} />
    },
    {
      title: 'Datos del padre',
      content: <DatosPadre control={form.control} />
    },
    {
      title: 'Datos de la madre',
      content: <DatosMadre control={form.control} />
    }
  ]

  if (!apoderadoPadre && !apoderadoMadre) {
    paginado = [
      ...paginado.slice(0, 3),
      {
        title: 'Datos del familiar extra',
        content: <DatosFamiliarExtra control={form.control} />
      },
      ...paginado.slice(3)
    ]
  }

  paginado.push({
    title: 'Finalizar',
    content: (
      <Confirmación
        formDataEstudiante={formDataEstudiante}
        formDataPadre={formDataPadre}
        formDataMadre={formDataMadre}
        loading={loading}
      />
    )
  })

  useEffect(() => {
    form.reset(getDefaultValues(current))
  }, [current])

  const steps = paginado

  const next = async (values) => {
    switch (current) {
      case 0:
        setFormDataEstudiante({ ...formDataEstudiante, ...values })
        break
      case 1:
        setFormDataPadre({ ...formDataPadre, ...values })
        setApoderadoPadre(values.apoderado_1)
        break
      case 2:
        setFormDataMadre({ ...formDataMadre, ...values })
        setApoderadoMadre(values.apoderado_2)
        break
      case 3:
        setFormDataFamiliarExtra({ ...formDataFamiliarExtra, ...values })
        break
      default:
        break
    }
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onSubmit = async () => {
    try {
      const estudianteData = formDataEstudiante
      const padreData = removeSuffix(formDataPadre, '_1')
      const madreData = removeSuffix(formDataMadre, '_2')
      const familiarExtraData = removeSuffix(formDataFamiliarExtra, '_3')

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const data = {
        alumno: estudianteData,
        familiares: [padreData, madreData]
      }

      if (!apoderadoPadre && !apoderadoMadre) {
        data.familiares.push(familiarExtraData)
      }

      const response = await postAxiosWithReturn(
        INCRIRIBIR_ALUMNO_API,
        data,
        headers,
        setLoading
      )

      const id = response.alumno.id_alumno
      console.log(id)
      navigate(`/pagos/${id}/4`)
    } catch (error) {
      message.error(error.message)
      console.error('Error al enviar formulario:', error)
    }
  }

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title
  }))

  const contentStyle = {
    textAlign: 'center',
    color: '#F9F9F9',
    backgroundColor: '#D9D9D9',
    border: '0.5px solid #C9C9C9',
    marginTop: 16
  }

  return (
    <MenuLateral>
      <form
        className='inscribir-alumno overflow-auto h-full'
        onSubmit={form.handleSubmit(
          current < steps.length - 1 ? next : onSubmit
        )}
      >
        <ConfigProvider>
          <Steps
            size='small'
            current={current}
            items={items}
            responsive={false}
          />
        </ConfigProvider>
        <div style={contentStyle}>{steps[current].content}</div>
        <div className='flex justify-end py-3'>
          {current > 0 && (
            <Button
              className='rounded-none'
              style={{ margin: '0 8px' }}
              onClick={() => prev()}
            >
              Atrás
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className='rounded-none' htmlType='submit' type='primary'>
              Siguiente
            </Button>
          )}
          {current === steps.length - 1 && (
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorBgContainerDisabled: '#8E8E8E'
                  }
                }
              }}
            >
              <Button
                className='rounded-none'
                disabled={loading}
                htmlType='submit'
                type='primary'
              >
                Crear
              </Button>
            </ConfigProvider>
          )}
        </div>
      </form>
    </MenuLateral>
  )
}

export default InscribirAlumno
