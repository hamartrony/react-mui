import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EastIcon from "@mui/icons-material/East";
import {
  Avatar,
  Card,
  CardMedia,
  Chip,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Brand, PrimaryTheme } from "../../themes";

interface Icards {
  image: string;
  titulo: string;
  descricao: string;
  nome: string;
}

export const LargeCard = ({ image, titulo, descricao, nome }: Icards) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={
        smDown
          ? {
              minWidth: "328px",
              height: "496px",
              marginBottom: "5px",
              borderColor: "transparent",
            }
          : {
              minWidth: "735px",
              height: "388px",
              marginBottom: "5px",
              borderColor: "transparent",
            }
      }
    >
      {/* IMAGEM */}
      <CardMedia
        component="img"
        image={image}
        alt="carro novo"
        height={smDown ? "435px" : "326px"}
        sx={{
          zIndex: -1,
        }}
      ></CardMedia>

      {/* RELOGIO, TITULO, DESCRIÇAO */}
      <Box
        position={"relative"}
        marginTop={smDown ? "-435px" : "-326px"}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height={smDown ? "435px" : "326px"}
        paddingLeft={smDown ? 2 : 4}
        overflow="hidden"
        textOverflow="ellipsis"
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)",
        }}
        zIndex={1}
      >
        {/* RELOGIO */}
        <Chip
          icon={<AccessTimeIcon />}
          label="20:00:00"
          sx={{ width: "123px", backgroundColor: "#ffffff" }}
        ></Chip>

        {/* TITULO */}
        <Typography variant="h6" color={PrimaryTheme.palette.common.white}>
          {titulo}
        </Typography>

        {/* BOX DESCRIÇAO */}
        <Box
          maxHeight={smDown ? "84px" : "28px"}
          width={smDown ? "275px" : "663px"}
          // component={Typography}
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <Typography
            variant="body1"
            overflow="hidden"
            textOverflow="ellipsis"
            color={PrimaryTheme.palette.common.white}
            lineHeight="28px"
          >
            {descricao}
          </Typography>
        </Box>

        {/* BOX NOME E AVATAR */}
        <Box display="flex" alignContent="center" alignItems="center">
          <Avatar sx={{ width: 32, height: 32 }}>
            <Typography fontSize={14} color={PrimaryTheme.palette.common.white}>
              NV
            </Typography>
          </Avatar>
          <Typography marginLeft={1} color={PrimaryTheme.palette.common.white}>
            {nome}
          </Typography>
        </Box>

        {/* BOX KM ANO E PREÇO */}
        <Box
          display="flex"
          flexDirection={smDown ? "column" : "row"}
          justifyContent="space-between"
          minWidth="100%"
          height={smDown ? theme.spacing(10) : theme.spacing(4)}
        >
          <Box display="flex" flexDirection="row">
            <Box
              minWidth={theme.spacing(6.25)}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="4px"
              marginRight="12px"
              bgcolor={Brand.brand4}
            >
              <Typography
                color={Brand.brand1}
                variant="body1"
                height="32px"
                display="flex"
                alignItems="center"
              >
                0 KM
              </Typography>
            </Box>
            <Box
              width={theme.spacing(6.25)}
              sx={{ width: "50px", heigth: "32px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginRight="30px"
              bgcolor={Brand.brand4}
              borderRadius="4px"
            >
              <Typography
                color={Brand.brand1}
                variant="body1"
                height="32px"
                display="flex"
                alignItems="center"
              >
                2019
              </Typography>
            </Box>
          </Box>
          <Box
            minWidth={theme.spacing(20)}
            sx={{ width: "50px", heigth: "32px" }}
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="body1"
              color={PrimaryTheme.palette.common.white}
            >
              R$ 00.000,00
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* ACESSAR PAGINA LEILAO -> */}
      <Box
        width="auto"
        height="62px"
        bgcolor={PrimaryTheme.palette.primary.main}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft={2}
        paddingRight={2}
      >
        <Link>
          <Typography color={PrimaryTheme.palette.common.white} variant="body1">
            Acessar página do leilão
          </Typography>
        </Link>

        <Link>
          <Typography color={PrimaryTheme.palette.common.white}>
            <EastIcon />
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};
