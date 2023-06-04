import React from "react";
import { Button, Flex, ActionIcon, Group, CloseButton } from "@mantine/core";
import { Adjustments } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";

const MantineComponents = () => {
  return (
    <Flex justify={"center"} mt={12}>
      <Button>Settings</Button>
      <ActionIcon>
        <Adjustments size="1.125rem" />
      </ActionIcon>
      <ActionIcon variant="transparent">
        <Settings size="1rem" />
      </ActionIcon>
      <Group position="center">
        <CloseButton aria-label="Close modal" />
        <CloseButton title="Close popover" size="xl" iconSize={20} />
      </Group>
    </Flex>
  );
};

export default MantineComponents;
