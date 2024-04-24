import React from "react";
import { Toaster, toast } from "react-hot-toast";
{
  /*Toast Exitoso*/
}
export function Exito(props) {
  const { tituloBoton } = props;

  return (
    <h1 onClick={() => toast.success("La operacion fue exitosa!")}>
      {tituloBoton}
      <Toaster />
    </h1>
  );
}
{
  /*Toast Error*/
}
export function Error(props) {
  const { tituloBoton } = props;

  return (
    <div>
      <button
        className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
        onClick={() => toast.error("This didn't work.")}
      >
        {tituloBoton}
      </button>
      <Toaster />
    </div>
  );
}
{
  /*Toast Emogi*/
}
export function Emogi(props) {
  const { tituloBoton } = props;

  return (
    <div>
      <button
        className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold"
        onClick={() =>
          toast("Good Job!", {
            icon: "👏",
          })
        }
      >
        {tituloBoton}
      </button>
      <Toaster />
    </div>
  );
}
