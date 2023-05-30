import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import mockedInns from '../../mocks/inns.json';
import { InnCard } from './InnCard';

export default {
  title: 'Components/InnCard',
  component: InnCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InnCard>;

const Template: ComponentStory<typeof InnCard> = (args) => <div style={{width:'320px'}}><InnCard {...args} /></div>;

export const InnCardTemplate = Template.bind({});

InnCardTemplate.args = {
  inn: mockedInns[0],
};
