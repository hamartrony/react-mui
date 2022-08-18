import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BlueBox } from "../../components/blue-box/blueBox";
import { ButtonWhite } from "../../components/button-white/buttonWhite";
import { LargeCard } from "../../components/card-large";
import { SmallCard } from "../../components/card-small";
import { ListCard } from "../../components/list-card/listcard";
import { cardCars, cardMotos } from "../../data";
import { LayoutPages } from "../../layouts/LayoutPages";
import { PrimaryTheme } from "../../themes";

export const Dashbard = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const smMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LayoutPages>
      <BlueBox>
        <Box
          width={smDown ? "100%" : smMedium ? "100%" : "70%"}
          maxWidth="880px"
          height={theme.spacing(20.65)}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant={smDown ? "h3" : "h1"}
            component="h1"
            color={PrimaryTheme.palette.primary.contrastText}
            textAlign="center"
            display="flex"
            flexWrap="wrap"
            height="200px"
          >
            Velocidade e experiência em um lugar feito para você
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color={PrimaryTheme.palette.primary.contrastText}
            textAlign="center"
          >
            Um ambiente feito para você explorar o seu melhor
          </Typography>
        </Box>
        <Box
          width={smDown ? "100%" : smMedium ? "100%" : theme.spacing(95)}
          height={smDown ? theme.spacing(30) : theme.spacing(20.65)}
          display="flex"
          flexDirection={smDown ? "column" : "row"}
          justifyContent="space-around"
          alignItems="center"
        >
          <ButtonWhite tittle="Leilão" />
          <ButtonWhite tittle="Carros" />
          <ButtonWhite tittle="Motos " />
        </Box>
      </BlueBox>

      {/* Lista de LEILAO  */}
      <Box maxWidth="1600px" width="100%">
        <ListCard tittle="Leilão">
          {cardCars.map((item) => (
            <LargeCard
              key={item.id}
              descricao={item.descricao}
              image={item.image}
              nome={item.nome}
              titulo={item.titulo}
            />
          ))}
        </ListCard>

        {/* Lista de CARROS  */}
        <ListCard tittle="Carros">
          {cardCars.map((item) => (
            <SmallCard
              key={item.id}
              descricao={item.descricao}
              image={item.image}
              nome={item.nome}
              titulo={item.titulo}
            />
          ))}
        </ListCard>

        {/* Lista de MOTOS */}
        <ListCard tittle="Motos">
          {cardMotos.map((item) => (
            <SmallCard
              key={item.id}
              descricao={item.descricao}
              image={item.image}
              nome={item.nome}
              titulo={item.titulo}
            />
          ))}
        </ListCard>
      </Box>
    </LayoutPages>
  );
};
