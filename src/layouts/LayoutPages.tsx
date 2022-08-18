import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { MenuSuspenso } from "../components/drawer/drawer";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface ListProviderProps {
  children: ReactNode;
}

export const LayoutPages = ({ children }: ListProviderProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // ROOT
    <Box
      className="root"
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      {/* MENUS DESKTOP E MOBILE */}
      <Header />
      <MenuSuspenso />

      {/* MAIN PARA RECEBER CONTEUDO */}
      <Box
        className="main"
        width="100%"
        // maxWidth="1600px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        marginBottom={smDown ? 12 : 15}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
