import {
  Button,
  Icon,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDrawerContext } from "../../contexts/Drawer-context";
import { PrimaryTheme } from "../../themes";
import { Grayscale } from "../../themes/global";

export const Header = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const smMedium = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawer } = useDrawerContext();
  const navgate = useNavigate();

  return (
    <>
      <Box
        className="Header"
        width={smDown ? "95%" : smMedium ? "98%" : "90%"}
        maxWidth={theme.spacing(200)}
        height={theme.spacing(10)}
        display="flex"
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>MotorShop</h1>

        {smDown ? (
          <Box className="menu">
            <IconButton onClick={toggleDrawer}>
              <Icon>menu</Icon>
            </IconButton>
          </Box>
        ) : (
          <Box
            className="menu"
            width={theme.spacing(75)}
            height={theme.spacing(10)}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Link
              href="/carros"
              onClick={smDown ? toggleDrawer : undefined}
              underline="none"
              color={Grayscale.grey2}
            >
              <Typography>Carros</Typography>
            </Link>

            <Link
              href="/carros"
              onClick={smDown ? toggleDrawer : undefined}
              underline="none"
              color={Grayscale.grey2}
            >
              <Typography>Motos</Typography>
            </Link>
            <Link
              href="/carros"
              onClick={smDown ? toggleDrawer : undefined}
              underline="none"
              color={Grayscale.grey2}
            >
              <Typography>Leilão </Typography>
            </Link>

            <Link
              href="/login"
              onClick={smDown ? toggleDrawer : undefined}
              underline="none"
              color={Grayscale.grey2}
            >
              <Typography>Fazer Login</Typography>
            </Link>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navgate("/register")}
            >
              <Typography color={PrimaryTheme.palette.grey[900]}>
                Cadastrar
              </Typography>{" "}
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
