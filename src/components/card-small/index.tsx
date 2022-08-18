import { Avatar, Card, CardMedia, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Brand } from "../../themes";

interface Icards {
  image: string;
  titulo: string;
  descricao: string;
  nome: string;
}

export const SmallCard = ({ image, titulo, descricao, nome }: Icards) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        minWidth: 312,
        height: 350,
        marginBottom: "5px",
        borderColor: "transparent",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="carro novo"
        height="152px"
      ></CardMedia>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="200px"
        marginLeft={1}
        overflow="hidden"
        textOverflow="ellipsis"
      >
        <Typography variant="h6">{titulo}</Typography>
        <Box
          maxHeight="28px"
          width="312px"
          // component={Typography}
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <Typography
            variant="body2"
            maxHeight="28px"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {descricao}
          </Typography>
        </Box>
        <Box display="flex" alignContent="center" alignItems="center">
          <Avatar sx={{ width: 32, height: 32 }}>
            <Typography fontSize={14}>NV</Typography>
          </Avatar>
          <Typography marginLeft={1}>{nome}</Typography>
        </Box>
        <Box display="flex" width="100%" height={theme.spacing(4)}>
          <Box
            minWidth={theme.spacing(6.25)}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
            marginRight="12px"
            bgcolor={Brand.brand4}
          >
            <Typography color={Brand.brand1} variant="body1">
              0 KM
            </Typography>
          </Box>
          <Box
            minWidth={theme.spacing(6.25)}
            sx={{ width: "50px", heigth: "32px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginRight="30px"
            bgcolor={Brand.brand4}
            borderRadius="4px"
          >
            <Typography color={Brand.brand1} variant="body1">
              2019
            </Typography>
          </Box>
          <Box
            minWidth={theme.spacing(20)}
            sx={{ width: "50px", heigth: "32px" }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography variant="body1">R$ 00.000,00</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
