import dayjs from 'dayjs'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import { convertValuesToUpperCase } from '@/functions/convertValuesToUpperCase'

const Confirmación = (props) => {
  const { formDataEstudiante, formDataPadre, formDataMadre, loading } = props

  const formDataEstudianteUpper = convertValuesToUpperCase(formDataEstudiante)
  const formDataPadreUpper = convertValuesToUpperCase(formDataPadre)
  const formDataMadreUpper = convertValuesToUpperCase(formDataMadre)

  const fecha_nacimiento = dayjs(
    formDataEstudianteUpper.fecha_nacimiento
  ).format('DD/MM/YYYY')

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
                {formDataEstudianteUpper.dni}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataEstudianteUpper.nombres}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataEstudianteUpper.apellido_paterno}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataEstudianteUpper.apellido_materno}
              </p>
              <p>
                <span className='font-medium'>F. Nacimiento:</span>{' '}
                {fecha_nacimiento}
              </p>
              <p>
                <span className='font-medium'>Domicilio:</span>{' '}
                {formDataEstudianteUpper.direccion}
              </p>
            </div>
          </div>
          <div className='grid grid-rows-[auto,1fr] border-[#6b8ba4e6] border-b-[1px]'>
            <div className='p-3 flex justify-between border-[#003862] border-b-[1px] border-dashed'>
              <p className='font-medium'>Padre:</p>
              <p>
                <span className='font-medium'>DNI:</span>{' '}
                {formDataPadreUpper.dni_1}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataPadreUpper.nombres_1}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataPadreUpper.apellido_paterno_1}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataPadreUpper.apellido_materno_1}
              </p>
              <p>
                <span className='font-medium'>Telefono: </span>{' '}
                {formDataPadreUpper.telefono_1}
              </p>
            </div>
          </div>
          <div className='grid grid-rows-[auto,1fr]'>
            <div className='p-3 flex justify-between border-[#003862] border-b-[1px] border-dashed'>
              <p className='font-medium'>Madre:</p>
              <p>
                <span className='font-medium'>DNI:</span>{' '}
                {formDataMadreUpper.dni_2}
              </p>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)] p-3 gap-5 text-left'>
              <p>
                <span className='font-medium'>Nombre:</span>{' '}
                {formDataMadreUpper.nombres_2}
              </p>
              <p>
                <span className='font-medium'>Ap. Paterno:</span>{' '}
                {formDataMadreUpper.apellido_paterno_2}
              </p>
              <p>
                <span className='font-medium'>Ap. Materno:</span>{' '}
                {formDataMadreUpper.apellido_materno_2}
              </p>
              <p>
                <span className='font-medium'>Telefono: </span>{' '}
                {formDataMadreUpper.telefono_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmación

Confirmación.propTypes = {
  formDataEstudiante: PropTypes.object,
  formDataPadre: PropTypes.object,
  formDataMadre: PropTypes.object,
  loading: PropTypes.bool
}
