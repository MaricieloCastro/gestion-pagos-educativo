import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "antd";
import AuthContext from "../contexts/AuthContext";

const AvatarCN = () => {
  let { user } = useContext(AuthContext);
  let { ruta_fotografica } = user;
  return (
    <Avatar>
      <AvatarImage src={ruta_fotografica} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarCN;
