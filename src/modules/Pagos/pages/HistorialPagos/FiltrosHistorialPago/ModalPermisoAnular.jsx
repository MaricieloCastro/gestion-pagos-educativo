import React, { useState } from "react";
import { Modal } from "antd";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../../../../components/Modal/Modal.scss";
import axios from "axios";
const FormSchema = z.object({
  password: z.string().min(8, {
    message: "Minimo 8 dígitos",
  }),
});
const ModalPermisoAnular = (props) => {
  //Contraseña para el permiso de anulaciónde boletas
  const accesPassword = "jawni123";
  const {
    modalSucessfull,
    setModalSucessfull,
    reload,
    setReload,
    titulo,
    subtitulo,
    anular,
    setAnular,
    setPasswordFail,
  } = props;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleOk = () => {
    form.handleSubmit(ConfirmarAdmins)();
    //setModalSucessfull(false);
    setReload(!reload);
  };

  //FUNCIÓN PARA CANCELAR LA OPERACIÓN Y RESETAERA EL FORMULARIOS
  function handleCancel() {
    setModalSucessfull(false);
    form.reset();
  }

  //MOSTRAR Y ENVIAR LOS VALORES QUE ESTÁN EN EL FORMULARIOS
  //AQUI TAMBIÉN SE HACE LA COMPROBACIÓN DE LAS CONTRASEÑAS
  const ConfirmarAdmins = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/caja/api/password-anulacion",
        values
      );
      setAnular(true);
      setModalSucessfull(false);
      console.log(response.data.message);
    } catch (error) {
      setPasswordFail(true);
      console.log(error.response.data.message);
    }
  };

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
      open={modalSucessfull}
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
            nameLabel="Contraseña:"
            parametros="password"
            type="password"
          />
        </form>
      </Form>
    </Modal>
  );
};

export default ModalPermisoAnular;
