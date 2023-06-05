import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    // override dark colors to change them for all components
  },
  primaryColor: "orange",
  globalStyles: (theme) => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
  }),
};

export default theme;
