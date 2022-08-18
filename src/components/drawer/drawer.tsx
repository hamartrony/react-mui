import {
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDrawerContext } from "../../contexts/Drawer-context";
import { LinkTo } from "../linkTo";

export const MenuSuspenso = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { drawer, toggleDrawer } = useDrawerContext();
  const navgate = useNavigate();

  return (
    <Drawer
      variant="temporary"
      open={drawer}
      onClose={toggleDrawer}
      anchor="top"
    >
      <Box
        className="Header"
        width="95%"
        height={theme.spacing(10)}
        display="flex"
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        alignSelf="center"
      >
        <h1>MotorShop</h1>
        <Box className="menu">
          <IconButton onClick={toggleDrawer}>
            <Icon>close</Icon>
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box
        width="100%"
        height={theme.spacing(52.5)}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <LinkTo
          to="/carros"
          label="Carros"
          onClick={smDown ? toggleDrawer : undefined}
        />
        <LinkTo
          to="/motos"
          label="Motos"
          onClick={smDown ? toggleDrawer : undefined}
        />
        <LinkTo
          to="/leilao"
          label="Leilão"
          onClick={smDown ? toggleDrawer : undefined}
        />
        <Divider />
        <LinkTo
          to="/login"
          label="Fazer Login"
          onClick={smDown ? toggleDrawer : undefined}
        />

        <ListItem>
          <Button variant="outlined" onClick={() => navgate("/register")}>
            Cadastrar
          </Button>
        </ListItem>
      </Box>
    </Drawer>
  );
};
