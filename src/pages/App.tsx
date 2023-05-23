import React from "react";
import CustomComponents from "../components/customComponents";
import MantineComponents from "../components/mantineComponents";
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
