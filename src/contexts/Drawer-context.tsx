import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

// o que estou exportando
interface IDrawerContextData {
  drawer: boolean;
  toggleDrawer: () => void;
}

interface ListProviderProps {
  children: ReactNode;
}

// criar contexto que carrega as informaçoes
const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

// exportar o DrawerContext com sua logica
export const DraweProvider = ({ children }: ListProviderProps) => {
  const [drawer, setDrawer] = useState(false);

  // funcao que altera state de drawer
  const toggleDrawer = useCallback(() => {
    setDrawer((oldDrawer) => !oldDrawer);
  }, []);

  //testar se theme aceita drawer
  return (
    <DrawerContext.Provider value={{ drawer, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
