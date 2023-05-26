import React from "react";
import CustomComponents from "../components/customComponentsSection";
import MantineComponents from "../components/mantineComponentsSection";
import { Divider } from "@mantine/core";

const App = () => {
  return (
    <>
      <MantineComponents />
      <Divider my="sm" />
      <CustomComponents />
    </>
  );
};

export default App;
