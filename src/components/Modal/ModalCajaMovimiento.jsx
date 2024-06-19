import React, { useState } from "react";
import { useEffect, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import "./ModalCajaMovimiento.scss";
import { Modal } from "antd";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "./Modal.scss";
import { Button } from "../ui/button";
import { postAxios, postAxiosPrueba } from "@/functions/methods";
import { MoviemientoAPI } from "@/api/ApiRutas";
const FormSchemaI = z.object({
  descripcion: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  fecha: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  total: z.string().min(0, {
    message: "Campo Obligatorio",
  }),
  monto: z.string().min(1, {
    message: "Campo Obligatorio",
  }),
  tipo_movimiento: z.enum(
    ["INGRESO", "EGRESO", "ingreso", "egreso", "Ingreso", "Egreso"],
    {
      errorMap: () => ({ message: "Debe ser 'INGRESO' o 'EGRESO'" }),
    }
  ),
  id_apertura: z.number().min(1, {
    message: "Campo Obligatorio",
  }),
});
const ModalCajaMovimiento = (props) => {
  const { isModalOpen, setIsModalOpen, CajaActiva, total, id } = props;
  const formI = useForm({
    resolver: zodResolver(FormSchemaI),
    defaultValues: {
      descripcion: "",
      fecha: "",
      monto: "",
      total: "",
      tipo_movimiento: "",
      id_apertura: id || "",
    },
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
  const [reload, setReload] = useState(false);
  const [modalSucessfull, setModalSucessfull] = useState(false);
  let { authTokens } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  //Para actualizar la pagaina después del post o del put
  function recargar() {
    window.location.reload();
    setReload(false);
  }
  //
  if (reload) {
    recargar();
  }
  async function onClick(values) {
    console.log(values);
    setIsModalOpen(false);
    values.tipo_movimiento = values.tipo_movimiento.toUpperCase();
    if (values.tipo_movimiento == "INGRESO") {
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
    setReload(true);
  }
  return (
    <>
      <Modal
        className="modal-simple"
        title="Nuevo Movimiento :"
        centered
        width={360}
        style={{
          height: "400px",
          background: "#003862",
          //paddingTop: "-10px",
          color: "black",

          //display: "flex",
        }}
        closeIcon={false}
        open={isModalOpen}
        okButtonProps={{ style: { display: "none" } }}
        okText="Registrar"
        okType="submit"
        //onOk={handleOk}
        onCancel={() => {
          handleCancel(), ResetFormI();
        }}
      >
        <Form {...formI}>
          <form onSubmit={formI.handleSubmit(onClick)}>
            <div className="hola">
              <Formulario
                form={formI}
                nameLabel="Descripcion:"
                parametros="descripcion"
              />
              <Formulario
                form={formI}
                nameLabel="Tipo de movimiento:"
                parametros="tipo_movimiento"
              />
              <Formulario
                form={formI}
                nameLabel="Monto:"
                parametros="monto"
                type="number"
              />
            </div>
            <Button className="mt-5" type="button" onClick={handleSubmitForm}>
              Guardar
            </Button>
            <Button
              className="mt-5 ml-10 bg-red-boton"
              type="button"
              onClick={ResetFormI}
            >
              Vaciar
            </Button>
          </form>
        </Form>
      </Modal>
    </>
  );
};
export default ModalCajaMovimiento;
