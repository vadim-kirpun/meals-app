import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffb300",
    },
    secondary: {
      main: "#f9572a",
    },
    background: {
      default: "#282c34",
      paper: "#303640",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
