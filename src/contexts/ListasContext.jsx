import {
    createContext,
    useState,
    useEffect,
    useMemo,
} from "react";
import axios from "axios";

const ListasContext = createContext();

export default ListasContext;

export const ListasProvider = ({ children }) => {

    const [reload, setReload] = useState(true)

    const contextValue = useMemo(() => {
        return { reload, setReload };
    }, [reload]);

    return (
        <ListasContext.Provider value={contextValue}>
            {children}
        </ListasContext.Provider>
    );
};
