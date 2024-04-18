import React from "react";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link, useLocation } from 'react-router-dom'
import { enlaces } from "./MenuLateral/rutas";

function BreadcrumbCN() {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x && !/^\d+$/.test(x)); // Obtener los segmentos de la ruta

    console.log(pathnames)
    console.log(pathnames[pathnames.length - 1])

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathnames.map((pathname, key) => {
                    // Buscar el alias correspondiente al pathname en el array enlaces
                    const enlace = enlaces.find(item => item.name === pathname);
                    const alias = enlace && enlace.alias;
                    const path = enlace && enlace.path;

                    // Determinar el tipo de elemento a renderizar
                    if (key < pathnames.length - 1) {
                        return (
                            <React.Fragment key={key} className="flex items-center">
                                <BreadcrumbItem className="text-gray-listas">
                                    <Link to={"/" + path}>
                                        <BreadcrumbLink>{alias}</BreadcrumbLink>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>
                        )
                    }
                    if (key === pathnames.length - 1) {
                        return (
                            <React.Fragment key={key} className="flex items-center">
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{alias}</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>
                        )
                    }
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

// <Breadcrumb>
//     <BreadcrumbList>
//         <BreadcrumbItem className="text-gray-listas">
//             <BreadcrumbLink href="/">PANEL DE ADMINISTRADOR</BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbSeparator />
//         <BreadcrumbItem>
//             <BreadcrumbPage>LISTA DE USUARIOS</BreadcrumbPage>
//         </BreadcrumbItem>
//     </BreadcrumbList>
// </Breadcrumb>

export default BreadcrumbCN;
