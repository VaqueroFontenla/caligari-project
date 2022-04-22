import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = () => (
  <Tag>Barra de metal</Tag>
);
