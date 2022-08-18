import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface ListProviderProps {
  children: ReactNode;
  tittle: string;
}

export const ListCard = ({ children, tittle }: ListProviderProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  // função scroll horizontal nas lista de veiculos
  const handleWheel = () => {
    const containerList = document.querySelectorAll<Element>(".list");

    const scrollContainer = Array.from(containerList);

    scrollContainer?.forEach((item) => {
      item.addEventListener("wheel", (e: any) => {
        e.preventDefault();
        item.scrollBy({
          left: e.deltaY < 0 ? -2 : 2,
          behavior: "auto",
        });
      });
    });
  };

  return (
    <Box maxWidth="1600px" width="100%" alignSelf="flex-end" overflow="hidden">
      <Typography
        variant="h5"
        marginTop={smDown ? theme.spacing(10) : theme.spacing(26)}
        marginBottom={theme.spacing(8.5)}
        paddingLeft={1}
      >
        {tittle}
      </Typography>
      <Grid
        className="list"
        onWheel={handleWheel}
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        sx={{
          "&::-webkit-scrollbar": { backgroundColor: "transparent" },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
        }}
        overflow="auto"
        container
        gap={smDown ? 2 : 6}
        width="100%"
      >
        {children}
      </Grid>
    </Box>
  );
};
