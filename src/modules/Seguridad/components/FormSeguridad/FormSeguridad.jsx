import FormController from '@/modules/DatosAlumno/pages/InscribirAlumno/components/FormController'
import './FormSeguridad.scss'
import ImageProfile from '../../../../components/ImageProfile'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { data } from '../../pages/Perfil/data/PerfilData'
import { dataCrear } from '../../pages/CrearUsuario/data/CrearUsuarioData'
import ButtonFormSeguridad from '../ButtonFormSeguridad'
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '@/contexts/AuthContext'
import {
  getAxios,
  patchModalUpdateProfile,
  postAxiosPrueba
} from '@/functions/methods'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import ModalCarga from '@/components/Modal/ModalCarga'
import { useParams, useNavigate } from 'react-router-dom'
import { dataInfo } from '../../pages/InformacionUsuario/data/InformacionUsuarioData'
import PropTypes from 'prop-types'
import { convertValuesToUpperCase } from '@/functions/convertValuesToUpperCase'
import { renameFile } from '@/functions/renameFile'

const FormSeguridad = (props) => {
  let { user, authTokens, updateTokenProfile } = useContext(AuthContext)

  const {
    edit = false,
    editAdmin = false,
    crear = false,
    DEFAULT_VALUES,
    FORM_SCHEMA
  } = props
  const navigate = useNavigate()
  const { id } = useParams()

  const [fotoUpload, setFotoUpload] = useState(null)

  const [userAPI, setUserAPI] = useState([])
  const [userAdminAPI, setUserAdminAPI] = useState([])
  const [loading, setLoading] = useState(false)

  const [modalLoading, setModalLoading] = useState(false)

  const [loadingCrear, setLoadingCrear] = useState(false)

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

        await getAxios(url, headers, setUserAPI, setLoading)
      }

      actualizarDefault()
    }

    if (editAdmin) {
      const actualizarDefault = async () => {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + String(authTokens?.access)
        }

        const url = `http://localhost:8000/api/usuario/${id}`

        await getAxios(url, headers, setUserAdminAPI, setLoading)
      }

      actualizarDefault()
    }
  }, [authTokens, user?.user_id, edit, id, editAdmin])

  useEffect(() => {
    if (edit) {
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

    if (editAdmin) {
      const newDefaults = {
        nombres: userAdminAPI?.nombres || '',
        apellido_paterno: userAdminAPI?.apellido_paterno || '',
        apellido_materno: userAdminAPI?.apellido_materno || '',
        dni: userAdminAPI?.dni || '',
        celular: userAdminAPI?.celular || '',
        domicilio: userAdminAPI?.domicilio || '',
        sexo: userAdminAPI?.sexo || '',
        fecha_nacimiento: userAdminAPI?.fecha_nacimiento || '',
        email: userAdminAPI?.email || '',
        username: userAdminAPI?.username || '',
        password: userAdminAPI?.password || '',
        id_tipo_usuario: userAdminAPI?.tipo_usuario?.id || ''
      }

      form.reset(newDefaults)
    }
  }, [userAPI, form, userAdminAPI, edit, editAdmin])

  const cambiarContrasenia = () => {
    const uuid = userAPI.uuid
    const urlUp = `/login/update/${uuid}/`
    navigate(urlUp)
  }

  const onSubmit = async (values) => {
    const valuesUpperCase = convertValuesToUpperCase(values)

    if (edit) {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const url = `http://localhost:8000/api/update-profile-picture/${user?.user_id}/`

      if (fotoUpload !== null) {
        const newFile = renameFile(fotoUpload, valuesUpperCase.dni)

        valuesUpperCase.ruta_fotografia = newFile
      }

      console.log('valuesUpperCase', valuesUpperCase)

      const response = await patchModalUpdateProfile(
        url,
        valuesUpperCase,
        headers,
        setModalLoading
      )

      updateTokenProfile(response)

      window.location.reload()
    } else if (editAdmin) {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const url = `http://localhost:8000/api/usuario/${id}/`

      if (fotoUpload !== null) {
        const newFile = renameFile(fotoUpload, valuesUpperCase.dni)

        valuesUpperCase.ruta_fotografia = newFile
      }

      await patchModalUpdateProfile(
        url,
        valuesUpperCase,
        headers,
        setModalLoading
      )

      setFotoUpload(null)
    } else {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + String(authTokens?.access)
      }

      const url = `http://localhost:8000/api/usuario/`

      const newValues = {
        ruta_fotografia:
          fotoUpload && renameFile(fotoUpload, valuesUpperCase.dni),
        is_active: true,
        ...valuesUpperCase
      }

      await postAxiosPrueba(url, newValues, headers, setLoadingCrear)

      navigate('/panel/lista-usuarios/')
    }
  }

  return loading || crear ? (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='form-seguridad bg-[#d9d9d9] gap-3 p-3'
      >
        <div className='flex justify-center items-center'>
          <ImageProfile
            src={edit ? userAPI.ruta_fotografia : userAdminAPI.ruta_fotografia}
            setFotoUpload={setFotoUpload}
            edit={edit}
            editAdmin={editAdmin}
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
                  />
                ))}
          </div>
        </div>
        <div className='form-seguridad__datos-personales text-white bg-[#001f36] p-3 gap-3'>
          <div>
            <p>DATOS DE PERFIL:</p>
          </div>
          <div className='form-seguridad__datos-personales-inputs gap-2'>
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
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
                    tabla={item?.tabla}
                    urlAPI={item?.urlAPI}
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
            text={edit || editAdmin ? 'GUARDAR' : 'CREAR'}
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

FormSeguridad.propTypes = {
  edit: PropTypes.bool,
  editAdmin: PropTypes.bool,
  DEFAULT_VALUES: PropTypes.object,
  FORM_SCHEMA: PropTypes.object,
  crear: PropTypes.bool
}
