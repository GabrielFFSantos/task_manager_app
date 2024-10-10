import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "storybook-addon-next-router",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["..\\public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
