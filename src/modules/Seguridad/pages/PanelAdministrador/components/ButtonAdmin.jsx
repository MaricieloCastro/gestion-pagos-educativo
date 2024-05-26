import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/contexts/AuthContext";
import { getAxios } from "@/functions/methods";
import { alumnosSolicitudDeleteApi } from "@/api/ApiRutas";

const ButtonAdmin = (props) => {
  const navigate = useNavigate();

  let { authTokens } = useContext(AuthContext);

  const { icon, title, notification, goTo } = props;

  const [solicitudDelete, setSolicitudDelete] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens?.access),
  };

  useEffect(() => {
    getAxios(alumnosSolicitudDeleteApi, headers, setSolicitudDelete, setLoading, setError)
  }, [])

  const handleClick = () => {
    navigate(goTo);
  };

  return (
    <div className="panel-administrador__seccion-2-1-2-botones-childrens bg-blue-claro">
      <button className="h-full w-full grid" onClick={handleClick}>
        <div className="h-full flex justify-center items-center">
          <FontAwesomeIcon icon={icon} className="text-white-texto" />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white-texto mb-2">{title}</p>
        </div>
      </button>
      {notification && (
        <div className="panel-administrador__seccion-2-1-2-botones-childrens-notification">
          {solicitudDelete.length}
        </div>
      )}
    </div>
  );
};

export default ButtonAdmin;
