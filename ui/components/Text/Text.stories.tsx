import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const DefaultText: ComponentStory<typeof Text> = () => (
  <Text>Cariño</Text>
);
