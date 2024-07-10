import React, { useContext, useEffect, useState } from 'react';

import { getLevelKeys } from './MenuLateralFunctions';

import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@/contexts/AuthContext';
import { menuLateralConstants } from './menuLateralConstants';
import { enlaces } from '@/utils/rutas';
import { getAxios } from '@/functions/methods';
import { alumnosSolicitudDeleteApi } from '@/api/ApiRutas';

const MenuAnt = (props) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  let { user, logoutUser, authTokens } = useContext(AuthContext);
  let { id_tipo_usuario } = user;

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [selectedKeys, setSelectedKeys] = useState([]);
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

  const num_solicitud = solicitudDelete.length;

  const levelKeys = getLevelKeys(menuLateralConstants(id_tipo_usuario, num_solicitud));

  const onSelect = ({ key }) => {
    setSelectedKeys([key]);

    if (key === "1") {
      navigate(enlaces[4].actualPath);
    }

    if (key === "21") {
      // PENDIENTE DE REVISION
      navigate(enlaces[3].actualPath);
    }

    if (key === "23") {
      navigate(enlaces[9].actualPath);
    }

    if (key === "3") {
      navigate(enlaces[10].actualPath);
    }

    if (key === "6") {
      navigate(enlaces[11].actualPath);
    }

    if (key === "71") {
      navigate(enlaces[5].actualPath);
    }

    if (key === "72") {
      navigate(enlaces[13].actualPath);
    }

    if (key === "73") {
      navigate(enlaces[12].actualPath);
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

    if (key === "91") {
      navigate(enlaces[16].actualPath)
    }
    if (key === "5") {
      navigate(enlaces[17].actualPath)
    }
    if (key === "92") {
      navigate(enlaces[18].actualPath)
    }
    if (key === "41") {
      navigate(enlaces[22].actualPath)
    }
    if (key === "42") {
      navigate(enlaces[19].actualPath)
    }
    if (key === "43") {
      navigate(enlaces[20].actualPath)
    }
    if (key === "44") {
      navigate(enlaces[21].actualPath)
    }

  };

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
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "none",
          colorText: "#C1C1C1",
        },
        components: {
          Menu: {
            itemBorderRadius: 'none',
            activeBarBorderWidth: 0,
            colorTextDisabled: "#001F36",
            itemActiveBg: "#008AF0",
            itemSelectedBg: "#004B82",
            itemSelectedColor: "#C1C1C1",
            borderRadiusOuter: 1,
            itemHoverBg: "#004B82",
            subMenuItemBg: "#003154",
          },
        },
      }}
    >
      <Menu
        className="menu-lateral__component-ant"
        mode="inline"
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
        inlineCollapsed={collapsed}
        items={menuLateralConstants(id_tipo_usuario, num_solicitud)}
      />
    </ConfigProvider>
  );
};

export default MenuAnt;
