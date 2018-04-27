function  OBTENER_SUBCLIENTES(ltr) {
   return { Accion: 'OBTENER_SUBCLIENTES',
    NumPagina: 0,
    letter: isparent ? ltr: "",
    lettermae: isparent ? "": ltr }
  };

function OBTENER_SUGERENCIAS (ltr, isparent) {
  return   {Accion: 'OBTENER_SUGERENCIAS',
  lettermae : isparent ? "":ltr,
  letter: isparent ? ltr: ""}
};

export {OBTENER_SUBCLIENTES, OBTENER_SUGERENCIAS}