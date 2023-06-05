import { Header, Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Search } from "tabler-icons-react";
import useStyles from "./header.style";
import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
interface HeaderSearchProps {
  links: { link: string; label: string }[];
  Component?: ReactJSXElement;
}

export function HeaderSearch({ links, Component }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} className={classes.header} mb={12}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          {/* <MantineLogo size={28} /> */}
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size="1rem" />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          {Component}
        </Group>
      </div>
    </Header>
  );
}
