// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Green color
    },
    secondary: {
      main: "#ff9800", // Optional: You can set a secondary color if needed
    },
  },
});

export default theme;
