import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from './Layout'
import { styled } from '@mui/material'
import { theme } from 'theme/theme'

export default {
  title: 'Components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

const DemoContent = styled('div')`
  background-color: ${theme.palette.background.default};
`

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout>
    <DemoContent></DemoContent>
  </Layout>
)

export const LayoutTemplate = Template.bind({})
