import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { colors } from "ui/theme";
import { Layout } from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
} as Meta;

export const LayoutStory: React.FC = () => (
  <Layout>
    <DemoContent></DemoContent>
  </Layout>
);

const DemoContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
`;
