import { Meta, Story } from '@storybook/react/types-6-0'
import { Link, LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args}>Hola Mundo</Link>
export const LinkTemplate = Template.bind({})
LinkTemplate.args = { href: 'https://github.com/VaqueroFontenla', title: 'Loretus Github' }
