import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Poppins", "sans-serif"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#006f89",
    },
    secondary: {
      main: "#f50057",
    },
  },
  
});

export default theme;
