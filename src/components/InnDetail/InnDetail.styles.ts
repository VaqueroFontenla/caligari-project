import { styled } from '@mui/material'

export const InnFeaturesWrapper = styled('ul')(
  ({ theme }) => `
    display: grid;
    grid-template-columns: auto auto;
    gap:${theme.spacing(2)} ${theme.spacing(3)};
    justify-content: start;
`
)

export const CaligariLabelsText = styled('span')(
  ({ theme }) => `
  display: flex;
  align-items: center;
  font-weight:700; 
  font-size: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(3)};

  ::after {
    content: '';
    height: 1px;
    background-color: ${theme.palette.primary.main};
    flex-grow: 1;
    margin-left:${theme.spacing(4)};
  }`
)
