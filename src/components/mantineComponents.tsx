import React from "react";
import { Button, Flex, ActionIcon } from "@mantine/core";
import { Adjustments } from "tabler-icons-react";

const MantineComponents = () => {
  return (
    <Flex>
      <Button variant="light">Settings</Button>
      <ActionIcon>
        <Adjustments size="1.125rem" />
      </ActionIcon>
    </Flex>
  );
};

export default MantineComponents;
