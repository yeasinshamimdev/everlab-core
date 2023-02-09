import {
  extendTheme,
  theme as base,
  withDefaultSize,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  // @ts-ignore
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    colors: {
      white: {
        white: "#FFFFFF",
      },
      black: {
        black: "#000000",
      },
    },
    fonts: {
      body: `${base.fonts.body}`,
    },
  },
  withDefaultSize({
    size: "md",
    components: ["Button", "Tabs", "Input", "Avatar"],
  })
);
export default theme;
