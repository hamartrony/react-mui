import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DarkTheme, PrimaryTheme } from "../themes";

// o que estou exportando
interface IThemeContextData {
  themeName: "dark" | "light";
  toggleTheme: () => void;
}

interface ListProviderProps {
  children: ReactNode;
}

// criar contexto que carrega as informaçoes
const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

// exportar o ThemeContext com sua logica
export const AppThemeProvider = ({ children }: ListProviderProps) => {
  const [themeName, setThemeName] = useState<"dark" | "light">("light");

  // funcao que altera state de themeName
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  // Variavel que armazena o theme atual, ja que useState pode se alterar?
  const theme = useMemo(() => {
    if (themeName === "light") return PrimaryTheme;
    return DarkTheme;
  }, [themeName]);

  //testar se theme aceita themeName
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="auto"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
