// import { Warning } from "@mui/icons-material";
import { createTheme } from "@mui/material";
// import { grey } from "@mui/material/colors";




export const Brand = {
  brand1: "#4529E6",
  brand2: "#5126EA",
  brand3: "#B0A6F0",
  brand4: "#EDEAFD",
};

export const Grayscale = {
  grey0: "#0B0D0D",
  grey1: "#212529",
  grey2: "#495057",
  grey3: "#868E96",
  grey4: "#ADB5BD",
  grey5: "#CED4DA",
  grey6: "#DEE2E6",
  grey7: "#E9ECEF",
  grey8: "#F1F3F5",
  grey9: "#F8F9FA",
  grey10: "#FDFDFD",
};

export const Alert = {
  alert1: "#CD2B31",
  alert2: "#FDD8D8",
  alert3: "#FFE5E5",
};

export const Sucess = {
  SUCESS1: "#18794E",
  SUCESS2: "#CCEBD7",
  SUCESS3: "#DDF3E4",
};

export const Randon = {
  randon1: "#E34D8C",
  randon2: "#C04277",
  randon3: "#7D2A4D",
  randon4: "#7000FF",
  randon5: "#6200E3",
  randon6: "#36007D",
  randon7: "#349974",
  randon8: "#2A7D5F",
  randon9: "#153D2E",
  randon10: "#6100FF",
  randon11: "#5700E3",
  randon12: "#30007D",
};

export const PrimaryTheme = createTheme({
  palette: {
    primary: {
      dark: "#4529e6",
      main: "#5126ea",
      light: "#B0A6F0",
      A100: "#EDEAFD",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#495057",
      dark: "#0B0D0D",
      light: "#FDFDFD",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
    },
    grey: {
      "900": "#0B0D0D",
      "800": "#212529",
      "700": "#495057",
      "600": "#868E96",
      "500": "#ADB5BD",
      "400": "#CED4DA",
      "300": "#DEE2E6",
      "200": "#E9ECEF",
      "100": "#F1F3F5",
      "50": "#F8F9FA",
      A100: "#FDFDFD",
    },
    text: {
      primary: "#212529",
      secondary: "#495057",
    },
    warning: {
      main: "#FDD8D8",
      light: "#FFE5E5",
      dark: "#CD2B31",
    },
  },
  typography: {
    fontFamily: "'Lexend', 'Inter', 'Arial', 'sans-srif'",
    h1: {
      fontFamily: "'Lexend'",
      fontWeight: 700,
      fontSize: "3.14em",
      lineHeight: "1.2em",
    },
    h2: {
      fontFamily: "'Lexend'",
      fontWeight: 600,
      fontSize: "2.57em",
      lineHeight: "1em",
    },
    h3: {
      fontFamily: "'Lexend'",
      fontWeight: 500,
      fontSize: "2.28em",
      lineHeight: "1em",
    },
    h4: {
      fontFamily: "'Lexend'",
      fontWeight: 500,
      fontSize: "2em",
      lineHeight: "1em",
    },
    h5: {
      fontFamily: "'Lexend'",
      fontWeight: 500,
      fontSize: "1.71em",
      lineHeight: "1em",
    },
    h6: {
      fontFamily: "'Lexend'",
      fontWeight: 500,
      fontSize: "1.42em",
      lineHeight: "1em",
    },
    subtitle1: {
      fontFamily: "'Inter'",
      fontWeight: 600,
      fontSize: "1.14em",
      lineHeight: "1em",
    },
    subtitle2: {
      fontFamily: "'Inter'",
      fontWeight: 600,
      fontSize: "1em",
      lineHeight: "1em",
    },
    body1: {
      fontFamily: "'Inter'",
      fontWeight: 400,
      fontSize: "1em",
      lineHeight: "1em",
    },
    body2: {
      fontFamily: "'Inter'",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "1em",
    },
  },
});
