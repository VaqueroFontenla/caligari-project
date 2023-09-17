import { styled } from '@mui/material'

export const StyledCheckboxCaligariLabel = styled('input')(
  ({ theme }) => `
    display: none;
    :checked {

      background-color:${theme.palette.secondary.main}
    }
  `
)
StyledCheckboxCaligariLabel.defaultProps = {
  type: 'checkbox',
}

export const StyledCaligariLabelWrapper = styled('li')(
  ({ theme }) => `
    display: inline-grid;
    grid-template-columns: auto 1fr;
    column-gap:${theme.spacing(1)};
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(3)};
    background-color: ${theme.palette.background.default};
    border-radius:  ${theme.spacing(4)};
  `
)

export const StyledCaligariLabel = styled('label')(
  ({ theme }) => `
    font-size: ${theme.spacing(3)};
    font-weight: bold;
  `
)
