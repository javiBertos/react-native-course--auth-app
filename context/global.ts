import { createContext } from "react";

// Definición del estado
interface GlobalContextState {
    authTitle: string,
    setAuthTitle: React.Dispatch<React.SetStateAction<string>>
}

// Inicialización del estado
const state = {
    authTitle: '',
    setAuthTitle: () => undefined
};

const GlobalContext = createContext<GlobalContextState>(state);

export default GlobalContext;