import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { PrimaryTheme } from "../../themes";

export const Footer = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      width="100%"
      bgcolor={PrimaryTheme.palette.grey[900]}
      display="flex"
      justifyContent="center"
    >
      <Box
        width="90%"
        maxWidth="1600px"
        minHeight={smDown ? "310px" : "140px"}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        justifyContent="space-between"
        bgcolor={PrimaryTheme.palette.grey[900]}
        alignItems="center"
      >
        <Box display="flex" alignItems="flex-end" gap={1}>
          <Typography
            variant="h3"
            color={PrimaryTheme.palette.primary.contrastText}
          >
            Motors
          </Typography>

          <Typography
            variant="h6"
            color={PrimaryTheme.palette.primary.contrastText}
          >
            shop
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color={PrimaryTheme.palette.primary.contrastText}
        >
          © 2022 - Todos os direitos reservados.
        </Typography>

        <Button onClick={handleTop}>
          <Typography
            variant="h4"
            color={PrimaryTheme.palette.primary.contrastText}
          >
            ^
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
