import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useLocation, useNavigate } from "react-router-dom";
import { enlaces } from "../utils/rutas";

function BreadcrumbCN() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && !/^\d+$/.test(x)); // Obtener los segmentos de la ruta

  const handleNavigate = (actualPath) => {
    navigate(actualPath);
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathnames.map((pathname, key) => {
          // Buscar el alias correspondiente al pathname en el array enlaces
          const enlace = enlaces.find((item) => item.name === pathname);

          const { actualPath, path, alias } = enlace;

          // Determinar el tipo de elemento a renderizar
          if (key < pathnames.length - 1) {
            return (
              <React.Fragment key={key}>
                <BreadcrumbItem className="text-gray-listas flex items-center">
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={() => handleNavigate(actualPath)}
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
                  <BreadcrumbPage>{alias}</BreadcrumbPage>
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
