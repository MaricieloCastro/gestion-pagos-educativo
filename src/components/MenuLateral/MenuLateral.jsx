import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import MenuAnt from './MenuAnt';
import BreadcrumbCN from './BreadCrumb';
// import { totalRutas } from '@/utils/paths';

import './MenuLateral.scss';
import { enlaces } from '@/utils/rutas';

const MenuLateral = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed)
  };

  return (
    <div className="menu-lateral h-full overflow-auto">
      <div className="grid grid-rows-[auto,1fr] w-full bg-white">
        <div className="menu-lateral__boton border-b-[1px]">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className="rounded-none w-20 h-14 border-r-[1px]"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <div className="menu-lateral__boton-image w-full flex justify-center items-center bg-white border-r-[1px]">
            <img
              className="w-14"
              src="/img/escudoCiencias.png"
              alt="Walter logo pequeño"
            />
          </div>
        </div>
        <MenuAnt collapsed={collapsed} />
      </div>
      <div className="menu-lateral__content mx-4 gap-1">
        <div className="flex items-center py-1">
          <BreadcrumbCN rutas={enlaces} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default MenuLateral;
