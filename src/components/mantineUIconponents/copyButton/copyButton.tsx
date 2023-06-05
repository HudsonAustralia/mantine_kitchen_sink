import { Button, rem, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Copy, Check } from "tabler-icons-react";
import React from "react";

export function ButtonCopy() {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: "slide-down" }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={
          clipboard.copied ? <Check size="1.2rem" /> : <Copy size="1.2rem" />
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          rightIcon: { marginLeft: rem(22) },
        }}
        onClick={() =>
          clipboard.copy("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
      >
        Copy link to clipboard
      </Button>
    </Tooltip>
  );
}
