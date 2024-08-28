import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "./index";

//Declaração de "coleção ou principal"

export default {
  title: "Global/Header",
  component: Header,
} as Meta<HeaderProps>;

//Declaração das variantes do obj. (se existir)

export const Primary: StoryObj<HeaderProps> = {};
