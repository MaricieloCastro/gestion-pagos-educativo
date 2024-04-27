import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AvatarsListaAdmin = (props) => {
  const { usuario } = props;

  return (
    <div className="flex">
      <Avatar className="h-12 w-12 border-[4px]">
        <AvatarImage src="" />
        <AvatarFallback className="bg-blue-oscuro">
          <FontAwesomeIcon icon={faUser} />
        </AvatarFallback>
      </Avatar>
      <div className="w-full flex items-center ml-3">
        <p className="text-left">{usuario}</p>
      </div>
    </div>
  );
};

export default AvatarsListaAdmin;
