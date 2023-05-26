// MyComponent.tsx
import { DefaultProps, Selectors, MantineNumberSize, Box } from "@mantine/core";
import useStyles, { MyComponentStylesParams } from "./CustomBUtton.styles";
import React from "react";

// This type will contain a union with all selectors defined in useStyles,
// in this case it will be `'root' | 'title' | 'description'`
type MyComponentStylesNames = Selectors<typeof useStyles>;

// DefaultProps adds system props support (margin, padding, sx, unstyled, styles and classNames).
// It accepts 2 types: styles names and styles params, both of them are optional
interface MyComponentProps
  extends DefaultProps<MyComponentStylesNames, MyComponentStylesParams> {
  radius?: MantineNumberSize;
  handlClick: () => void;
}

function MyComponent({
  classNames,
  styles,
  unstyled,
  radius,
  className,
  handlClick,
  ...others
}: MyComponentProps) {
  const { classes, cx } = useStyles(
    // First argument of useStyles is styles params
    { radius },
    // Second argument is responsible for styles api integration
    { name: "MyComponent", classNames, styles, unstyled }
  );

  // Use Box component as a base and spread ...others prop.
  // By doing so, you will add sx, padding (pt, pb, px, etc.) and margin (my, m, mt, etc.) props support
  return (
    <Box
      className={cx(classes.root, className)}
      {...others}
      onClick={handlClick}
    >
      <button className={classes.button}> click me for an alert</button>
      <div className={classes.title}>Awesome component</div>
      <div className={classes.description}>With Styles API support</div>
    </Box>
  );
}

export default MyComponent;
