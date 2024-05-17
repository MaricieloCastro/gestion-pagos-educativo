import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { useLocation, useNavigate } from 'react-router-dom';

function BreadcrumbCN(props) {
  const { rutas } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((x) => x && !/^\d+$/.test(x)); // Obtener los segmentos de la ruta

  const handleNavigate = (actualPath) => {
    navigate(actualPath);
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((pathname, key) => {
          // Buscar el alias correspondiente al pathname en el array enlaces
          const enlace = rutas.find((item) => item.name === pathname);

          const { path, alias } = enlace;

          // Determinar el tipo de elemento a renderizar
          if (key < pathnames.length - 1) {
            return (
              <React.Fragment key={key}>
                <BreadcrumbItem className="flex items-center text-blue-500">
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={() => handleNavigate(path)}
                  >
                    {alias}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          }

          if (key === pathnames.length - 1) {
            return (
              <React.Fragment key={key}>
                <BreadcrumbItem className="flex items-center">
                  <BreadcrumbPage className="text-gray-600">
                    {alias}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default BreadcrumbCN;
