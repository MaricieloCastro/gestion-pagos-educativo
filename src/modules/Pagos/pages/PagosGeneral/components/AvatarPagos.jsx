import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
//import AuthContext from "../contexts/AuthContext";
import "./AvatarPagos.scss";
import Foto from "../../../../../assets/img/sin-perfil-350x400.jpg";

const AvatarPagos = () => {
  // let { user } = useContext(AuthContext);
  //let { ruta_fotografica } = user;
  //const { colorBad } = props;
  const colorBad = "#27C200";
  return (
    <div className="avatar">
      <Badge
        className="avatar-estado"
        count={2}
        style={{ backgroundColor: colorBad }}
      >
        <Avatar>
          <AvatarImage src={Foto} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Badge>
    </div>
  );
};

export default AvatarPagos;
