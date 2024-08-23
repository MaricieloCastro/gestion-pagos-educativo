import FormController from '@/modules/DatosAlumno/pages/InscribirAlumno/components/FormController'
import './FormSeguridad.scss'
import ImageProfile from './ImageProfile'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { data } from '../../pages/PerfilPrueba/data/PerfilData'
import { dataCrear } from '../../pages/CrearUsuarioPrueba/data/CrearUsuarioData'
import ButtonFormSeguridad from '../ButtonFormSeguridad'
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '@/contexts/AuthContext'
import { getAxios, patchModal, postAxiosPrueba } from '@/functions/methods'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import ModalCarga from '@/components/Modal/ModalCarga'
import { useNavigate } from 'react-router-dom'
import { dataInfo } from '../../pages/InformacionUsuarioPrueba/data/InformacionUsuarioData'

const FormSeguridad = (props) => {
  const { user, authTokens } = useContext(AuthContext)

  const { edit, editAdmin, DEFAULT_VALUES, FORM_SCHEMA } = props
  const navigate = useNavigate()

  const [valueInputPhoto, setValueInputPhoto] = useState('')

  const [userAPI, setUserAPI] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [modalLoading, setModalLoading] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalError, setModalError] = useState(false)

  const [loadingCrear, setLoadingCrear] = useState(false)
  const [modalSuccessCrear, setModalSuccessCrear] = useState(false)
  const [modalErrorCrear, setModalErrorCrear] = useState(false)

  const formSchema = z.object(FORM_SCHEMA)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES
  })

  const dataPersonal = data.slice(0, 9)
  const dataUser = data.slice(9, 12)

  const dataPersonalCrear = dataCrear.slice(0, 9)
  const dataUserCrear = dataCrear.slice(9, 13)

  const dataPersonalAdmin = dataInfo.slice(0, 9)
  const dataUserAdmin = dataInfo.slice(9, 13)

  useEffect(() => {
    if (edit) {
      const actualizarDefault = async () => {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + String(authTokens?.access)
        }

        const url = `http://localhost:8000/api/usuario/${user?.user_id}`

        await getAxios(url, headers, setUserAPI, setLoading, setError)
      }

      actualizarDefault()
    } else {
      setLoading(true)
    }
  }, [authTokens, user?.user_id, edit])

  useEffect(() => {
    if (userAPI) {
      const newDefaults = {
        nombres: userAPI?.nombres || '',
        apellido_paterno: userAPI?.apellido_paterno || '',
        apellido_materno: userAPI?.apellido_materno || '',
        dni: userAPI?.dni || '',
        celular: userAPI?.celular || '',
        domicilio: userAPI?.domicilio || '',
        sexo: userAPI?.sexo || '',
        fecha_nacimiento: userAPI?.fecha_nacimiento || '',
        email: userAPI?.email || '',
        username: userAPI?.username || '',
        password: userAPI?.password || '',
        id_tipo_usuario: userAPI?.tipo_usuario?.id || ''
      }

      form.reset(newDefaults)
    }
  }, [userAPI, form])

  const cambiarContrasenia = () => {
    const uuid = userAPI.uuid
    const urlUp = `/login/update/${uuid}/`
    navigate(urlUp)
  }

  const onSubmit = async (values) => {
    if (edit) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const url = `http://localhost:8000/api/usuario/${user?.user_id}/`

      await patchModal(
        url,
        values,
        headers,
        setModalLoading,
        setModalSuccess,
        setModalError
      )

      navigate('/lista-alumnos/')

      console.log('newValues', values)
    } else {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const url = `http://localhost:8000/api/usuario/`

      const newValues = {
        ...values,
        ruta_fotografia:
          'https://ontrust-cm.culturadelalegalidad.net/sites/default/files/participantes/profile_pics/anonimo.jpg'
      }

      await postAxiosPrueba(
        url,
        newValues,
        headers,
        setLoadingCrear,
        setModalSuccessCrear,
        setModalErrorCrear
      )

      navigate('/panel/lista-usuarios/')
    }
  }

  return loading ? (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='form-seguridad bg-[#d9d9d9] gap-3 p-3'
      >
        <div className='flex justify-center items-center'>
          <ImageProfile
            valueInputPhoto={valueInputPhoto}
            src={userAPI.ruta_fotografia}
          />
        </div>
        <div className='form-seguridad__datos-personales text-white bg-[#001f36] p-3 gap-3'>
          <div>
            <p>DATOS PERSONALES:</p>
          </div>
          <div className='form-seguridad__datos-personales-inputs gap-2'>
            {editAdmin
              ? dataPersonalAdmin.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))
              : edit
              ? dataPersonal.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))
              : dataPersonalCrear.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))}
          </div>
        </div>
        <div className='form-seguridad__datos-personales text-white bg-[#001f36] p-3 gap-3'>
          <div>
            <p>DATOS DE PERFIL:</p>
          </div>
          <div className='form-seguridad__datos-personales-inputs gap-2'>
            {/* {edit
              ? dataUser.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))
              : dataUserCrear.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))} */}
            {editAdmin
              ? dataUserAdmin.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))
              : edit
              ? dataUser.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))
              : dataUserCrear.map((item, index) => (
                  <FormController
                    key={index}
                    control={form.control}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    options={item?.options}
                    yearSpecial={item?.yearSpecial}
                  />
                ))}
          </div>
        </div>
        <div className='flex justify-end items-center gap-3'>
          {edit && (
            <ButtonFormSeguridad
              text='CAMBIAR CONTRASEÑA'
              htmlType='button'
              onClick={cambiarContrasenia}
            />
          )}
          <ButtonFormSeguridad
            icon={edit ? faSave : faPlus}
            text={edit ? 'GUARDAR' : 'CREAR'}
            htmlType='submit'
            style={1}
          />
        </div>
      </form>
      <ModalCarga modalLoading={modalLoading} titulo='Actualizando datos' />
      <ModalCarga modalLoading={loadingCrear} titulo='Creando usuario' />
    </>
  ) : (
    <div className='h-full bg-[#d9d9d9] gap-3 p-3 flex justify-center items-center'>
      <Spin indicator={<LoadingOutlined spin />} size='large' />
    </div>
  )
}

export default FormSeguridad
