import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const ApoderadoContext = createContext();

export default ApoderadoContext;

export const ApoderadoProvider = ({ children }) => {
  const [apoderadoPadre, setApoderadoPadre] = useState(true);
  const [apoderadoMadre, setApoderadoMadre] = useState(true);

  const contextValue = useMemo(() => {
    return {
      apoderadoPadre,
      setApoderadoPadre,
      apoderadoMadre,
      setApoderadoMadre,
    };
  }, [apoderadoPadre, apoderadoMadre]);

  return (
    <ApoderadoContext.Provider value={contextValue}>
      {children}
    </ApoderadoContext.Provider>
  );
};
