export const sufixConvert = (obje1, obje2) => {
  const primerObjeto = { ...obje1 };
  const segundoObjeto = { ...obje2 };

  for (const clave in segundoObjeto) {
    if (segundoObjeto.hasOwnProperty(clave)) {
      const claveSinSufijo = clave.replace(/_\d+$/, "");
      if (primerObjeto.hasOwnProperty(claveSinSufijo)) {
        primerObjeto[claveSinSufijo] = segundoObjeto[clave];
      }
    }
  }

  return primerObjeto;
};
