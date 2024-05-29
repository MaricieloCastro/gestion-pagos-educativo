export const data = [
  {
    label: "Parentesco:",
    name: "parentesco",
    type: "text",
    placeholder: "",
  },
  {
    label: "DNI:",
    name: "dni",
    type: "number",
    placeholder: "Ingrese el DNI",
  },
  {
    label: "Nombres:",
    name: "nombres",
    type: "text",
    placeholder: "Ingrese el nombre",
  },
  {
    label: "Ap. Paterno:",
    name: "apellido_paterno",
    type: "text",
    placeholder: "Ingrese el apellido paterno",
  },
  {
    label: "Ap. Materno:",
    name: "apellido_materno",
    type: "text",
    placeholder: "Ingrese el apellido materno",
  },
  {
    label: "Sexo:",
    name: "sexo",
    type: "select",
    placeholder: "Seleccione el sexo",
    options: [
      { value: "M", label: "MASCULINO" },
      { value: "F ", label: "FEMENINO" },
    ],
  },
  // {
  //   label: "Departamento:",
  //   name: "departamento_nacimiento",
  //   type: "select",
  //   placeholder: "Seleccione el departamento",
  // },
  // {
  //   label: "Provincia:",
  //   name: "provincia_nacimiento",
  //   type: "select",
  //   placeholder: "Seleccione la povincia",
  // },
  // {
  //   label: "Distrito:",
  //   name: "distrito_nacimiento",
  //   type: "select",
  //   placeholder: "Seleccione el distrito",
  // },
  {
    label: "Fecha de nacimiento:",
    name: "fecha_nacimiento",
    type: "date",
    placeholder: "Seleccione la fecha",
  },
  // {
  //   label: "Edad:",
  //   name: "edad",
  //   type: "number",
  //   placeholder: "Seleccione la edad",
  // },
  {
    label: "Estado civil:",
    name: "estado_civil",
    type: "select",
    placeholder: "Seleccione el estado civil",
    options:[
      { value: "soltero", label: "SOLTERO" },
      { value: "casado", label: "CASADO" },
      { value: "viudo", label: "VIUDO" },
      { value: "divorciado", label: "Divorciado" },
      // Agrega más opciones de distritos según sea necesario
    ]
  },
  {
    label: "Vive:",
    name: "vive",
    type: "select",
    placeholder: "Seleccione la opcion",
    options:[
      { value: "si", label: "SI" },
      { value: "no", label: "NO" },
    ]
  },
  {
    label: "Vive con:",
    name: "vive_con",
    type: "select",
    placeholder: "Seleccionar la opcion",
    options:[
      { value: "mama", label: "MAMÁ" },
      { value: "papa", label: "PAPÁ" },
      { value: "ambos", label: "AMBOS" },
      { value: "tios", label: "TIOS" },
      { value: "abuelos", label: "ABUELOS" },
    ]
  },
  {
    label: "Apoderado:",
    name: "apoderado",
    type: "select",
    placeholder: "Seleccione el apoderado",
    options:[
      { value: "si", label: "SI" },
      { value: "no", label: "NO" },
    ]
  },
  {
    label: "Celular:",
    name: "celular",
    type: "number",
    placeholder: "Ingrese el celular",
  },
  {
    label: "Telefono:",
    name: "telefono",
    type: "number",
    placeholder: "Ingrese el telefono",
  },
  // {
  //   label: "Departamento:",
  //   name: "departamento_domicilio",
  //   type: "select",
  //   placeholder: "Seleccione el departamento",
  // },
  // {
  //   label: "Provincia:",
  //   name: "provincia_domicilio",
  //   type: "select",
  //   placeholder: "Seleccione la povincia",
  // },
  // {
  //   label: "Distrito:",
  //   name: "distrito_domicilio",
  //   type: "select",
  //   placeholder: "Seleccione el distrito",
  // },
  {
    label: "Direccion:",
    name: "direccion",
    type: "text",
    placeholder: "Ingrese la direccion",
  },
  {
    label: "Grado instruccion:",
    name: "grado_instruccion",
    type: "select",
    placeholder: "Seleccione el grado",
    options:[
      { value: "primaria completa", label: "PRIMARIA COMPLETA" },
      { value: "secundaria completa", label: "SECUNDARIA COMPLETA" },
      { value: "superior completa", label: "SUPERIOR COMPLETO" },
    ]
  },
  {
    label: "Centro de trabajo:",
    name: "centro_trabajo",
    type: "text",
    placeholder: "Ingrese centro de trabajo",
  },
  {
    label: "Ocupacion:",
    name: "ocupacion",
    type: "text",
    placeholder: "Ingrese la ocupacion",
  },
  {
    label: "Correo:",
    name: "correo",
    type: "email",
    placeholder: "Ingrese el correo",
  },
];
