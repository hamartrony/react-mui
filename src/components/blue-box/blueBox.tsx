import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { PrimaryTheme } from "../../themes";

interface IBlueBox {
  children: ReactNode;
}

export const BlueBox = ({ children }: IBlueBox) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      minHeight={theme.spacing(62.875)}
      position="relative"
      width="100%"
      bgcolor={PrimaryTheme.palette.primary.main}
      display="flex"
      flexDirection="column"
      justifyContent={smDown ? "space-around " : "center"}
      alignItems="center"
      alignSelf="center"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
