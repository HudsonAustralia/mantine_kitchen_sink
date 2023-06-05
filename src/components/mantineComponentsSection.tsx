import React from "react";
import {
  Button,
  Flex,
  ActionIcon,
  Group,
  CloseButton,
  Title,
} from "@mantine/core";
import { Adjustments } from "tabler-icons-react";
import { Settings } from "tabler-icons-react";
import { ButtonCopy } from "./mantineUIconponents/copyButton/copyButton";

const MantineComponents = () => {
  return (
    <>
      <Flex direction={"column"} align={"stretch"} maw={"100%"}>
        <Title order={1} mb={42}>
          Mantine Components
        </Title>
        {/* {mantine components} */}
        <Group>
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
          <ButtonCopy />
        </Group>
      </Flex>
    </>
  );
};

export default MantineComponents;
