import React, { useState } from "react";
import { Modal } from "antd";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../../../../components/Modal/Modal.scss";
import { AwardIcon } from "lucide-react";
import axios from "axios";
const FormSchema = z.object({
  reason: z
    .string()
    .min(3, {
      message: "Minimo 3 dígitos",
    })
    .max(100, {
      message: "Maximo 100",
    }),
  personaId: z.string().min(3, {
    message: "Minimo 3 dígitos",
  }),
  personaToken: z.string().min(3, {
    message: "Minimo 3 dígitos",
  }),
  documentId: z.string().min(3, {
    message: "Minimo 3 dígitos",
  }),
});
const ModalAnulacion = (props) => {
  //Contraseña para el permiso de anulaciónde boletas
  const accesPassword = "jawni123";
  const { anular, setAnular, reload, setReload, titulo, idDocument } = props;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      personaId: "665248a370419f0015e8a074",
      personaToken:
        "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
      documentId: idDocument,
      reason: "",
    },
  });

  const handleOk = () => {
    form.handleSubmit(ConfirmarAdmins)();
    //setModalSucessfull(false);
    setReload(!reload);
  };

  //FUNCIÓN PARA CANCELAR LA OPERACIÓN Y RESETAERA EL FORMULARIOS
  function handleCancel() {
    setAnular(false);
    form.reset();
  }

  //MOSTRAR Y ENVIAR LOS VALORES QUE ESTÁN EN EL FORMULARIOS
  async function ConfirmarAdmins(values) {
    const ANULACION = values;
    try {
      console.log(values);
      const responses = await axios.post(
        "https://back.apisunat.com/personas/v1/voidBill",
        ANULACION
      );
      console.log("operacion exitosa:", responses.data);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  }

  return (
    <Modal
      closable={false}
      className="modal-permiso"
      title={titulo}
      centered
      style={{
        height: "30vh",
        background: "#003862",
        //paddingTop: "-10px",
        color: "black",

        //display: "flex",
      }}
      width={360}
      closeIcon={false}
      open={anular}
      okText="Aceptar"
      okType="submit"
      cancelText="Cancelar"
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(ConfirmarAdmins)}>
          <Formulario
            form={form}
            nameLabel="Razon de anulación:"
            parametros="reason"
            type=""
          />
        </form>
      </Form>
    </Modal>
  );
};

export default ModalAnulacion;
