import { styled } from '@mui/material'

export const StyledCheckboxCaligariLabel = styled('input')(
  ({ theme }) => `
    display: none;
  `
)
StyledCheckboxCaligariLabel.defaultProps = {
  type: 'checkbox',
}

export const StyledCaligariLabelWrapper = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<{
  isChecked?: boolean
}>(
  ({ theme, isChecked }) => `
    background-color: ${
      isChecked ? theme.palette.secondary.main : theme.palette.background.default
    };
    border-radius:  ${theme.spacing(4)};
  `
)

export const StyledCaligariLabel = styled('label')(
  ({ theme }) => `
    font-size: ${theme.spacing(3)};
    font-weight: bold;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    column-gap:${theme.spacing(1)};
    align-items: center;
    width:100%;
    height:100%;
    padding: ${theme.spacing(1)} ${theme.spacing(3)};
  `
)
