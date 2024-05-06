import path from "path";

export const enlaces = [
  {
    id: 1,
    name: "login",
    path: "login/",
    prevPath: "/",
    actualPath: "/login/",
    alias: "INICIAR SESIÓN",
  },
  {
    id: 2,
    name: "restore",
    path: "restore/",
    prevPath: "login/",
    actualPath: "/login/restore/",
    alias: "REESTABLECER CONTRASEÑA",
  },
  {
    id: 3,
    name: "update",
    path: "update/:uuid",
    prevPath: "login/",
    actualPath: "/login/update/:uuid",
    alias: "ACTUALIZAR CONTRASEÑA",
  },
  {
    id: 4,
    name: "lista-alumnos",
    path: "lista-alumnos/",
    prevPath: "/",
    actualPath: "/lista-alumnos/",
    alias: "LISTA DE ALUMNOS",
  },
  {
    id: 5,
    name: "perfil",
    path: "perfil/",
    prevPath: "/",
    actualPath: "/perfil/",
    alias: "PERFIL",
  },
  {
    id: 6,
    name: "panel",
    path: "panel/",
    prevPath: "/",
    actualPath: "/panel/",
    alias: "PANEL DE ADMINISTRADOR",
  },
  {
    id: 7,
    name: "lista-usuarios",
    path: "lista-usuarios/",
    prevPath: "panel/",
    actualPath: "/panel/lista-usuarios/",
    alias: "LISTA DE USUARIOS",
  },
  {
    id: 8,
    name: "create-user",
    path: "create-user/",
    prevPath: "panel/lista-usuarios/",
    actualPath: "/panel/lista-usuarios/create-user/",
    alias: "CREAR USUARIO",
  },
  {
    id: 9,
    name: "info-user",
    path: "info-user/:id",
    prevPath: "panel/lista-usuarios/",
    actualPath: "/panel/lista-usuarios/info-user/:id",
    alias: "INFORMACIÓN DEL USUARIO",
  },
  {
    id: 10,
    name: "pagos",
    path: "pagos/:id",
    prevPath: "/",
    actualPath: "/pagos/:id",
    alias: "PAGOS",
  },
  //inscribir alumno
  {
    id: 11,
    name: "inscribir-alumno",
    path: "inscribir-alumno/",
    prevPath: "/",
    actualPath: "/inscribir-alumno/",
    alias: "INSCRIBIR ALUMNOS",
  },
  {
    id: 12,
    name: "estudiantes-delete",
    path: "estudiantes-delete/",
    prevPath: "/",
    actualPath: "/estudiantes-delete/",
    alias: "PAPELERA DE ESTUDIANTES",
  },
  {
    id: 13,
    name: "solicitud-estudiantes-delete",
    path: "solicitud-estudiantes-delete/",
    prevPath: "panel/",
    actualPath: "/panel/solicitud-estudiantes-delete/",
    alias: "SOLICITUD DE ELIMINACIÓN",
  },
  {
    id: 14,
    name: "historial-reporte",
    path: "historial-reporte/",
    prevPath: "panel/",
    actualPath: "/panel/historial-reporte/",
    alias: "HISTORIAL DE REPORTES",
  },
];
