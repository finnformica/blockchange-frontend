import NextLink from "next/link";
import { forwardRef } from "react";

// add next/link behaviour to MUI Link and ButtonBase components
const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

export const customTheme = {
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "&::selection": {
          background: "#98D5D5",
        },
        body: {
          backgroundColor: "#010135",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
};
