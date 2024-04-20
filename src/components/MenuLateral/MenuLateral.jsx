import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faUser,
  faTrashCan,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faClockRotateLeft,
  faCrosshairs,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom'

import { Menu, ConfigProvider } from "antd";
import AvantarCN from "@/components/AvatarCN";
import EscuadoCiencias from "../../assets/img/escudoCiencias.png";

import "./MenuLateral.scss";
import BreadcrumbCN from "../BreadcrumbCN";
import AuthContext from "@/contexts/AuthContext";
import { enlaces } from "./rutas";

function getItem(label, key, danger, icon, children, type, disabled) {
  return {
    label,
    key,
    danger,
    icon,
    children,
    type,
    disabled
  };
}

const MenuLateral = ({ children }) => {
  let { user, logoutUser } = useContext(AuthContext);
  let { id_tipo_usuario } = user;

  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState([]);

  const items = [
    getItem("PERFIL", "1", false, <FontAwesomeIcon icon={faUser} />),
    getItem(
      "MENÚ PRINCIPAL",
      "2",
      "false",
      <FontAwesomeIcon icon={faCrosshairs} />,
      [
        getItem("LISTA DE ALUMNOS", "21"),
        getItem("ALUMNO", "22", "false", null, [
          getItem("EDITAR", "221"),
          getItem("PAGAR INSCRIPCION", "222"),
        ]),
        getItem("PAGOS", "23"),
      ]
    ),
    getItem("INSCRIBIR ALUMNO", "3", false, <FontAwesomeIcon icon={faPlus} />),
    getItem("REPORTES", "4", undefined, <FontAwesomeIcon icon={faFile} />, [
      getItem("INGRESOS", "41"),
      getItem("DEUDAS", "42"),
      getItem("ALUMNOS ESPECIALES", "43"),
      getItem("PAGOS ANTICIPADOS", "44"),
      getItem("METODO PAGO", "45"),
    ]),
    getItem(
      "HISTORIAL DE PAGOS",
      "5",
      false,
      <FontAwesomeIcon icon={faClockRotateLeft} />
    ),
    getItem(
      "PAPELERA DE ESTUDIANTES",
      "6",
      false,
      <FontAwesomeIcon icon={faTrashCan} />,
    ),
    id_tipo_usuario === 1 ? (
      getItem(
        "PANEL DE ADMINISTRADOR",
        "7",
        undefined,
        <FontAwesomeIcon icon={faAddressCard} />,
        [
          getItem("PANEL", "71"),
          getItem("HISTORIAL REPORTES", "72"),
          getItem("SOLICITUD DE ELIMINACION", "73"),
          getItem("USUARIOS", "74", undefined, null, [
            getItem("LISTA DE USUARIOS", "741"),
            getItem("CREAR USUARIO", "742"),
            getItem("EDITAR USUARIO", "743", false, null, null, null, true),
            // getItem(label, key, danger, icon, children, type, disabled)
          ]),
        ]
      )
    ) : (
      null
    ),
    getItem(
      "CERRAR SESION",
      "8",
      true,
      <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    ),
  ];

  const handleSelect = ({ key }) => {
    setSelectedKeys([key]);

    if (key === "1") {
      navigate(enlaces[4].actualPath);
    }

    if (key === "21") { // PENDIENTE DE REVISION
      navigate(enlaces[3].actualPath);
    }

    if (key === "71") {
      navigate(enlaces[5].actualPath);
    }

    if (key === "741") {
      navigate(enlaces[6].actualPath);
    }

    if (key === "742") {
      navigate(enlaces[7].actualPath);
    }

    if (key === "8") {
      logoutUser();
    }
  }

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item && item.key) { // Verificar si item no es null y tiene la propiedad 'key'
          key[item.key] = level;
        }
        if (item && item.children) { // Verificar si item no es null y tiene la propiedad 'children'
          return func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items);

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "21"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <nav className="menu h-full overflow-y-auto w-96 bg-blue-oscuro">
        <div className="flex py-2 justify-center items-center bg-white-cabecera text-blue-oscuro text-2xl font-bold  tracking-wide text-blue-2">
          <img className="w-14 h-12 mr-3" src={EscuadoCiencias} alt="escudo" />
          <h1>I.E.P "CIENCIAS"</h1>
        </div>
        <div className="h-48 flex justify-center items-center my-4">
          <AvantarCN />
        </div>
        <div className="menu__li h-screen">
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "none",
                colorText: "#C1C1C1",
              },
              components: {
                Menu: {
                  activeBarBorderWidth: 0,
                  colorTextDisabled: "#001F36",
                  itemActiveBg: "#008AF0",
                  itemSelectedBg: "#004B82",
                  itemSelectedColor: "#C1C1C1",
                  itemBorderRadius: 0,
                  borderRadiusOuter: 1,
                  itemHoverBg: "#004B82",
                  subMenuItemBg: "#003154",
                },
              },
            }}
          >
            <Menu
              onOpenChange={onOpenChange}
              openKeys={stateOpenKeys}
              defaultSelectedKeys={["22"]}
              selectedKeys={selectedKeys}
              onSelect={handleSelect}
              mode="inline"
              items={items}
            />
          </ConfigProvider>
        </div>
      </nav>
      <div className="w-screen">
        <div className="h-8 mx-4 flex items-center">
          <BreadcrumbCN />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default MenuLateral;
