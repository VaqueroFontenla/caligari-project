import { styled } from '@mui/material'

export interface LinkProps {
  title: string
  children: string
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, children, title }) => (
  <StyledLink href={href} title={title} target="_blank" rel="noopener noreferrer">
    {children}
  </StyledLink>
)

const StyledLink = styled('a')(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    font-weight:bold;
`
)
