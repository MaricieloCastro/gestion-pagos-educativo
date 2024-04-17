import React, { useState } from "react";
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

import { Menu, ConfigProvider } from "antd";
import AvantarCN from "@/components/AvatarCN";
import EscuadoCiencias from "../../assets/img/escudoCiencias.png";

import "./MenuLateral.scss";

function getItem(label, key, danger, icon, children, type) {
  return {
    label,
    key,
    danger,
    icon,
    children,
    type,
  };
}

const items = [
  getItem("PERFIL", "1", false, <FontAwesomeIcon icon={faUser} />),
  getItem(
    "MENÚ PRINCIPAL",
    "2",
    "false",
    <FontAwesomeIcon icon={faCrosshairs} />,
    [
      getItem("EDITAR ALUMNO", "21", "false", null, [
        getItem("PAGAR INSCRIPCION", "211"),
      ]),
      getItem("PAGOS", "22"),
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
    <FontAwesomeIcon icon={faTrashCan} />
  ),
  getItem(
    "PANEL DE ADMINISTRADOR",
    "7",
    undefined,
    <FontAwesomeIcon icon={faAddressCard} />,
    [
      getItem("HISTORIAL REPORTES", "71"),
      getItem("SOLICITUD DE ELIMINACION", "72"),
      getItem("LISTA DE USUARIOS", "73", undefined, null, [
        getItem("CREAR USUARIO", "731"),
        getItem("EDITAR USUARIO", "732"),
      ]),
    ]
  ),
  getItem(
    "CERRAR SESION",
    "8",
    true,
    <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    null
  ),
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const MenuLateral = ({ children }) => {
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
      <nav className="h-full overflow-y-auto w-96 bg-blue-oscuro">
        <div className="flex py-2 justify-center items-center bg-white-cabecera text-blue-oscuro text-2xl font-bold  tracking-wide text-blue-2">
          <img className="w-14 h-12 mr-3" src={EscuadoCiencias} alt="escudo" />
          <h1>I.E.P "CIENCIAS"</h1>
        </div>
        <div className="h-48 flex justify-center items-center">
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
              mode="inline"
              items={items}
            />
          </ConfigProvider>
        </div>
      </nav>
      <div className="w-screen">
        <div className=" h-8">cabecera de cada pagina</div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default MenuLateral;
