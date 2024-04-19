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
    path: "update/",
    prevPath: "login/",
    actualPath: "/login/update/",
    alias: "ACTUALIZAR CONTRASEÑA",
  },
  {
    id: 4,
    name: undefined,
    path: "/",
    prevPath: undefined,
    actualPath: "/",
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
    alias: "PANEL",
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
];
