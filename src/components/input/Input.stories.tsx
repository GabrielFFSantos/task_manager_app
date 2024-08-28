import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./index";

//Declaração de "coleção ou principal"

export default {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "placeholder" },
} as Meta<InputProps>;

//Declaração das variantes do obj. (se existir)

export const Primary: StoryObj<InputProps> = {};
