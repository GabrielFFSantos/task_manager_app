import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./index";

//Declaração de "coleção ou principal"

export default {
  title: "Components/Button",
  args: {
    color: "primary",
    size: "large",
    children: "Button",
  },
  component: Button,
} as Meta<ButtonProps>;

//Declaração das variantes do obj. (se existir)

export const Primary: StoryObj<ButtonProps> = {
  args: {
    color: "primary",
    size: "large",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: { color: "secondary", size: "large" },
};

export const Warning: StoryObj<ButtonProps> = {
  args: { color: "warning", size: "large" },
};

export const Blocked: StoryObj<ButtonProps> = {
  args: { color: "blocked", size: "large" },
};
