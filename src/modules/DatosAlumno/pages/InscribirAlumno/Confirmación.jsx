import dayjs from 'dayjs'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Confirmación = (props) => {
  const { formDataEstudiante, formDataPadre, formDataMadre, loading } = props
  console.log(formDataEstudiante)

  const fecha_nacimiento = dayjs(formDataEstudiante.fecha_nacimiento).format(
    'DD/MM/YYYY'
  )

  return (
    <div className='h-full flex justify-center items-center p-10 '>
      <div className='border-[#6b8ba4e6] border-[1px] text-[#003862] relative'>
        {loading && (
          <div className='h-full w-full flex justify-center items-center p-10 bg-[#00000067] absolute'>
            <Spin
              indicator={<LoadingOutlined spin />}
              size='large'
              className='text-[#dfeefa]'
            />
          </div>
        )}
        <div className='grid grid-rows-[auto,auto] border-[#6b8ba4e6] border-b-[1px] bg-[#5f8db149]'>
          <p className='font-semibold text-lg p-10 py-4'>
            ¿Está seguro de crear el estudiante?
          </p>
        </div>
        <div className='grid'>
          <div className='grid grid-rows-[auto,1fr] border-[#6b8ba4e6] border-b-[1px]'>
            <div className='p-3 flex justify-between border-[#003862] border-b-[1px] border-dashed'>
              <p className='font-medium'>Alumno(a):</p>
              <p>
                <span className='font-medium'>DNI:</span>{' '}
                {formDataEstudiante.dni}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataEstudiante.nombres}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataEstudiante.apellido_paterno}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataEstudiante.apellido_materno}
              </p>
              <p>
                <span className='font-medium'>F. Nacimiento:</span>{' '}
                {fecha_nacimiento}
              </p>
              <p>
                <span className='font-medium'>Domicilio:</span>{' '}
                {formDataEstudiante.direccion}
              </p>
            </div>
          </div>
          <div className='grid grid-rows-[auto,1fr] border-[#6b8ba4e6] border-b-[1px]'>
            <div className='p-3 flex justify-between border-[#003862] border-b-[1px] border-dashed'>
              <p className='font-medium'>Padre:</p>
              <p>
                <span className='font-medium'>DNI:</span> {formDataPadre.dni_1}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataPadre.nombres_1}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataPadre.apellido_paterno_1}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataPadre.apellido_materno_1}
              </p>
              <p>
                <span className='font-medium'>Telefono: </span>{' '}
                {formDataPadre.telefono_1}
              </p>
            </div>
          </div>
          <div className='grid grid-rows-[auto,1fr]'>
            <div className='p-3 flex justify-between border-[#003862] border-b-[1px] border-dashed'>
              <p className='font-medium'>Madre:</p>
              <p>
                <span className='font-medium'>DNI:</span> {formDataMadre.dni_2}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataMadre.nombres_2}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataMadre.apellido_paterno_2}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataMadre.apellido_materno_2}
              </p>
              <p>
                <span className='font-medium'>Telefono: </span>{' '}
                {formDataMadre.telefono_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmación
