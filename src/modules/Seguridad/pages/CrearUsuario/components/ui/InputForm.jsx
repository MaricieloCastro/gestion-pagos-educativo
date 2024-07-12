import { useState, useEffect, useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Formulario from './formulario'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import './formUsario.scss'

import { PlusOutlined } from '@ant-design/icons'
//Enlaces
import { Link } from 'react-router-dom'
//Para la imagen
//Radio
import { RadioGroupForm } from './RadioGroupForm'
//Componenete tipo de usuario
import { SelectForm } from './SelectForm'
import { Input } from '@/components/ui/input'
//Calendario
import Calendario from '../../compenetes/reuse/Calendario'
//API
import { postAxios } from '@/functions/methods'
import AuthContext from '@/contexts/AuthContext'
import {
  TIPOUSUARIOURL,
  SEXOURL,
  CONFIRMACIONURL,
} from '../../compenetes/reuse/ConstObj'
//Modals
import ModaForm from '../../compenetes/Modal/ModalForm'
// Lógica del componente
const FormSchema = z.object({
  //Contra cuátos caracteres hay en el input
  nombres: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  // APpaterno: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  // APmaterno: z.string().min(1, {
  //   message: "Campo Obligatorio",
  // }),
  dni: z.string().min(8, {
    message: 'Campo Obligatorio',
  }),
  celular: z.string().min(9, {
    message: 'Campo Obligatorio',
  }),
  domicilio: z.string().min(10, {
    message: 'Campo Obligatorio',
  }),
  edad: z.string().min(2, {
    message: 'Campo Obligatorio',
  }),
  email: z.string().min(10, {
    message: 'Campo Obligatorio',
  }),
  sexo: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  username: z.string().min(8, {
    message: 'Campo Obligatorio',
  }),
  password: z.string().min(8, {
    message: 'Campo Obligatorio',
  }),
  id_tipo_usuario: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  fecha_nacimiento: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  apellido_paterno: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  apellido_materno: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
  ruta_fotografia: z.string(),
  usuario_responsable: z.string().min(1, {
    message: 'Campo Obligatorio',
  }),
})
import { putAxios } from '@/functions/methods'
import { Mail, User } from 'lucide-react'
//Lógica de programación
function onSubmit(data) {
  toast({
    title: 'You submitted the following values:',
    description:
      '<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">' +
      '<code className="text-white">' +
      JSON.stringify(data, null, 2) +
      '</code>' +
      '</pre>',
  })
}

export default function InputFormI(props) {
  let { authTokens, user } = useContext(AuthContext)
  const [reload, setReload] = useState(true)
  const [usuario, setUsuarios] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + String(authTokens.access),
  }

  //PROPS
  const {
    disabled,
    ButtonView,
    textButton,
    usuarios,
    load,
    edad,
    tipoUsuario,
  } = props
  //DESILACHADO("NO SÉ ESCRIBIR DECONSTRUCTURING")

  const {
    id,
    nombres,
    apellido_materno,
    apellido_paterno,
    dni,
    celular,
    domicilio,
    email,
    sexo,
    username,
    password,
    tipo_usuario,
    fecha_nacimiento,
    uuid,
    ruta_fotografia,
  } = usuarios || {}

  //HOOK DE FORMULARIO
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombres: nombres || '',
      apellido_paterno: apellido_paterno || '',
      apellido_materno: apellido_materno || '',
      dni: dni || '',
      celular: celular || '',
      domicilio: domicilio || '',
      edad: edad || '',
      email: email || '',
      sexo: sexo || '',
      username: username || '',
      password: password || '',
      id_tipo_usuario: tipo_usuario.nombre,
      fecha_nacimiento: fecha_nacimiento || '',
      ruta_fotografia: '',
      usuario_responsable: user.username || '',
    },
  })

  // console.log("1: ", ruta_fotografia)

  //PARA LOS MÉTODOS
  const url = 'http://127.0.0.1:8000/api/usuario/'
  const urlUp = `/login/update/${uuid}`
  const [open, setOpen] = useState(false)
  function Methods(values) {
    const contraseña = values.password
    const usuario = values.username
    for (let clave in values) {
      // Verificar si el valor es una cadena
      if (typeof values[clave] === 'string') {
        // Convertir a mayúsculas y actualizar el valor en el objeto
        values[clave] = values[clave].toUpperCase()
      }
    }
    const data = values
    values.password = contraseña
    values.username = usuario
    console.log('foto: ', values.ruta_fotografia)
    if (data.id_tipo_usuario == 'SECRETARIA') {
      data.id_tipo_usuario = '2'
    } else {
      data.id_tipo_usuario = '1'
    }
    if (load == true) {
      postAxios(url, data, headers, setReload, reload, setError)
    }
    const Nurl = `http://127.0.0.1:8000/api/usuario/${id}/`
    putAxios(Nurl, data, headers, setReload, reload, setError, setOpen)
  }
  //Para mostrar o no el boton según la página
  const [mostrarBoton, setMostrarBoton] = useState(true)
  useEffect(() => {
    // Lógica para determinar si mostrar o no el botón
    const usuarioEnInicio = ButtonView // Cambia esto a tu lógica real
    if (usuarioEnInicio) {
      setMostrarBoton(true)
    } else {
      setMostrarBoton(false)
    }
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(Methods)} encType='multipart/form-data'>
        <div className='fotografia'>
          <img src={ruta_fotografia} alt='foto-perfil' />
          <div className='flex gap-2 justify-center items-center pt-2 cursor-pointer'>
            <label
              htmlFor='ruta_fotografia'
              className='cursor-pointer text-[14px] bg-[#C1C1C1] p-[4.5px]'
            >
              Adjuntar Fotografia
            </label>

            {/* <InputFile /> */}
            {/* <div className="relative w-7 h-7 bg-[#003862] rounded-sm">
              <PlusOutlined className="text-[#fff] absolute left-[5.5px] top-[5.5px]" />
              <input type="file" name="ruta_fotografia" id="ruta_fotografia" className="absolute w-7 h-7 opacity-0" />
            </div> */}
            <FormField
              control={form.control}
              name='ruta_fotografia'
              render={({ field }) => (
                //Nombre
                <FormItem>
                  <FormLabel>fotografia</FormLabel>
                  <FormControl>
                    <input {...field} type='file' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Este es la sección del contenedor */}
        <div className='usario-datos'>
          <h2>DATOS PERSONALES: </h2>
          <div className='usario-datos_nombres'>
            {/* Inp Nombres */}
            <Formulario
              form={form}
              nameLabel='Nombres:'
              parametros='nombres'
              disabled={disabled}
              dato={nombres}
            />
            <Formulario
              form={form}
              nameLabel='Apellido Paterno:'
              parametros='apellido_paterno'
              disabled={disabled}
              dato={apellido_paterno}
            />
            <Formulario
              form={form}
              nameLabel='Apellido Materno:'
              parametros='apellido_materno'
              disabled={disabled}
              dato={apellido_materno}
            />
          </div>
          <div className='usario-datos_nombres'>
            <Formulario
              form={form}
              nameLabel='DNI:'
              parametros='dni'
              disabled={disabled}
              dato={dni}
            />
            <Formulario
              form={form}
              nameLabel='Telefono:'
              parametros='celular'
              dato={celular}
            />
            <Formulario
              form={form}
              nameLabel='Dirección:'
              parametros='domicilio'
              dato={domicilio}
            />
          </div>
          <div className='usario-datos_nombres'>
            <FormField
              control={form.control}
              name=''
              render={({ field }) => (
                //Dirección
                <FormItem>
                  <FormLabel>Sexo:</FormLabel>
                  <FormControl>
                    <div className='radio-label'>
                      <RadioGroupForm
                        form={form}
                        dato={sexo}
                        disabled={disabled}
                        url={SEXOURL}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='usario-datos_nombres-edad'>
              <Calendario
                form={form}
                nameLabel='F.de Nacimiento:'
                dato={fecha_nacimiento}
                disabled={disabled}
                name={fecha_nacimiento}
              />
              <Formulario
                form={form}
                nameLabel='Edad:'
                parametros='edad'
                disabled={disabled}
                dato={20}
              />
            </div>
            <Formulario
              form={form}
              nameLabel='Correo:'
              parametros='email'
              dato={email}
            />
          </div>
        </div>
        <div className='usario-datos_perfil'>
          <h2>DATOS DEL PERFIL: </h2>
          <div className='usario-datos_nombres'>
            <Formulario
              form={form}
              nameLabel='Usuario:'
              parametros='username'
              disabled={false}
              dato={username}
            />
            <Formulario
              form={form}
              nameLabel='Contraseña:'
              parametros='password'
              type='password'
              disabled={false}
              dato={password}
            />
            <SelectForm
              form={form}
              dato={tipo_usuario}
              disabled={disabled}
              tipoUsuario={tipoUsuario}
              url={TIPOUSUARIOURL}
              nameLabel='Tipo de Usuario:'
              parametros='id_tipo_usuario'
            />
          </div>
        </div>
        <div className='botones'>
          {mostrarBoton && ( // Renderiza el botón solo si mostrarBoton es true
            <div className='cambiar-contraseña'>
              <Link to={urlUp}>
                <Button
                  className={buttonVariants({
                    variant: 'default',
                    className: 'rounded-sm bg-blue-claro mr-5',
                  })}
                  type='button'
                >
                  CAMBIAR CONTRASEÑA
                </Button>
              </Link>
            </div>
          )}
          <Button
            className={buttonVariants({
              variant: 'default',
              className: 'rounded-sm bg-green-boton w-100  ',
            })}
            type='submit'
          >
            <PlusOutlined />
            {textButton}
          </Button>
          <ModaForm open={open} setOpen={setOpen} />
        </div>
      </form>
    </Form>
  )
}
