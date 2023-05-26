// MyComponent.styles.ts
import { createStyles, MantineNumberSize } from '@mantine/core';

// Styles params are optional
export interface MyComponentStylesParams {
  radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: MyComponentStylesParams) => {
  
  return {
  // add all styles as usual
  root: { borderRadius: theme.fn.radius(radius) },
  title: { fontSize: theme.fontSizes.sm },
  description: { fontSize: theme.fontSizes.xs },
  button:{backgroundColor: theme.primaryColor==='blue'?theme.colors.blue[5]:theme.colors[`${theme.primaryColor}`][5]},
}});