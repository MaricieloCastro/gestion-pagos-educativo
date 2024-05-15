import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

const ListasColorDeuda = (props) => {
  const { estado } = props;
  return (
    <>
      {estado ? (
        <FontAwesomeIcon icon={faSquareFull} className="text-green-500" />
      ) : (
        <FontAwesomeIcon icon={faSquareFull} className="text-orange-500" />
      )}
    </>
  );
};

export default ListasColorDeuda;
