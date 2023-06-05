import React, { useState } from "react";
import {
  MantineProvider,
  Flex,
  ColorScheme,
  ActionIcon,
  ColorSchemeProvider,
  Container,
  useMantineTheme,
} from "@mantine/core";
import { Sun, SunMoon } from "tabler-icons-react";
import customLightTheme from "./themes/customLightTheme";
import customDarkTheme from "./themes/customDarkTHeme";
import IndexPage from "./pages/indexPage";
import { HeaderSearch } from "./components/mantineUIconponents/header/header";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

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
            ? {
                ...customDarkTheme,
                colorScheme,
              }
            : { ...customLightTheme, colorScheme }
        }
      >
        <Flex direction={"column"} sx={{ height: "100vh", width: "100%" }}>
          <HeaderSearch
            links={[
              { label: "Custom Components", link: "/" },
              { label: "Mantine Components", link: "/" },
            ]}
            Component={
              <ActionIcon
                variant="outline"
                color={dark ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? <Sun size="1.1rem" /> : <SunMoon size="1.1rem" />}
              </ActionIcon>
            }
          />
          <Container sx={{ flex: 1 }} maw={"100%"} w={"100%"}>
            <IndexPage />
          </Container>
        </Flex>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
