import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '@/contexts/AuthContext';
import './ModalCajaMovimiento.scss';
import { Modal } from 'antd';
import { Form, FormField } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import './Modal.scss';
import { Button } from '../ui/button';
import { postAxiosPrueba } from '@/functions/methods';
import { MoviemientoAPI } from '@/api/ApiRutas';
import FormItem from 'antd/es/form/FormItem';
import Formulario from '@/modules/Seguridad/components/ui/Formulario';

import ListasContext from '@/contexts/ListasContext';
const FormSchemaI = z.object({
  descripcion: z.string().min(1, {
    message: 'Campo Obligatorio'
  }),
  fecha: z.string().min(0, {
    message: 'Campo Obligatorio'
  }),
  total: z.string().min(0, {
    message: 'Campo Obligatorio'
  }),
  monto: z.string().min(1, {
    message: 'Campo Obligatorio'
  }),
  tipo_movimiento: z.enum(
    ['INGRESO', 'EGRESO', 'ingreso', 'egreso', 'Ingreso', 'Egreso'],
    {
      errorMap: () => ({ message: "Debe ser 'INGRESO' o 'EGRESO'" })
    }
  ),
  id_apertura: z.number().min(1, {
    message: 'Campo Obligatorio'
  })
});
const ModalCajaMovimiento = (props) => {
  const { isModalOpen, setIsModalOpen, CajaActiva, total, id, setReloading } =
    props;
  let { reload, setReload } = useContext(ListasContext);
  const formI = useForm({
    resolver: zodResolver(FormSchemaI),
    defaultValues: {
      descripcion: '',
      fecha: '',
      monto: '',
      total: '',
      tipo_movimiento: '',
      id_apertura: id || ''
    }
  });

  //Para vaciar el formulario
  function ResetFormI() {
    formI.reset();
  }
  const handleSubmitForm = () => {
    formI.handleSubmit(onClick)();
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Para postear el nuevo movimiento
  const [general, setGeneral] = useState();
  const [loading, setLoading] = useState();
  const [modalSucessfull, setModalSucessfull] = useState(false);
  let { authTokens } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + String(authTokens.access)
  };
  //Para actualizar la pagaina después del post o del put
  async function onClick(values) {
    console.log(values);
    setIsModalOpen(false);
    values.tipo_movimiento = values.tipo_movimiento.toUpperCase();
    if (values.tipo_movimiento == 'INGRESO') {
      values.total = (Number(total) + Number(values.monto)).toString();
    } else {
      values.total = (Number(total) - Number(values.monto)).toString();
    }
    console.log(values);
    await postAxiosPrueba(
      MoviemientoAPI,
      values,
      headers,
      setLoading,
      setModalSucessfull
    );
    setReload(!reload);
  }
  return (
    <>
      <Modal
        className='modal-simple-movimiento'
        title='Nuevo Movimiento :'
        centered
        width={360}
        style={{
          height: '300px',
          background: '#003862',
          //paddingTop: "-10px",
          color: 'black'

          //display: "flex",
        }}
        closeIcon={false}
        open={isModalOpen}
        okButtonProps={{ style: { display: 'none' } }}
        okText='Registrar'
        okType='submit'
        //onOk={handleOk}
        onCancel={() => {
          handleCancel(), ResetFormI();
        }}
      >
        <Form {...formI}>
          <form onSubmit={formI.handleSubmit(onClick)}>
            <div className='movimientos'>
              <section className='movimientos-uno'>
                <FormField
                  control={formI.control}
                  name='tipo_movimiento'
                  render={({ field }) => (
                    <FormItem>
                      <label>Tipo de Movimiento:</label>
                      <select onChange={field.onChange}>
                        <option></option>
                        <option value='INGRESO'>INGRESO</option>
                        <option value='EGRESO'>EGRESO</option>
                      </select>
                    </FormItem>
                  )}
                />
                <Formulario
                  form={formI}
                  nameLabel='Monto:'
                  parametros='monto'
                  type='number'
                />
              </section>
              <section className='movimientos-dos'>
                <Formulario
                  form={formI}
                  nameLabel='Descripcion:'
                  parametros='descripcion'
                />
              </section>
            </div>
            <Button
              className='mt-5  bg-red-boton'
              type='button'
              onClick={ResetFormI}
            >
              Vaciar
            </Button>
            <Button
              className='mt-5 ml-10'
              type='button'
              onClick={handleSubmitForm}
            >
              Guardar
            </Button>
          </form>
        </Form>
      </Modal>
    </>
  );
};
export default ModalCajaMovimiento;
