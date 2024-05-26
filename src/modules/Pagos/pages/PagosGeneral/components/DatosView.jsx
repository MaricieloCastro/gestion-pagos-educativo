import React from "react";
import "./DatosView.scss";
export default function DatosView(props) {
  const { celda, dato } = props;
  return (
    <div className="datos-view">
      <h2 className="datos-view_celda">{celda}</h2>
      <h2 className="datos-view_dato">{dato}</h2>
    </div>
  );
}
