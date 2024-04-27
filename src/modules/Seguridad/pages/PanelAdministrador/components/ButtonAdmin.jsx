import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ButtonAdmin = (props) => {
  const { icon, title, notification, goTo } = props;

  const handleClick = () => {
    console.log(goTo);
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
          17
        </div>
      )}
    </div>
  );
};

export default ButtonAdmin;
