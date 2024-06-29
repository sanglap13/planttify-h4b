// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#153448", // Green color
    },
    secondary: {
      main: "#4caf50", // Optional: You can set a secondary color if needed
    },
  },
});

export default theme;
