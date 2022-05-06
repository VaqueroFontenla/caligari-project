import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";
import styled from "styled-components";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => (
  <CardWrapper>
    <Card>
      <p>
        Curabitur fermentum sollicitudin egestas. Nam pretium elementum
        scelerisque. Donec aliquet, libero in interdum efficitur, urna ante
        maximus ligula, ac interdum ante augue eget ex. Aliquam nunc mi, dapibus
        at quam non, consequat molestie sapien. Cras nec congue libero. Nunc
        mollis eleifend dui. Pellentesque vel metus vitae odio semper euismod a
        non urna.
      </p>
    </Card>
  </CardWrapper>
);

const CardWrapper = styled.div`
  max-width: 300px;
`;
