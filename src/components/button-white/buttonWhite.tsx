import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PrimaryTheme } from "../../themes";

interface PropsProvider {
  tittle: string;
}

export const ButtonWhite = ({ tittle }: PropsProvider) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const smMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={
        smDown
          ? { width: "90%", height: "55px", borderColor: "#ffffff" }
          : smMedium
          ? { width: "180px", height: "55px", borderColor: "#ffffff" }
          : { width: "220px", height: "55px", borderColor: "#ffffff" }
      }
    >
      <Typography color={PrimaryTheme.palette.grey.A100} variant="body1">
        {tittle}
      </Typography>
    </Button>
  );
};
