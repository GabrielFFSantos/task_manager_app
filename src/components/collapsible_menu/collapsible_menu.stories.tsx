import { Meta, StoryObj } from "@storybook/react";
import CollapsibleMenu, { CollapsibleMenuProps } from "./index";

//Declaração de "coleção ou principal"

export default {
  title: "Global/Header/Collapsible-Menu",
  component: CollapsibleMenu,
} as Meta<CollapsibleMenuProps>;

//Declaração das variantes do obj. (se existir)

export const Primary: StoryObj<CollapsibleMenuProps> = {};
