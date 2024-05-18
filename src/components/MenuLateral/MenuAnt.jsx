import React, { useState } from 'react';

import { getLevelKeys } from './MenuLateralFunctions';
import { ITEMS } from './MenuLateralConstans';

import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { seguridadRutas } from '@/utils/paths';

const levelKeys = getLevelKeys(ITEMS);

const MenuAnt = (props) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onSelect = ({ key }) => {
    // setSelectedKeys([key]);

    // if (key === "11") {
    //   navigate(seguridadRutas[3].path);
    // }

    // if (key === "12") {
    //   navigate(seguridadRutas[3].path + seguridadRutas[4].path);
    // }

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
        items={ITEMS}
      />
    </ConfigProvider>
  );
};

export default MenuAnt;
