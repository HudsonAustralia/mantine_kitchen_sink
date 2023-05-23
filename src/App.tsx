import React, { useState } from "react";
import {
  MantineProvider,
  Flex,
  ColorScheme,
  ActionIcon,
  ColorSchemeProvider,
} from "@mantine/core";
import { Sun, SunMoon } from "tabler-icons-react";
import customLightTheme from "./themes/customLightTheme";
import customDarkTheme from "./themes/customDarkTHeme";
import IndexPage from "./pages/App";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={
          colorScheme === "dark"
            ? { ...customDarkTheme, colorScheme }
            : { ...customLightTheme, colorScheme }
        }
      >
        <Flex justify={"center"}>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size="1.1rem" /> : <SunMoon size="1.1rem" />}
          </ActionIcon>
        </Flex>
        <IndexPage />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
