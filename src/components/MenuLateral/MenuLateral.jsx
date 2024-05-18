import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import MenuAnt from './MenuAnt';
import BreadcrumbCN from './BreadCrumb';
// import { totalRutas } from '@/utils/paths';

import './MenuLateral.scss';
import { enlaces } from '@/utils/rutas';
import AvatarCN from '../AvatarCN';

const MenuLateral = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed)
  };

  return (
    <div className="menu-lateral h-full overflow-auto">
      <div className="grid grid-rows-[auto,auto,1fr] w-full bg-[#001F36]">
        <div className={`menu-lateral__boton ${!collapsed && 'border-b-[1px]'} border-gray-300`}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className="flex justify-center items-center rounded-none w-20 h-14"
          >
            {collapsed ?
              // <img
              //   className="w-8"
              //   src="/img/escudoCiencias.png"
              //   alt="Walter logo pequeño"
              // />
              <MenuUnfoldOutlined />
              : <MenuFoldOutlined />}
          </Button>
          <div className="menu-lateral__boton-image w-full flex justify-center items-center bg-blue-oscuro">
            <img
              className="w-14"
              src="/img/escudoCiencias.png"
              alt="Walter logo pequeño"
            />
          </div>
        </div>
        {/* {!collapsed && <div className="flex justify-center items-center my-4">
          <AvatarCN />
        </div>} */}
        <div className={`flex justify-center items-center transition-all duration-200 ease-in-out transform ${!collapsed ? 'opacity-100 my-4' : 'opacity-0 my-0 overflow-hidden h-0 w-0'}`} >
          <AvatarCN />
        </div>
        <MenuAnt collapsed={collapsed} />
      </div>
      <div className="menu-lateral__content mx-4 gap-1 ">
        <div className="flex items-center py-1">
          <BreadcrumbCN rutas={enlaces} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default MenuLateral;
