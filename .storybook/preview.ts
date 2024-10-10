import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/app/globals.css";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      current: "dark",
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
  },
  tags: ["autodocs"],
};

export default preview;
