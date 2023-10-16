import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

export const theme = createTheme({
  palette: {
    ochre: {
      main: "#ffc400aa",
    },
  },
});
