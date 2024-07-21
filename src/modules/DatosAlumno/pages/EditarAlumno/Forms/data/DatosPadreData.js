export const data = [
  {
    label: "PARENTESCO:",
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
    label: "NOMBRES:",
    name: "nombres",
    type: "text",
    placeholder: "Ingrese el nombre",
  },
  {
    label: "AP. PATERNO:",
    name: "apellido_paterno",
    type: "text",
    placeholder: "Ingrese el apellido paterno",
  },
  {
    label: "AP. MATERNO:",
    name: "apellido_materno",
    type: "text",
    placeholder: "Ingrese el apellido materno",
  },
  {
    label: "SEXO:",
    name: "sexo",
    type: "select",
    placeholder: "Seleccione el sexo",
    options: [
      { value: "M", label: "Masculino" },
      { value: "F ", label: "Femenino" },
    ],
  },
  {
    label: "F. NACIMIENTO:",
    name: "fecha_nacimiento",
    type: "dateWithYears",
    placeholder: "Seleccione la fecha",
  },
  {
    label: "ESTADO CIVIL:",
    name: "estado_civil",
    type: "select",
    placeholder: "Seleccione el estado civil",
    options: [
      { value: "S", label: "SOLTERO" },
      { value: "C", label: "CASADO" },
    ],
  },
  {
    label: "VIVE:",
    name: "vive",
    type: "select",
    placeholder: "Seleccione la opcion",
    options: [
      { value: true, label: "SI" },
      { value: false, label: "NO" },
    ],
  },
  {
    label: "VIVE CON:",
    name: "vive_con",
    type: "select",
    placeholder: "Seleccionar la opcion",
    options: [
      { value: true, label: "SI" },
      { value: false, label: "NO" },
    ],
  },
  {
    label: "APODERADO:",
    name: "apoderado",
    type: "select",
    placeholder: "Seleccione el apoderado",
    options: [
      { value: true, label: "SI" },
      { value: false, label: "NO" },
    ],
  },
  {
    label: "CELULAR:",
    name: "celular",
    type: "number",
    placeholder: "Ingrese el celular",
  },
  {
    label: "TELEFONO:",
    name: "telefono",
    type: "number",
    placeholder: "Ingrese el telefono",
  },
  {
    label: "DIRECCION:",
    name: "direccion",
    type: "text",
    placeholder: "Ingrese el telefono",
  },
  {
    label: "GRADO INSTRUCCION:",
    name: "grado_instruccion",
    type: "select",
    placeholder: "Seleccione grado de instruccion ",
    options: [
      { value: "secundaria completa", label: "SECUNDARIA COMPLETA" },
      { value: "primari completa", label: "PRIMARIA COMPLETA" },
      { value: "superior completa", label: "SUPERIOR COMPLETA" },
    ],
  },
  {
    label: "CENTRO TRABAJO:",
    name: "centro_trabajo",
    type: "text",
    placeholder: "Ingrese el centro de trabajo",
  },
  {
    label: "OCUPACION:",
    name: "ocupacion",
    type: "text",
    placeholder: "Ingrese la ocupacion",
  },
  {
    label: "CORREO:",
    name: "correo",
    type: "text",
    placeholder: "Ingrese el correo",
  },
];