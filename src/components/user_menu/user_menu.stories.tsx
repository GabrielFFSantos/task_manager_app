import { Meta, StoryObj } from "@storybook/react";
import UserMenu, { UserMenuProps } from "./index";

//Declaração de "coleção ou principal"

export default {
  title: "Global/Header/UserMenu",
  component: UserMenu,
} as Meta<UserMenuProps>;

//Declaração das variantes do obj. (se existir)

export const Primary: StoryObj<UserMenuProps> = {};
